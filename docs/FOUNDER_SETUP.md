# Founder setup order
1. GitHub repository: sushilsundar-cpu/aihcp-platform. Build work occurs on reviewed branches, not directly on main.
2. Create separate Supabase DEV, STAGING and PROD projects. Do not reuse secrets.
3. Create Expo account/project for Member app and Vercel project for Admin/API web surfaces.
4. Add PostHog and Inngest when Build 0 reaches telemetry/workflow wiring.
5. Add OpenAI, RevenueCat and IDV credentials only in their relevant builds.
6. Store secrets only in provider secret managers/environment settings; never commit them.
7. Require explicit founder approval for PROD promotion.
