export function retryDelay(attempt) {
  if (attempt > 5) {
    return null;
  }
  return 2 ** (attempt - 1);
}