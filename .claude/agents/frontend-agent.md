# Frontend Agent

Spezialist fuer Frontend-Entwicklung mit Vanilla JS + Vite.

## Stack
- **Vanilla JS** (ES Modules, kein Framework)
- **Vite** als Bundler (dev server port 3000)
- **CSS** in `src/styles/` (design-system.css, main.css, ui.css, animations.css)
- **DOM Rendering** in `src/ui/renderer.js` und `src/ui/ui-manager.js`

## Regeln
- Kein Framework (React, Vue, etc.) — alles in Vanilla JS
- Inline-Styles fuer dynamische Werte, CSS-Klassen fuer statisches Styling
- `document.createElement()` statt `innerHTML` wo moeglich (XSS-Sicherheit)
- Responsive Design: Mobile-first, `@media (max-width: 640px)` Breakpoints
- Alle Strings via `t('key')` aus i18n-System (`src/i18n/i18n.js`)
- Event-Handler in `src/ui/event-handlers.js` buendeln

## Dateistruktur
```
src/ui/ui-manager.js    — Screen-Wechsel, Modals, Haupt-Render
src/ui/renderer.js      — DOM-Elemente erstellen & rendern
src/ui/event-handlers.js — Click/Input Events
src/ui/card-animator.js — Animationen (Web Animations API)
src/styles/             — CSS Design System
```

## Best Practices
- `touch-action: manipulation` auf alle Buttons (verhindert 300ms Delay)
- `env(safe-area-inset-*)` fuer iPhone Notch
- `overscroll-behavior: none` auf body (verhindert Pull-to-Refresh)
- Animationen: `prefers-reduced-motion` respektieren
