export function validatePhoneNumber(phoneNumber: string): boolean {
  const pattern = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g

  return pattern.test(phoneNumber)
}

export function validateEmail(email: string): boolean {
  const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/

  return pattern.test(email)
}


export function validatePassword(password: string): boolean {
  return password.length >= 6
}