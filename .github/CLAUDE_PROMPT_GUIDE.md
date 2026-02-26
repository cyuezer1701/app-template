# Claude Code Prompt Guide

So schreibst du Prompts die Claude perfekt versteht und ausfuehrt.

---

## Die goldene Regel

> **Je praeziser dein Prompt, desto besser das Ergebnis.**
> Claude macht genau was du sagst — nicht mehr, nicht weniger.

---

## Prompt-Struktur (Vorlage)

```
Du bist mein Projektmanager. Ich bin der CEO.
Lies .claude/agents/projektmanager.md und CLAUDE.md.

Meine Aufgabe:
[WAS soll passieren]

Kontext:
[WARUM / wo im Code / welche Dateien betroffen]

Regeln:
[Einschraenkungen, z.B. "aendere nix am bestehenden Code"]

Ergebnis:
[Was du am Ende erwartest]
```

---

## Beispiel-Prompts nach Kategorie

### 1. Neues Feature
```
Meine Aufgabe:
Implementiere einen Dark Mode Toggle.

Kontext:
- Button soll in die Settings-Section im Start-Screen
- CSS Variables in design-system.css switchen
- User-Wahl in localStorage speichern

Regeln:
- Kein externes CSS-Framework
- Standard bleibt Light Mode
- Muss auf iOS und Android funktionieren

Ergebnis:
- Funktionierender Toggle
- Tests fuer die Toggle-Logik
- Commit + Push
```

### 2. Bug Fix
```
Meine Aufgabe:
Die App zeigt einen weissen Bildschirm wenn man offline startet.

Kontext:
- Passiert nur auf iOS (PWA + Native)
- Wahrscheinlich Firebase Auth Timeout
- Schau dir src/main.js und src/config/firebase.js an

Ergebnis:
- Offline-Start zeigt den Cached Screen
- Error-Handling fuer Auth-Timeout
- Kein Breaking Change im Online-Modus
```

### 3. UI/UX Verbesserung
```
Meine Aufgabe:
Die Buttons im Modal sind auf dem iPhone zu gross.
[Screenshot anhaengen]

Kontext:
- Betrifft alle Modals (.modal-content .btn)
- Desktop soll gleich bleiben

Regeln:
- Nur CSS aendern, kein JS
- Media Query fuer Mobile (max-width: 640px)
```

### 4. Refactoring
```
Meine Aufgabe:
Die Datei action-handlers.js ist zu gross (900 Zeilen).
Splitte sie in kleinere Module.

Regeln:
- Keine Funktionsaenderungen (pure refactoring)
- Alle bestehenden Tests muessen weiter gruen sein
- Exports muessen kompatibel bleiben
- Plane zuerst, zeig mir den Plan, dann implementiere
```

### 5. Multi-Step Aufgabe
```
Meine Aufgabe:
Bau ein Notification-System ein.

Step by step:
1. Plane die Architektur (Toast-System, Stacking, Auto-Dismiss)
2. Zeig mir den Plan — warte auf mein OK
3. Implementiere
4. Schreibe Tests
5. Build + Push

Frage mich bei Unklarheiten.
```

---

## Dos & Don'ts

### DO:
- Screenshots anhaengen bei UI-Problemen
- Dateipfade nennen wenn du weisst welche betroffen sind
- "Plane zuerst" sagen wenn du unsicher bist
- "Frage mich" sagen wenn du Input willst
- Konkretes Ergebnis beschreiben

### DON'T:
- Vage Aufgaben ohne Kontext ("Mach die App besser")
- Mehrere unzusammenhaengende Aufgaben in einem Prompt
- Davon ausgehen dass Claude den Kontext von gestern kennt
- Implementation-Details vorschreiben wenn du keine starke Meinung hast

---

## Power-Moves

### Screenshot-basiert:
```
Schau dir den Screenshot an.
[Screenshot]
Das muss gefixt werden. Mach es kleiner/schoener/anders.
```

### Explorative Aufgabe:
```
Analysiere die Codebase und gib mir 5 konkrete
Verbesserungsvorschlaege. Stelle mir dann Fragen
welche ich zuerst umsetzen will.
```

### Qualitaetssicherung:
```
Pruefe die gesamte Error-Handling Logik.
Gibt es Stellen wo Fehler verschluckt werden?
Erstelle eine Liste und fixe die kritischsten.
```

### Performance:
```
Analysiere die Render-Performance.
Wo wird unnoetig viel DOM manipuliert?
Optimiere die kritischsten Stellen.
```
