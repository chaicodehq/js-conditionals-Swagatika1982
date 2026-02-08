/**
 * 🔒 SecureApp Password Checker
 *
 * You're building the signup page for SecureApp, a new productivity tool.
 * The product manager wants a password strength meter that gives users
 * real-time feedback as they type their password.
 *
 * The checker evaluates 5 criteria:
 *   1. At least 8 characters long
 *   2. Contains at least one uppercase letter (A-Z)
 *   3. Contains at least one lowercase letter (a-z)
 *   4. Contains at least one number (0-9)
 *   5. Contains at least one special character (!@#$%^&*()_+-=[]{}|;:,.<>?)
 *
 * Strength levels based on how many criteria are met:
 *   - 0–1 criteria → "weak"
 *   - 2–3 criteria → "medium"
 *   - 4 criteria   → "strong"
 *   - All 5        → "very strong"
 *
 * Rules:
 *   - Empty string → "weak"
 *   - Non-string input → "weak"
 *
 * @param {string} password - The password to evaluate
 * @returns {string} "weak", "medium", "strong", or "very strong"
 */
export function checkPasswordStrength(password) {
  // Your code here

  
  let criteriaMet = 0;
  let Strength = "weak";
if (typeof password !== "string" || password.length === 0) return Strength;

  // 1) length
  if (password.length >= 8) criteriaMet++;

  // 2) uppercase
  if (/[A-Z]/.test(password)) criteriaMet++;

  // 3) lowercase
  if (/[a-z]/.test(password)) criteriaMet++;

  // 4) number
  if (/[0-9]/.test(password)) criteriaMet++;

  // 5) special character (from the given set)
  if (/[!@#$%^&*()_+\-=\[\]{}|;:,.<>?]/.test(password)) criteriaMet++;

  if (criteriaMet <= 1)
    { Strength = "weak";}

  else if (criteriaMet <= 3) 
    {Strength = "medium";}
  else if (criteriaMet === 4) {Strength = "strong";}

  else if (criteriaMet === 5) 
    {Strength = "very strong";} // 5

  return Strength;
}
