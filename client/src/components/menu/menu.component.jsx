import React, { useEffect } from 'react';
import style from './menu.module.scss';
import { MenuItem } from './menu-item';
import { useDispatch, useSelector } from 'react-redux';
import { getHotDogs } from '../../redux/actions/hot-dog.action';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();
export const Menu = () => {

  const dispatch = useDispatch();
  const hotDogsList = useSelector((state) => state.hotDogs.hotDogsList);
  const errorMessage = useSelector((state) => state.hotDogs.errorMessage);

  useEffect(() => {
    dispatch(getHotDogs());
  }, [dispatch]);

  useEffect(() => {
    if (errorMessage) {
      toast.error(errorMessage, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    }
  }, [errorMessage])

  return (
    <div className={ style.menu }>
      <div className={ style.menu_head }>
        <h1 className={ style.menu_head_title }>{ 'All hot-dogs' }</h1>
      </div>
      {hotDogsList && <div className={ style.menu_hotDogList }>
        { hotDogsList.map((item) => {
          return <MenuItem key={ item.id } content={ item } />
        }) }
      </div> }
    </div>
  );
}