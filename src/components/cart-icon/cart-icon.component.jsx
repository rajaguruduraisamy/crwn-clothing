import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/svg/shopping-bag.svg';

import './cart-icon.styles.scss';

export const CartIcon = () => {
  return (
    <div className='cart-icon'>
      <ShoppingIcon className='shopping-icon'></ShoppingIcon>
      <div className='item-count'>0</div>
    </div>
  )
};
