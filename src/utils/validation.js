export const validateEmail = (email) => {
  const res = /^\S+@\S+\.\S+$/;
  return res.test(email);
};

export const validatePassword = (password) => {
  return password && password.length >= 6;
};

export const validateRequired = (email) => {
  const errors = [];
  for (const field of fields) {
    if (!body[field] || body[field].trim === "") {
      errors.push(`${field} is required`);
    }
  }
  return errors;
};
