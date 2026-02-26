# Agent System

## Hierarchie

```
CEO (Du, der User)
 └── Projektmanager (Claude)
      ├── Frontend Agent
      ├── Backend Agent
      ├── Testing Agent
      ├── DevOps Agent
      ├── UI/UX Agent
      └── Mobile Agent
```

## Wie es funktioniert

1. Du gibst dem **CEO-Prompt** dein Ziel
2. Claude agiert als **Projektmanager** und entscheidet selbststaendig welche Agenten er braucht
3. Jeder Agent hat spezialisierte Instruktionen in seiner `.md` Datei
4. Der PM koordiniert die Agenten und liefert dir das Ergebnis

## Dateien

- `ceo-prompt.md` — Dein Einstiegspunkt (kopiere in den Chat)
- `projektmanager.md` — PM-Instruktionen (wird automatisch geladen via CLAUDE.md)
- `frontend-agent.md` — Frontend-Spezialist
- `backend-agent.md` — Backend/Firebase-Spezialist
- `testing-agent.md` — Test-Spezialist
- `devops-agent.md` — CI/CD & Deployment
- `ui-ux-agent.md` — Design & UX
- `mobile-agent.md` — iOS/Android Capacitor
