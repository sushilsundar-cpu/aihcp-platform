# AIHCP Platform

## V6.0 Build 0 Foundation
This repository is governed by the AIHCP V6.0 integrated authoritative baseline.

Current branch: `build0/foundation`.

### Build 0 rules
- No product-policy changes in implementation.
- No direct production schema edits; use versioned migrations.
- Admin authorization is server-enforced and requires MFA.
- Entitlements are centralized; Founding Plus inherits Plus.
- Mutual messaging remains available after mutual connection regardless of paid tier.
- Secrets are never committed.
- Production promotion requires explicit founder approval.
- Ambiguity = STOP_AND_ASK.

This branch establishes foundation contracts only; it does not claim live Supabase, Expo, Vercel, Inngest, PostHog or OpenAI connectivity.
