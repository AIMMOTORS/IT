export function newPasswordValidator(password) {
    if (!password) return "Password can't be empty."
    if (password.length < 4) return 'Password must be exactly 4 digits.'
    if (!password.match(/^\d+$/)) {
        return 'Password must contain only digits (0-9).';
    }
    return ''
  }
  