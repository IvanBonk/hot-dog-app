import React, { useState } from 'react';
import style from './header.module.scss';
import { AddNewModal } from './add-new-modal';
import Loader from 'react-loader-spinner';
import { useSelector } from 'react-redux';

export const Header = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const loading = useSelector(state => state.hotDogs.fetching)

  const handleModal = () => {
    const value = isModalOpen;
    setIsModalOpen(!value);
  }

  return (
    <>
      <header className={style.header}>
        <div className={style.header_logo}>
          <img 
            className={style.header_logo_image} 
            src='https://pngimg.com/uploads/hot_dog/hot_dog_PNG10232.png'
            alt='logotype'
            />
          <div className={style.header_logo_name}>CRUD</div>
        </div>
        <Loader 
          visible={loading}
          type="ThreeDots"
          color="#404040"
          height={25}
          width={80}
        />
        <div>
          <button 
            className={style.header_button}
            onClick={handleModal}>Add hot-dog</button>
        </div>
      </header>
      {isModalOpen && <AddNewModal handleModal={handleModal}/>}
    </>
  )
}