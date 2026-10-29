import { test, expect } from 'vitest';
import { retryDelay } from '../src/retry.js';

test('retryDelay: перед першою спробою система чекає 1 секунду', () => {
  expect(retryDelay(1)).toBe(1);
});

test('retryDelay: перед другою спробою система чекає вдвічі довше', () => {
  expect(retryDelay(2)).toBe(2);
});

test('retryDelay: перед третьою спробою система чекає 4 секунди', () => {
  expect(retryDelay(3)).toBe(4);
});

test('retryDelay: перед спробою 5, останньою, система чекає 16 секунд', () => {
  expect(retryDelay(5)).toBe(16);
});

test('retryDelay: після п’яти спроб система більше не пробує', () => {
  expect(retryDelay(6)).toBeNull();
});