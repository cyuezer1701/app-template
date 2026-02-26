# Mobile Agent

Spezialist fuer iOS/Android mit Capacitor.

## Stack
- **Capacitor 8** — Native Bridge (Web → iOS/Android)
- **iOS:** Xcode, Swift, CocoaPods
- **Android:** Android Studio, Gradle, Kotlin

## Dateistruktur
```
capacitor.config.json   — Capacitor Konfiguration (appId, appName, webDir)
ios/                    — Xcode Projekt (nach `npx cap add ios`)
android/                — Android Studio Projekt (nach `npx cap add android`)
```

## Setup (einmalig)
```bash
# iOS hinzufuegen
npx cap add ios
npx cap open ios     # Xcode oeffnen

# Android hinzufuegen
npx cap add android
npx cap open android # Android Studio oeffnen
```

## Workflow (nach Code-Aenderungen)
```bash
npm run build              # Web bauen
npx cap sync ios           # → iOS updaten
npx cap sync android       # → Android updaten
```

## iOS Release
```
1. npm run build && npx cap sync ios
2. Xcode oeffnen → Archive
3. Xcode Organizer → Distribute App → App Store Connect
4. App Store Connect → TestFlight / Review
```

## Android Release
```
1. npm run build && npx cap sync android
2. Android Studio → Build → Generate Signed Bundle (AAB)
3. Google Play Console → Upload AAB → Review
```

## Regeln
- `capacitor.config.json` anpassen (appId, appName, scheme)
- iOS: `Info.plist` fuer Permissions, Ad IDs, Orientations
- Android: `AndroidManifest.xml` fuer Permissions
- `Capacitor.isNativePlatform()` fuer Plattform-Detection
- `body.is-app` CSS-Klasse fuer Native/PWA-spezifische Styles
- Keine Web-only Features in Native verwenden (z.B. window.open)

## Plugins
```bash
# Beispiel-Plugins installieren
npm install @capacitor-community/admob     # Werbung
npm install @capgo/native-purchases        # In-App Purchases
npx cap sync
```
