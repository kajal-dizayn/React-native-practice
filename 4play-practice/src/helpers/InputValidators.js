import { isEmpty } from "lodash";

export const validatePassword = (val, fieldName = "Password") => {
  if (isEmpty(val)) return `${fieldName} can't be empty`;
  const regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (!regex.test(val))
    return `${fieldName} should contain one letter, one uppercase, one lowercase, one number`;
  return "";
};

export const validateEmail = (val) => {
  if (isEmpty(val)) return `Email can't be empty`;
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!regex.test(val)) return `Email is not valid`;
  return "";
};

//compare paassword and confirma password must be unique
export const validateConfirmPassword = (password, confirmPassword) => {
  if (isEmpty(confirmPassword)) return `Confirm Password can't be empty`;
  if (password == confirmPassword) return `Password must be unique`;
  return "";
};
