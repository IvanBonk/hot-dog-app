import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import style from './edit-form.module.scss';
import { RenderInput } from '../../shared/render-input';
import { RenderTextarea } from '../../shared/render-textarea';
import { required, number, maxLength250, maxLength30 } from '../../../helpers/validators';

let _EditForm = (props) => {

  const { handleSubmit, handleDelete, hotDogsList} = props;

  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="image_url"
        type="text"
        component={RenderInput}
        validate={required}
        label="Enter image url"
      />
      <Field
        name="name"
        type="text"
        component={RenderInput}
        validate={[required, maxLength30]}
        label="Enter hot-dog name"
      />
      <Field
        name="price"
        type="text"
        component={RenderInput}
        validate={[required, number]}
        label="Enter hot-dog price"
      />
      <Field
        name="description"
        type="text"
        component={RenderTextarea}
        validate={[required, maxLength250]}
        label="Enter hot-dog description"
      />
      <div>
        <button className={style.button} type="submit">Upgrade</button>
        <button className={style.button} type="button" onClick={handleDelete}>Delete</button>
      </div>
    </form>
  )
}

_EditForm = reduxForm({
  form: 'editMenuItem'
})(_EditForm);

const mapStateToProps = (state, { id }) => {
  return {
    initialValues: state.hotDogs.hotDogsList.filter(obj => obj.id === id)[0],
    hotDogsList: state.hotDogs.hotDogsList
  }
}

_EditForm = connect(
  mapStateToProps,
  {}
)(_EditForm);

export const EditForm = _EditForm;