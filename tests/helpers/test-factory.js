/**
 * Test data factory.
 * Creates mock objects for tests.
 */

export function createMockUser(overrides = {}) {
  return {
    uid: 'test-user-1',
    name: 'Test User',
    ...overrides,
  };
}
