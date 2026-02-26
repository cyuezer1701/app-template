/**
 * App Entry Point
 * Initializes Firebase, auth, UI, and event handlers.
 */
import './styles/design-system.css';
import './styles/main.css';
import './styles/ui.css';
import './styles/animations.css';

import { auth } from './config/firebase.js';
import { signInAnonymously } from 'firebase/auth';
import { initConnectionMonitor } from './firebase/connection-monitor.js';
import { applyTranslations } from './i18n/i18n.js';
import { initEventHandlers } from './ui/event-handlers.js';
import { notify } from './core/utils.js';

// Capacitor platform detection
const isNative = typeof window.Capacitor !== 'undefined' && window.Capacitor.isNativePlatform();
const isStandalone = window.matchMedia('(display-mode: standalone)').matches;

async function init() {
  try {
    // Anonymous auth (swap for email/Google auth as needed)
    await signInAnonymously(auth);
    console.log('Auth ready:', auth.currentUser?.uid);
  } catch (err) {
    console.error('Auth failed:', err);
    notify('Authentication error', 'error');
  }

  // Platform-specific setup
  if (isNative || isStandalone) {
    document.body.classList.add('is-app');
  }

  // Init systems
  initConnectionMonitor();
  applyTranslations();
  initEventHandlers();

  console.log('App initialized');
}

init();
