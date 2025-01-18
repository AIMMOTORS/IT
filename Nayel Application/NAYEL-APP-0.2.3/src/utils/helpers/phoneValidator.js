export function phoneValidator(phoneNumber) {
    const re = /^0[1-9][0-9]{1,2}-[0-9]{7}$/
    if (!phoneNumber) return "Phone number can't be empty."
    if(phoneNumber.length!=10) return "Please enter a valid phone number"
    // if (!re.test(phoneNumber)) return 'Oops! We need a valid phone number in the format 0310-2391112.'
    return ''
  }