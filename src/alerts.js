// Система оповіщення, яку ми розвиваємо на практичних заняттях.
// Функції, які ми написали разом на занятті 3. Що кожна з них обіцяє, описують тести
// в tests/alerts.spec.js.

const LEVELS = ['low', 'medium', 'high'];

export function formatAlert(alert) {
  return `[${alert.level}] ${alert.text}`;
}

export function isUrgent(alert) {
  return alert.level === 'high';
}

export function countUrgent(alerts) {
  let count = 0;
  for (const alert of alerts) {
    if (isUrgent(alert)) {
      count = count + 1;
    }
  }
  return count;
}

export function createAlert(level, text) {
  if (!LEVELS.includes(level)) {
    throw new Error(`Невідомий рівень оповіщення: ${level}`);
  }
  return { level: level, text: text, sent: false };
}

export function pending(alerts) {
  const result = [];
  for (const alert of alerts) {
    if (!alert.sent) {
      result.push(alert);
    }
  }
  return result;
}

// Наша функція formatShort для Картки 9:
export function formatShort(alert, max) {
  const str = String(alert);
  if (str.length <= max) {
    return alert;
  }
  return str.slice(0, max - 3) + '...';
}