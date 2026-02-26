# App Template — iOS + Web + Android

Cross-platform app template mit eingebautem AI-Agentensystem fuer Claude Code.

## Stack

| Komponente | Technologie |
|-----------|-------------|
| Frontend | Vanilla JS (ES Modules) |
| Bundler | Vite 7 |
| Backend | Firebase Firestore + Auth |
| Mobile | Capacitor 8 (iOS + Android) |
| PWA | Service Worker + Manifest |
| Tests | Vitest + jsdom |
| CI/CD | GitHub Actions |
| Code Quality | ESLint + Prettier |

## Quick Start

```bash
# 1. Repo klonen
git clone https://github.com/YOUR_USER/app-template.git
cd app-template

# 2. Dependencies installieren
npm install

# 3. Environment einrichten
cp .env.example .env
# → .env mit Firebase-Werten fuellen

# 4. Dev Server starten
npm run dev

# 5. Pre-Push Hook einrichten
cp scripts/pre-push.sh .git/hooks/pre-push
chmod +x .git/hooks/pre-push
```

## Mobile Setup

```bash
# iOS
npx cap add ios
npm run build && npx cap sync ios
npx cap open ios

# Android
npx cap add android
npm run build && npx cap sync android
npx cap open android
```

## Commands

| Command | Beschreibung |
|---------|-------------|
| `npm run dev` | Dev Server (localhost:3000) |
| `npm run build` | Production Build |
| `npm test -- --run` | Tests ausfuehren |
| `npm run lint` | ESLint Check |
| `npm run format` | Prettier formatieren |
| `npm run format:check` | Prettier pruefen |

## CI/CD Pipeline

```
Push → CI (Prettier → ESLint → Tests → Build)
         → CD Preview (auto Firebase Preview)
            → CD Live (manuell mit Bestaetigung)
```

### GitHub Secrets konfigurieren:
```
VITE_FIREBASE_API_KEY
VITE_FIREBASE_AUTH_DOMAIN
VITE_FIREBASE_PROJECT_ID
VITE_FIREBASE_STORAGE_BUCKET
VITE_FIREBASE_MESSAGING_SENDER_ID
VITE_FIREBASE_APP_ID
VITE_FIREBASE_MEASUREMENT_ID
FIREBASE_SERVICE_ACCOUNT
```

## Agentensystem (Claude Code)

Dieses Template hat ein eingebautes Agentensystem fuer Claude Code:

```
CEO (Du)
 └── Projektmanager (Claude)
      ├── Frontend Agent
      ├── Backend Agent
      ├── Testing Agent
      ├── DevOps Agent
      ├── UI/UX Agent
      └── Mobile Agent
```

### Nutzung:
1. Oeffne Claude Code im Projekt
2. Kopiere den Prompt aus `.claude/agents/ceo-prompt.md`
3. Beschreibe deine Aufgabe
4. Claude agiert als PM und holt sich selbststaendig die richtigen Agenten

### Prompt Guide:
Siehe `.github/CLAUDE_PROMPT_GUIDE.md` fuer optimale Prompts.

## Projektstruktur

```
├── src/
│   ├── main.js              # Entry Point
│   ├── config/firebase.js   # Firebase SDK
│   ├── core/utils.js        # Utilities
│   ├── firebase/            # Realtime Listener
│   ├── state/app-state.js   # App State
│   ├── i18n/                # Translations
│   ├── styles/              # CSS Design System
│   ├── ui/                  # UI Components
│   └── constants/           # App Constants
├── public/                  # PWA Assets
├── tests/                   # Unit + Integration Tests
├── .claude/agents/          # AI Agent System
├── .github/workflows/       # CI/CD Pipelines
├── ios/                     # Capacitor iOS (nach setup)
└── android/                 # Capacitor Android (nach setup)
```

## Lizenz

MIT
