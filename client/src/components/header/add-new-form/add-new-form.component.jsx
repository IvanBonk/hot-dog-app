import React from 'react';
import style from './add-new-form.module.scss';
import { Field, reduxForm } from 'redux-form';
import { RenderInput } from '../../shared/render-input';
import {
  required,
  maxLength30,
  maxLength250,
  number,
  nameIsExist,
  maxLength2048
} from '../../../helpers/validators';
import { useSelector } from 'react-redux';


let _AddNewForm = ({ handleSubmit, handleCancel }) => {

  const hotDogsList = useSelector(state => state.hotDogs.hotDogsList);

  const exist = (value) => {
    return nameIsExist(value, hotDogsList);
  }

  return (
    <form onSubmit={ handleSubmit }>
      <h1 className={ style.modalTitle }>{ 'Add new hot-dog' }</h1>
      <div className={ style.inputBlock }>
        <Field
          name='name'
          type='text'
          component={ RenderInput }
          validate={ [required, maxLength30, exist] }
          label='Name'
        />
      </div>
      <div className={ style.inputBlock }>
        <Field
          name='price'
          type='text'
          component={ RenderInput }
          validate={ [required, number] }
          label='Price'
        />
      </div>
      <div className={ style.inputBlock }>
        <Field
          name='description'
          type='text'
          component={ RenderInput }
          validate={ [required, maxLength250] }
          label='Description'
        />
      </div>
      <div className={ style.inputBlock }>
        <Field
          name='image_url'
          type='text'
          component={ RenderInput }
          validate={ [required, maxLength2048] }
          label='Image'
        />
      </div>
      <div className={ style.buttonsBlock }>
        <button className={ style.buttonsBlock_button } type='button' onClick={ handleCancel }>{ 'No Thanks' }</button>
        <button className={ style.buttonsBlock_button } type='submit'>{ 'Add' }</button>
      </div>
    </form>
  );
}

_AddNewForm = reduxForm({
  form: "addNewForm"
})(_AddNewForm)

export const AddNewForm = _AddNewForm;