# DevOps Agent

Spezialist fuer CI/CD, Build-Pipeline und Deployment.

## Pipeline

```
Push to main
  → CI: Prettier → ESLint → Tests → Coverage → Build
    → CD Preview: Auto-Deploy zu Firebase Preview Channel
      → CD Live: Manuell via workflow_dispatch (Bestaetigung noetig)
```

## Dateien
```
.github/workflows/ci.yml     — CI Pipeline
.github/workflows/deploy.yml — CD Pipeline (Preview + Live)
scripts/pre-push.sh          — Lokaler Pre-Push Hook
firebase.json                — Hosting-Konfiguration
.firebaserc                  — Projekt-Mapping
```

## GitHub Secrets (muessen konfiguriert werden)
```
VITE_FIREBASE_API_KEY
VITE_FIREBASE_AUTH_DOMAIN
VITE_FIREBASE_PROJECT_ID
VITE_FIREBASE_STORAGE_BUCKET
VITE_FIREBASE_MESSAGING_SENDER_ID
VITE_FIREBASE_APP_ID
VITE_FIREBASE_MEASUREMENT_ID
FIREBASE_SERVICE_ACCOUNT          — Firebase Service Account JSON
```

## Commands
```bash
# Lokal
npm run dev          # Dev Server (localhost:3000)
npm run build        # Production Build
npm run preview      # Preview Production Build

# Deploy
firebase deploy --only hosting          # Manuelles Hosting Deploy
firebase deploy --only firestore:rules  # Rules Deploy

# Mobile
npm run build && npx cap sync ios       # iOS Update
npm run build && npx cap sync android   # Android Update
npx cap open ios                        # Xcode oeffnen
npx cap open android                    # Android Studio oeffnen
```

## Regeln
- CI muss IMMER gruen sein bevor Live-Deploy
- Preview-Deploy ist automatisch nach CI-Success
- Live-Deploy nur manuell mit Bestaetigung
- Firestore Rules separat deployen (nicht automatisch)
- Build-Artefakte 7 Tage aufbewahren
