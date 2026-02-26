/**
 * Utility functions shared across the app.
 */

/**
 * Shows a toast notification
 */
export function notify(message, type = 'info') {
  const el = document.createElement('div');
  el.className = `notification ${type}`;
  el.textContent = message;
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 3000);
}
