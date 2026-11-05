# Nomi 0.4.0 development build

Includes the smiling animated mascot, catch-up dialog, podium leaderboard, store directory and recap from previous updates. Adds confirmed local-history erasure, an online account-deletion client, and public configuration for the supplied Supabase project. Targets Android API 36, requires Android 9 or newer, and retains the previous debug signing certificate.

**Connected features are not yet live-verified.** Database migrations and authenticated Edge Functions must be deployed in your Supabase project. This build does not create them. The current development environment blocks the project hostname.

[Download backend setup files](Nomi-0.4.0-backend-setup.zip). Start with `docs/BACKEND_SETUP.md` inside the ZIP. Do not run test bootstrap files on a hosted database; no administrative credentials belong in the app or cashier client.

No stores have agreed to Nomi vouchers yet. Listings are based on supplied screenshots; photographs, current business details, offers and commercial redemption remain unverified. No example leaderboard data is presented as real participants.

A deletion web page is prepared but needs hosting, a real support contact and allowed browser origin configuration. Online deletion keeps local history until server confirmation. Erase device history signs out and clears this phone without deleting the cloud account.

This is a debug-signed test APK, not a Play-approved release. Sensitive-access permissions may trigger Android/Play Protect restrictions; successful automated tests do not establish physical-device safety or OEM behavior.
