
/**
 * Validate idNumber and code for a client
 * @param {string} idNumber - תעודת זהות
 * @param {string} code - קוד
 * @returns {object} { valid: boolean, errors: string[] }
 */
function validateClientCredentials(idNumber, code) {
  const errors = [];
  if (!idNumber || typeof idNumber !== 'string' || idNumber.length < 5 || idNumber.length > 20) {
    errors.push('תעודת זהות חייבת להיות באורך 5 עד 20 תווים.');
  }
  if (!code || typeof code !== 'string' || code.length < 4) {
    errors.push('קוד חייב להיות באורך מינימלי של 4 תווים.');
  }
  return {
    valid: errors.length === 0,
    errors
  };
}

module.exports = {
  validateClientCredentials
};
