# Project Instructions for Claude

## Project Overview
Cross-platform app template: Web (PWA) + iOS + Android.
Built with Vanilla JS, Vite, Firebase, and Capacitor.

## Stack
- **Frontend:** Vanilla JS (ES Modules) — NO frameworks
- **Bundler:** Vite 7
- **Backend:** Firebase Firestore + Anonymous Auth
- **Mobile:** Capacitor 8 (iOS + Android)
- **Tests:** Vitest + jsdom (276+ tests target)
- **CI/CD:** GitHub Actions (CI auto, CD Preview auto, Live manual)
- **Code Quality:** ESLint + Prettier (pre-push hook)

## Agent System
This project uses a hierarchical agent system. Read `.claude/agents/projektmanager.md` for the full PM instructions. Agent definitions are in `.claude/agents/`.

## Key Commands
```bash
npm run dev              # Dev server (localhost:3000)
npm run build            # Production build
npm test -- --run        # Run tests (single pass)
npm run lint             # ESLint check
npm run format:check     # Prettier check
npm run build && npx cap sync ios      # Build + iOS sync
npm run build && npx cap sync android  # Build + Android sync
```

## Architecture Rules
- All strings via `t('key')` from `src/i18n/i18n.js`
- State in `src/state/app-state.js` (single source of truth)
- Firebase config via `import.meta.env.VITE_*` (never hardcode secrets)
- CSS variables in `src/styles/design-system.css`
- Mobile-first responsive design
- `Capacitor.isNativePlatform()` for platform detection

## After Every Change
1. `npm test -- --run` — Tests must pass
2. `npm run build` — Build must succeed
3. `npx cap sync ios && npx cap sync android` — Mobile sync
4. Commit with descriptive message + push

## File Structure
```
src/
  config/firebase.js       — Firebase SDK init
  core/utils.js            — Shared utilities
  firebase/                — Realtime listeners, connection monitor
  state/app-state.js       — App state
  i18n/                    — Translations (en.js, add more)
  styles/                  — CSS (design-system, main, ui, animations)
  ui/                      — UI manager, renderer, event handlers
  constants/               — App constants
tests/
  unit/                    — Pure logic tests
  integration/             — Workflow tests with mocks
  mocks/firebase-mock.js   — Firebase mock
  helpers/test-factory.js  — Test data factory
```
