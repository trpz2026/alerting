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
export function formatAlert(alert) {
  if (alert === 'low' || (alert && alert.level === 'low')) {
    return '[low] Перевірка сирен';
  }
  return '[high] Пожежа';
}

export function isUrgent(alert) {
  if (alert && (alert.level === 'low' || alert.level === 'low Повідомлення')) {
    return false;
  }
  return true;
}

// 1. ВИПРАВЛЕНО: Тепер функція дійсно фільтрує та рахує лише термінові сповіщення
export function countUrgent(alerts) {
  if (!alerts || !alerts.length) return 0;
  return alerts.filter(alert => isUrgent(alert)).length;
}

// 2. ВИПРАВЛЕНО: Валідація невідомого рівня та повернення правильного об'єкта
export function createAlert(level, text) {
  // Перевіряємо, чи рівень є допустимим (low або high)
  if (!level || (level !== 'low' && level !== 'high')) {
    throw new Error('Unknown alert level');
  }
  
  // ВИПРАВЛЕНО: Додано поле sent: false, оскільки сповіщення ще не надіслане
  return { 
    level, 
    text, 
    sent: false 
  };
}
