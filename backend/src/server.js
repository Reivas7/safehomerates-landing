import "dotenv/config";
import cors from "cors";
import express from "express";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import { MongoClient } from "mongodb";
import { createLeadsRouter } from "./routes/leads.js";

const port = Number(process.env.PORT ?? 10000);
const databaseName = process.env.DB_NAME ?? "Reivas";
const collectionName = process.env.MONGODB_COLLECTION ?? "safehomerates_leads";
const allowedOrigins = new Set(
  (process.env.CORS_ORIGINS ?? "http://localhost:5173")
    .split(",")
    .map((origin) => origin.trim())
    .filter(Boolean),
);

async function start() {
  if (!process.env.MONGODB_URI) throw new Error("MONGODB_URI is required.");

  const mongoClient = new MongoClient(process.env.MONGODB_URI);
  await mongoClient.connect();

  const database = mongoClient.db(databaseName);
  const leads = database.collection(collectionName);
  const leadIdIndexes = (await leads.indexes()).filter(
    (index) => Object.keys(index.key ?? {}).length === 1 && index.key.leadId === 1,
  );
  for (const index of leadIdIndexes) {
    if (index.unique) await leads.dropIndex(index.name);
  }
  if (!leadIdIndexes.some((index) => !index.unique)) {
    await leads.createIndex({ leadId: 1 }, { name: "leadid_lookup" });
  }

  const app = express();
  app.disable("x-powered-by");
  app.set("trust proxy", 1);
  app.use(helmet());
  app.use(cors({
    origin(origin, callback) {
      if (!origin || allowedOrigins.has(origin)) return callback(null, true);
      return callback(new Error("Origin is not allowed by CORS."));
    },
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
  }));
  app.use(express.json({ limit: "32kb" }));

  app.get("/health", async (_req, res) => {
    try {
      await database.command({ ping: 1 });
      return res.status(200).json({ status: "ok", database: "connected" });
    } catch {
      return res.status(503).json({ status: "error", database: "unavailable" });
    }
  });

  app.use("/api/leads", rateLimit({ windowMs: 15 * 60 * 1000, limit: 30, standardHeaders: "draft-7", legacyHeaders: false }));
  app.use("/api/leads", createLeadsRouter(leads));
  app.use((error, _req, res, _next) => {
    if (error?.type === "entity.parse.failed") return res.status(400).json({ error: "Invalid JSON body." });
    if (error?.message === "Origin is not allowed by CORS.") return res.status(403).json({ error: "Origin is not allowed." });
    console.error("Lead API request failed.", error?.name ?? "UnknownError");
    return res.status(500).json({ error: "The request could not be completed." });
  });

  const server = app.listen(port, "0.0.0.0", () => {
    console.log(`Lead API listening on port ${port}.`);
  });

  const shutdown = () => {
    server.close(async () => {
      await mongoClient.close();
      process.exit(0);
    });
  };
  process.on("SIGTERM", shutdown);
  process.on("SIGINT", shutdown);
}

start().catch((error) => {
  console.error("Lead API startup failed.", error?.message ?? "Unknown error");
  process.exit(1);
});