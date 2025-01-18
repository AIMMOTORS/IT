export function confirmPasswordValidator(password, confirmPassword) {
    // if (!confirmPassword) return "Confirm password can't be empty.";
    // if (confirmPassword.length < 4) return 'Confirm password must be exactly 4 digits.';
    // if (!confirmPassword.match(/^\d+$/)) {
    //   return 'Confirm password must contain only digits (0-9).';
    // }
    if (password !== confirmPassword) {
      return 'Passwords do not match.';
    }
    return '';
  }
  