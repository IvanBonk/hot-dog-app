export const required = (value) => (value || typeof value === 'number' ? undefined : 'Required');

const maxLength = (max) => (value) =>
  value && value.length > max
    ? `Must be ${max} characters or less`
    : undefined;


export const maxLength30 = maxLength(30);

export const maxLength250 = maxLength(250);

export const maxLength2048 = maxLength(2048);

export const number = (value) =>
  value && isNaN(Number(value)) ? 'Must be a number' : undefined;

export const removeFromList = (list, id) => list.filter((obj) => obj.id !== id);


export const nameIsExist = (value, list) =>
  list.filter((obj) => obj.name === value).length
    ? 'Name is already exist!'
    : undefined;
