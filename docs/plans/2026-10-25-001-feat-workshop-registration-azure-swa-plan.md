---
title: "feat: Workshop registration and Mollie payment on Azure Static Web Apps"
type: feat
status: active
date: 2026-10-25
---

# feat: Workshop registration and Mollie payment on Azure Static Web Apps

## Overview

Add a public workshop registration site with Mollie payments, hosted on Azure Static Web Apps (SWA) at `workshop.itdepends.be`, with a managed Azure Functions API. Invoices are **not** automated: after payment, Jan creates and sends the invoice manually in Lucy (Peppol) from the stored registration data.

## Decisions (made with the user)

| Topic | Decision |
|---|---|
| Hosting | Azure Static Web Apps, managed API (all plans, Free to start) |
| Domain | `workshop.itdepends.be` (registration at `/`, deck at `/deck/`) |
| Azure | Existing MVP subscription |
| Storage | Azure Table Storage |
| Email | Azure Communication Services Email |
| Payment | Mollie only (Bancontact, card) |
| Invoicing | Manual, in Lucy over Peppol, after payment |
| Customers | Belgian companies only, flat 21% VAT (no reverse charge) |

## Deck placement (decided)

SWA serves the public registration site at `/` and the gated deck at `/deck/`. `ainativedev.itdepends.be` stays on GitHub Pages (existing `deploy.yml`) until the deck is verified on SWA, then is retired or redirected.

Mechanics: the deck build is unchanged (`base: './'`, `dist/`). A prepare step (`scripts/prepare-swa.mjs`) assembles `swa-dist/`: deck build copied to `swa-dist/deck/`, the public site at `swa-dist/` root (placeholder until Phase 3), plus `staticwebapp.config.json`. `/deck` redirects to `/deck/` so relative assets resolve.

## Constraints verified from Microsoft docs

- Managed API is available on all plans; "bring your own" functions need Standard (not needed).
- Managed functions are **HTTP triggers only**: no timer/queue triggers, so unpaid seat holds expire lazily (computed at read time), not by a cleanup job.
- Supported API runtimes differ between doc pages: confirm the current Node version at Phase 2 start and pin it.

## Architecture

```
Browser ── static files (Vite build, dist/) ──────────────┐
   │                                                       │
   └── /api/* ──> SWA managed Functions (Node, TypeScript) │  SWA
            ├─ GET  /api/workshops                         │
            ├─ POST /api/register ──> Table Storage        │
            │                      └> Mollie create payment│
            ├─ POST /api/mollie-webhook ──> Mollie get payment
            │                           ├> Table Storage   │
            │                           └> ACS Email       │
            └─ GET  /api/registration/{id}                 ┘
```

### Data model (Table Storage)

- `Workshops` (PartitionKey `workshop`, RowKey = workshop id): title, date, location, price excl. VAT in cents, capacity. Seeded from `workshops.json` (single source of truth in the repo, bundled into the API at build time so the browser never sets a price).
- `Registrations` (PartitionKey = workshop id, RowKey = registration id): status (`pending` | `paid` | `failed` | `expired` | `cancelled`), attendee name and email, company name, VAT number, billing address, invoice email, optional PO reference, quantity, Mollie payment id, timestamps, `holdExpiresAt`.
- Seats left = capacity minus (`paid` + `pending` with `holdExpiresAt` in the future). Writes use ETag optimistic concurrency to avoid overselling.

### Flow

1. Page loads `GET /api/workshops`.
2. Form submit → `POST /api/register`: validate input (server-side), check Belgian VAT format and checksum, call VIES (soft-fail: flag for manual review, do not block), check seats, write `pending` registration with 15-minute hold, create Mollie payment (amount computed server-side incl. 21% VAT; `metadata` holds only the registration id), return `checkoutUrl`.
3. Buyer pays on Mollie; redirected to `/thanks?id=...`, which polls `GET /api/registration/{id}`.
4. Mollie calls `POST /api/mollie-webhook` with a payment id. The function fetches the payment with the API key (never trusts the request body), updates status idempotently, and on `paid` sends two emails via ACS: confirmation to attendee, and a summary with all billing data to Jan.
5. Jan creates the invoice in Lucy manually from the notification email or the table.

## Implementation Units

### Phase 1: Azure and deploy skeleton

1. Create resource group and SWA (Free) in the MVP subscription, West Europe; storage account (Table) in the same region.
2. Add custom domain `workshop.itdepends.be` (DNS CNAME to the SWA hostname; managed certificate).
3. Add a new SWA workflow (`.github/workflows/azure-static-web-apps.yml`) that builds, runs `scripts/prepare-swa.mjs`, and deploys `swa-dist` with `skip_app_build: true`; secret `AZURE_STATIC_WEB_APPS_API_TOKEN`. Keep `VITE_WORKSHOP_PASSWORD_HASH` in the build env. Leave `deploy.yml` (Pages) untouched until cutover.
4. Add `staticwebapp.config.json`: API runtime, navigation fallback, security headers, `/api/*` anonymous.
5. Add `swa-cli.config.json` via `swa init` (never by hand).
6. Verify the deck still builds and loads on the SWA hostname.

### Phase 2: API foundation

1. `api/` Functions project (Node, TypeScript, v4 model); `api/local.settings.json` gitignored.
2. Shared modules: config/env, Table Storage client, Mollie client wrapper, ACS email client, validators (Belgian VAT, email, required fields), seat-availability logic.
3. `GET /api/workshops` with seats left.
4. Unit tests for validators and seat logic (including concurrent reservation and hold expiry).

### Phase 3: Registration and payment

1. Vite multi-page entry for the public site (the deck's `main.tsx` is wholly password-gated, so a separate entry is required): workshop list, registration form, thanks page with polling.
2. `POST /api/register` and `GET /api/registration/{id}`.
3. `POST /api/mollie-webhook` (idempotent, fetches payment).
4. End-to-end test in Mollie **test mode** (Bancontact and card, failed and cancelled payments, expired holds).

### Phase 4: Email, legal, hardening

1. ACS Email: verify sending domain (SPF, DKIM, DMARC), templates for attendee and Jan.
2. Rate limiting and basic abuse protection on `POST /api/register`; request size limits; honeypot field.
3. Terms, cancellation/refund policy, privacy notice (GDPR; EU region). Link from the form; require acceptance checkbox.
4. Structured logging; no card or payment secrets stored.

### Phase 5: Go-live

1. Mollie account activated (KYB), Bancontact enabled; switch SWA app settings to live key.
2. Confirm with the accountant: Peppol obligation for these invoices; teaching VAT exemption question.
3. DNS cutover; retire or redirect GitHub Pages per the open question.
4. Seed first real workshops.

## Secrets and settings

SWA application settings only: `MOLLIE_API_KEY`, `STORAGE_CONNECTION_STRING`, `ACS_CONNECTION_STRING`, `ACS_SENDER_ADDRESS`, `NOTIFY_EMAIL`, `PUBLIC_BASE_URL`. Use the Mollie test key everywhere except production (preview-environment settings behaviour to be confirmed in Phase 1).

## Risks

- Overselling under concurrent registrations: ETag concurrency plus tests.
- Webhook spoofing: mitigated by always fetching the payment from Mollie.
- Spam registrations exhausting seats: short hold, rate limiting, honeypot.
- ACS domain verification delays: start DNS records early in Phase 1.
- Manual invoicing does not scale: revisit if Lucy grants API keys or volume grows.

## Out of scope

Automated invoice creation, reverse charge / non-Belgian customers, individuals/consumers, refunds UI (use the Mollie dashboard), discount codes, group seat management.
