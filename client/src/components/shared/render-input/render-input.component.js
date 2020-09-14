import React from 'react';
import style from './render-input.module.scss';

export const RenderInput = ({
  input,
  label,
  type,
  meta: {touched, error}
}) => (
  <div>
    <input className={`${style.formInput} ${error && touched && style.inputError}`} {...input} placeholder={label} type={type}/>
    {touched && (error && <span className={style.errorMessage}>{error}</span>)}
  </div>
);
