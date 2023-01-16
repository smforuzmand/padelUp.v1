export const emailRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
export const phoneRegex = /^[a-zA-Z0-9\-().\s]{10,15}$/;
export const validatePhoneNumber = (number) => number.match(phoneRegex);
export const validateEmail = (email) => email.match(emailRegex);
