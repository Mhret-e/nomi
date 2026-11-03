# Nomi 0.3.0 · Catch-up and screen redesign

Development APK, Android 9+, same signing key as 0.1.0/0.2.0. Install as an update.

- Tap Catch-up to open the rounded dialog with bouncing Nomi, Important/Kept quiet groups, app icons, timestamps and Done. Marks are learned on-device; each round has up to three quiet items.
- Board has a gold/silver/bronze podium, avatars, lower ranking cards, voucher milestones and current-day account-scoped caching. Preview design is explicitly labeled and never awards points. Live competition requires configured Supabase and actual participants.
- Six Sharjah/Dubai business listings are derived from the supplied reference screenshots, not independently verified online. Find store opens a map search. There are no Nomi merchant agreements or offers yet. The backend migration blocks voucher issuance without an explicit administrator-approved agreement.
- Verified store photos are unfinished: business/image websites are blocked in the current cloud environment. Slots are labeled unavailable rather than showing fabricated venue images. No current ratings, prices, hours, distances or third-party discounts are asserted.
- Recap uses rounded statistic cards and a mint daily chart with real local history. Missing monitoring data is not counted as time saved.

Verified: build, all 37 unit/rendered-UI tests, lint (0 errors; 18 non-blocking warnings), and isolated PostgreSQL RLS/reward/partner/leaderboard tests. Same certificate and no new requested permissions. Rendered captures are from simulated Android with test fixtures, not actual user data or a live leaderboard. Device-specific notifications/overlays and live Supabase are not newly verified.

Supabase remains unconfigured in this build. This is a debug-signed development version, not a production release.
