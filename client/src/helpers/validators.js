export const required = (value)=> (value || typeof value === 'number' ? undefined : 'Required');

const maxLength = (max) => (value) =>{
  return value && value.length > max ? `Must be ${max} characters or less` : undefined
};

export const maxLength30 = maxLength(30);

export const maxLength250 = maxLength(250);


export const number = (value) =>{
  return value && isNaN(Number(value)) ? 'Must be a number' : undefined
};

export const removeFromList = (list, id) => {
  return list.filter((obj) => obj.id !== id);
}

export const nameIsExist = (value, list) => {
  return list.filter((obj) => obj.name === value).length
    ? 'Name is already exist!' 
    : undefined;
}