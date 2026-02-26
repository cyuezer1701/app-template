/**
 * Firebase mock for unit/integration tests.
 * Mock Firestore operations without hitting the real database.
 */
import { vi } from 'vitest';

let mockData = {};

export function setMockData(data) {
  mockData = { ...data };
}

export function resetMockData() {
  mockData = {};
}

export const doc = vi.fn(() => ({ id: 'mock-doc-id' }));
export const getDoc = vi.fn(async () => ({ exists: () => true, data: () => mockData }));
export const setDoc = vi.fn(async () => {});
export const updateDoc = vi.fn(async () => {});
export const deleteDoc = vi.fn(async () => {});
export const onSnapshot = vi.fn((ref, callback) => {
  callback({ exists: () => true, data: () => mockData });
  return vi.fn(); // unsubscribe
});

vi.mock('firebase/firestore', () => ({
  getFirestore: vi.fn(),
  doc,
  getDoc,
  setDoc,
  updateDoc,
  deleteDoc,
  onSnapshot,
  collection: vi.fn(),
  query: vi.fn(),
  where: vi.fn(),
  runTransaction: vi.fn(async (db, fn) => fn({ get: getDoc, update: updateDoc, set: setDoc })),
}));
