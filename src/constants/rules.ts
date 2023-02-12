import { FormRule } from 'antd';
import { PHONE_REGEX } from './commom';
export const phoneRule: Array<FormRule> = [
  {
    required: true,
    pattern: PHONE_REGEX,
    message: 'phone number must an valid number',
  },
];
export const addressRule: Array<FormRule> = [
  {
    required: true,
    min: 6,
    message: 'your address has must be at least 6 characters',
  },
];
export const usernameRule: Array<FormRule> = [
  {
    required: true,
    min: 6,
    message: 'your username has must be at least 6 characters',
  },
  {
    type: 'email',
    message: 'username must an valid email address',
  },
];
export const passwordRule: Array<FormRule> = [
  {
    required: true,
    message: 'Please password has must be at least 6 characters',
    min: 6,
  },
];

export const nameRule = [
  {
    required: true,
    message: 'Full Name is required',
  },
];
