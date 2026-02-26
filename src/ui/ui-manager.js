/**
 * UI Manager — main render orchestrator.
 * Handles screen switching and UI state.
 */

export function showScreen(screenId) {
  document.querySelectorAll('.screen').forEach((s) => s.classList.add('hidden'));
  const target = document.getElementById(screenId);
  if (target) target.classList.remove('hidden');
}

export function showModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.classList.remove('hidden');
}

export function hideModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.classList.add('hidden');
}
