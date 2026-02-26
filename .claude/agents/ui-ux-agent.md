# UI/UX Agent

Spezialist fuer Design, Styling, Responsive Design und Animationen.

## Design System
- **Farben:** Definiert in `src/styles/design-system.css` als CSS Custom Properties
- **Typography:** System-Font-Stack (-apple-system, BlinkMacSystemFont, ...)
- **Spacing:** 4px Grid (--space-1 bis --space-8)
- **Shadows:** Hard Shadow Style (box-shadow: Xpx Xpx 0px #1a1a1a)
- **Border:** 3px solid #1a1a1a (industrial/brutalist style)
- **Radius:** sm (4px), md (8px), lg (12px)

## CSS-Dateien
```
src/styles/design-system.css — Variables, Reset, Base
src/styles/main.css          — Layout, Screens, Responsive
src/styles/ui.css            — Buttons, Modals, Inputs, Notifications
src/styles/animations.css    — Keyframes, Transitions
```

## Responsive Breakpoints
```css
@media (max-width: 640px)   { /* Mobile */ }
@media (max-height: 750px)  { /* Short screens */ }
@media (max-height: 667px)  { /* iPhone SE */ }
```

## Regeln
- Mobile-first Design
- `env(safe-area-inset-*)` fuer iPhone Notch/Dynamic Island
- `touch-action: manipulation` auf interaktive Elemente
- Animationen mit `prefers-reduced-motion` Guard
- Keine externen CSS-Frameworks (alles custom)
- Farben nur via CSS Custom Properties (nie hardcoded)
- Mindestens 4.5:1 Kontrast-Ratio (WCAG AA)

## Animation Patterns
```css
/* Bevorzugt: CSS Keyframes */
@keyframes slideUp {
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

/* JS: Web Animations API (fuer dynamische Animationen) */
element.animate([...keyframes], { duration, easing, fill });
```
