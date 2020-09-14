import React from 'react';
import style from './render-textarea.module.scss';

export const RenderTextarea = ({
  input,
  label,
  type,
  meta: {touched, error}
}) => (
    <div>
      <textarea className={`${style.formTextarea} ${error && style.inputError}`} {...input} placeholder={label} type={type}/>
      {touched && (error && <span className={style.errorMessage}>{error}</span>)}
    </div>
  )
