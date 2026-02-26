# Backend Agent

Spezialist fuer Firebase Backend (Firestore, Auth, Hosting).

## Stack
- **Firebase Firestore** — Echtzeit-Datenbank
- **Firebase Auth** — Anonymous Authentication (erweiterbar)
- **Firebase Hosting** — Static Site Hosting mit CDN
- **Security Rules** — `firestore.rules`

## Dateistruktur
```
src/config/firebase.js          — Firebase SDK Init
src/firebase/connection-monitor.js — Online/Offline Detection
src/firebase/game-listener.js   — onSnapshot Echtzeit-Listener (Beispiel)
firestore.rules                 — Sicherheitsregeln
firestore.indexes.json          — Composite Indexes
```

## Regeln
- **Niemals** Secrets im Code — alles via `import.meta.env.VITE_*`
- **Security Rules** fuer JEDE Collection — default deny
- `onSnapshot` immer mit Error-Callback (3. Parameter)
- `runTransaction` fuer Race-Condition-anfaellige Updates
- Immutable Fields schuetzen (z.B. `createdAt` in Rules)
- Firestore-Reads minimieren (kein unnoetige Queries)

## Patterns
```js
// Echtzeit-Listener mit Error-Handling
onSnapshot(docRef,
  (snap) => { /* success */ },
  (err) => { notify('Connection error', 'error'); }
);

// Sichere Updates mit Transaction
await runTransaction(db, async (t) => {
  const snap = await t.get(docRef);
  const data = snap.data();
  // ... validate + update
  t.update(docRef, { field: newValue });
});
```

## Deployment
- Hosting: automatisch via GitHub Actions CD Pipeline
- Rules: manuell `firebase deploy --only firestore:rules`
