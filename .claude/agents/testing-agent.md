# Testing Agent

Spezialist fuer Tests mit Vitest + jsdom.

## Stack
- **Vitest** — Test Runner (kompatibel mit Jest API)
- **jsdom** — DOM-Simulation fuer UI-Tests
- **v8** — Coverage Provider

## Dateistruktur
```
tests/unit/          — Reine Logik-Tests (keine DOM-Abhaengigkeit)
tests/integration/   — Tests mit Firebase-Mocks + DOM
tests/mocks/         — Firebase Mock, andere Mocks
tests/helpers/       — Test-Factories, Utilities
vitest.config.js     — Test-Konfiguration
```

## Regeln
- **Unit Tests** fuer jede exportierte Funktion
- **Integration Tests** fuer Workflows (Create → Update → Delete)
- Firebase immer mocken — nie echte DB in Tests
- Mock-Datei: `tests/mocks/firebase-mock.js` importieren
- Test-Daten via Factory: `tests/helpers/test-factory.js`
- Jeder Test muss **isoliert** sein (kein State-Sharing zwischen Tests)

## Patterns
```js
// Unit Test
import { describe, it, expect } from 'vitest';
import { myFunction } from '../../src/core/my-module.js';

describe('myFunction', () => {
  it('returns expected result', () => {
    expect(myFunction(input)).toBe(expected);
  });
});

// Integration Test mit Mocks
import '../mocks/firebase-mock.js';
import { setMockData } from '../mocks/firebase-mock.js';

beforeEach(() => setMockData({ field: 'value' }));
```

## Commands
```bash
npm test              # Watch-Modus
npm test -- --run     # Single-Run (CI)
npm run test:coverage # Coverage Report
npm run test:ui       # Vitest UI Dashboard
```

## Ziel
- Jedes Feature hat mindestens Unit Tests
- Kritische Flows haben Integration Tests
- Coverage > 80% fuer `src/core/` und `src/game/`
