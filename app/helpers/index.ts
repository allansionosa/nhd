export const validatePhoneNumber = (rule: any, value: string) => {
  const phoneNumber = String(value);

  if (!phoneNumber.startsWith('09') || phoneNumber.length !== 11) {
    return Promise.reject('Please input valid phone number');
  }

  return Promise.resolve();
};
