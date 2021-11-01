import React from 'react';
import { connect } from 'react-redux';
import { ReactComponent as ShoppingIcon } from '../../assets/svg/shopping-bag.svg';
import { toggleCartDropdown } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import './cart-icon.styles.scss';

const BaseCartIcon = ({ toggleCartDropdown, itemsCount }) => {
  return (
    <div className='cart-icon' onClick={toggleCartDropdown}>
      <ShoppingIcon className='shopping-icon'></ShoppingIcon>
      <div className='item-count'>{itemsCount}</div>
    </div>
  )
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleCartDropdown: () => dispatch(toggleCartDropdown())
  }
}

const mapStateToProps = (state) => {
  return {
    itemsCount: selectCartItemsCount(state)
  }
}

export const CartIcon = connect(mapStateToProps, mapDispatchToProps)(BaseCartIcon);
