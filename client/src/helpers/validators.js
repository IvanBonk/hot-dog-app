export const required = (value)=> (value || typeof value === 'number' ? undefined : 'Required');

const maxLength = (max) => (value) =>{
  return value && value.length > max ? `Must be ${max} characters or less` : undefined
};

export const maxLength30 = maxLength(30);

export const maxLength250 = maxLength(250);


export const number = (value) =>{
  return value && isNaN(Number(value)) ? 'Must be a number' : undefined
};
