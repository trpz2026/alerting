export function isMobileNumber(phone) {
  return phone.startsWith('+380') && phone.length === 13;
}
