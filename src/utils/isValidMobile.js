
export function isValidMobile(mobile) {
  return /^[6-9]\d{9}$/.test(mobile); // Indian 10-digit mobile number
}