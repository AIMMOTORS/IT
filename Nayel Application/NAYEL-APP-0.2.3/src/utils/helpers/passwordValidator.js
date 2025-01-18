export function passwordValidator(password) {
  if (!password) return "Password can't be empty."
  if (password.length < 8) return 'Password must be at least 8 characters long.'
  if (!password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$&*.%]).+$/)) {
    return 'Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character (!@#$&*.%).';
  }
  return ''
}
