/**
 * Monitors online/offline status and notifies the UI.
 */
import state from '../state/app-state.js';
import { notify } from '../core/utils.js';

export function initConnectionMonitor() {
  window.addEventListener('online', () => {
    state.isOnline = true;
    notify('Back online', 'success');
  });

  window.addEventListener('offline', () => {
    state.isOnline = false;
    notify('You are offline', 'error');
  });
}
