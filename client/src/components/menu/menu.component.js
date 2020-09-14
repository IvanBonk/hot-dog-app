import React, { useEffect } from 'react';
import style from './menu.module.scss';
import { MenuItem } from './menu-item';
import { useDispatch, useSelector } from 'react-redux';
import { getHotDogs } from '../../redux/actions/hot-dog.action';

export const Menu = () => {

  const dispatch = useDispatch();
  const hotDogsList = useSelector((state) => state.hotDogs.hotDogsList)

  useEffect(() => {
    dispatch(getHotDogs());
  },[]);

  const menuItems = hotDogsList.map((item) => {
    return <MenuItem key={item.id} content={item}/>
  })

  return (
    <div className={style.menu}>
      <div className={style.menu_title}>
        <h1>All hot-dogs</h1>
      </div>
      <div className={style.menu_hotDogList}>
        {menuItems}
      </div>
    </div>
  );
}