# SafeHomeRates Lead API

Standalone Node service for Render. It accepts the website's `POST /api/leads` requests and stores documents in the MongoDB database `Reivas`, collection `safehomerates_leads`.

## Local setup

1. Run `npm install` in this folder.
2. Copy `.env.example` to `.env` and set `MONGODB_URI` to the rotated MongoDB connection string.
3. Run `npm start`. The API listens on `http://localhost:10000` by default; use `npm test` for validation checks.

Never commit `.env` or put the MongoDB URI in frontend variables. Grant the MongoDB database user access only to the `Reivas` database.

## Render

The root `render.yaml` defines the web service. Set `MONGODB_URI` and `CORS_ORIGINS` in Render. `CORS_ORIGINS` is a comma-separated list of exact website origins, for example `https://safehomerates.com,https://www.safehomerates.com`. Render supplies `PORT`; database and collection defaults are `Reivas` and `safehomerates_leads`.

Set the frontend's `VITE_API_URL` to the deployed service origin, without `/api/leads`; the existing form appends that path. Check `/health` after deploy.

## Endpoints

- `GET /health` pings MongoDB and returns service health.
- `POST /api/leads` validates and stores a lead. A valid Jornaya LeadiD is required and indexed uniquely. Duplicate LeadiDs return `409`; invalid submissions return `400`.

The stored record includes contact data, service type and answers, ZIP code, consent text and flag, client submission time, server receipt time, page URL, UTM/click attribution, LeadiD, TrustedForm certificate URL (when provided), request IP/user agent, and a `new` status. The honeypot is accepted with `202` and is not stored.

The form now provides a hidden `universal_leadid` input and forwards its value as `leadId`; it reads TrustedForm's `xxTrustedFormCertUrl` field when the vendor script populates it. Add the official Jornaya and TrustedForm scripts/configuration supplied for your account to the site before accepting production leads. The API intentionally rejects submissions without a valid LeadiD, so test the scripts end to end before launch.