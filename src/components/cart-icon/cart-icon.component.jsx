import React from 'react';
import { connect } from 'react-redux';
import { ReactComponent as ShoppingIcon } from '../../assets/svg/shopping-bag.svg';
import { toggleCartDropdown } from '../../redux/cart/cart.actions';

import './cart-icon.styles.scss';

const BaseCartIcon = ({ toggleCartDropdown }) => {
  return (
    <div className='cart-icon' onClick={toggleCartDropdown}>
      <ShoppingIcon className='shopping-icon'></ShoppingIcon>
      <div className='item-count'>0</div>
    </div>
  )
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleCartDropdown: () => dispatch(toggleCartDropdown())
  }
}

export const CartIcon = connect(null, mapDispatchToProps)(BaseCartIcon);
