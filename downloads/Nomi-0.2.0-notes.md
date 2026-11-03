# Nomi 0.2.0 · Smiling mascot update

Development APK for Android 9 and later. Uses the same package and signing key as version 0.1.0.

- Bundled smiling blue-and-white Nomi image with pink cheeks, used in the launcher icon, header, cards and pause screen.
- Dark-blue important-notification banner with a gentle 6 dp up/down animation; honors system animation settings.
- Settings → Preview Nomi animation works without notification permissions. Preview is explicitly labeled.
- Real banners require chosen apps and notification access. External banners also require the existing visible app monitor, usage access and overlay permission, and appear only over eligible selected apps. Calls, ongoing and quiet notifications do not trigger banners. Duplicates do not repeat.
- Eight-second expiry, dismiss control, lock-screen/protected-app exclusions, and no new permissions. All notification information stays on-device.

Verified: APK build; 21 passing tests, including three rendered Compose UI tests under Robolectric/API 35; lint 0 errors (15 non-blocking warnings). Matching signing certificate and requested permissions compared with the previous APK. Physical-device delivery and overlay behavior still need testing.

Supabase is still unconfigured in this build. This is a debug-signed development version, not a production release. Android Play Protect may still restrict sideloading sensitive-access apps; these changes do not bypass those protections.
