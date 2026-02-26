import { describe, it, expect } from 'vitest';
import { notify } from '../../src/core/utils.js';

describe('notify', () => {
  it('creates a notification element in the DOM', () => {
    notify('Test message', 'info');
    const el = document.querySelector('.notification');
    expect(el).not.toBeNull();
    expect(el.textContent).toBe('Test message');
  });

  it('applies error class for error type', () => {
    notify('Error!', 'error');
    const el = document.querySelector('.notification.error');
    expect(el).not.toBeNull();
  });
});
