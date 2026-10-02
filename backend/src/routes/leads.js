import { Router } from "express";
import { LeadValidationError, validateLead } from "../lead-validation.js";

export function createLeadsRouter(collection) {
  const router = Router();

  router.post("/", async (req, res, next) => {
    if (req.body?.website) return res.status(202).json({ success: true });

    let lead;
    try {
      lead = validateLead(req.body);
    } catch (error) {
      if (error instanceof LeadValidationError) {
        return res.status(400).json({ error: error.message });
      }
      return next(error);
    }

    try {
      const result = await collection.insertOne({
        ...lead,
        status: "new",
        receivedAt: new Date(),
        request: {
          ip: req.ip,
          userAgent: req.get("user-agent") ?? "",
        },
      });

      return res.status(201).json({ success: true, id: result.insertedId });
    } catch (error) {
      if (error?.code === 11000) return res.status(409).json({ error: "This LeadiD has already been submitted." });
      return next(error);
    }
  });

  return router;
}