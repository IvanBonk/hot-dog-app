import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from './menu-item.module.scss';
import { EditForm } from '../edit-form';
import { deleteHotDog, updateHotDog, handleEditForm } from '../../../redux/actions/hot-dog.action';

export const MenuItem = ({ content }) => {

  const { id, name, price, description, image_url } = content;

  const dispatch = useDispatch();

  const openEditFormId = useSelector(state => state.hotDogs.openEditFormId);

  const handleSubmit = (values) => {
    dispatch(updateHotDog(values));
    dispatch(handleEditForm(null));
  }

  const handleDelete = () => {
    dispatch(handleEditForm(null));
    dispatch(deleteHotDog(id));
  }

  return (
    <div className={ style.menuItem }>
      <div>
        <img className={ style.menuItem_image } src={ image_url } alt={ name } />
        { openEditFormId !== id &&
          <div>
            <h2 className={ style.menuItem_title }>{ name }</h2>
            <p className={ style.menuItem_price }>{ price }$</p>
            <p className={ style.menuItem_description }>{ description }</p>
          </div> }
      </div>
      {openEditFormId !== id &&
        <button
          className={ style.menuItem_button }
          onClick={ () => { dispatch(handleEditForm(id)); } }>
          { 'Edit' }
        </button> }
      {openEditFormId === id && <EditForm form={ name } onSubmit={ handleSubmit } handleDelete={ () => handleDelete() } id={ id } data={ content } /> }
    </div>
  );
}