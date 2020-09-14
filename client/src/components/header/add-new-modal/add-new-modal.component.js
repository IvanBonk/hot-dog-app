import React from 'react';
import style from './add-new-modal.module.scss';
import { useDispatch } from 'react-redux';
import { AddNewForm } from '../add-new-form';
import { postHotDog } from '../../../redux/actions/hot-dog.action';

export const AddNewModal = ({ handleModal }) => {
  
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    handleModal();
    dispatch(postHotDog(values));
  }
  

  return (
    <div className={style.modal}>
      <div className={style.modal_block}>
        <AddNewForm handleCancel={handleModal} onSubmit={handleSubmit}/>
      </div>
    </div>
  )
}
