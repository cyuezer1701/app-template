/**
 * Simple i18n system.
 * Supports {{variable}} interpolation and data-i18n DOM attributes.
 */
import en from './en.js';

const translations = { en };
let currentLang = 'en';

export function setLanguage(lang) {
  if (translations[lang]) currentLang = lang;
}

export function t(key, params = {}) {
  let text = translations[currentLang]?.[key] || translations.en[key] || key;
  for (const [k, v] of Object.entries(params)) {
    text = text.replace(`{{${k}}}`, v);
  }
  return text;
}

export function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    el.textContent = t(key);
  });
}
