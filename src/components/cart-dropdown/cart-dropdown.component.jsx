import React from 'react';
import { connect } from 'react-redux';
import { CustomButton } from '../custom-button/custom-button.component';
import { CartItem } from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';

import './cart-dropdown.styles.scss';

const BaseCartDropdown = ({ cartItems }) => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {
          cartItems.map((item) => {
            return (<CartItem key={item.id} {...item} />);
          })
        }
      </div>
      <CustomButton>Checkout</CustomButton>
    </div>
  )
};

const mapStateToProps = (state) => {
  return {
    cartItems: selectCartItems(state)
  }
}

export const CartDropdown = connect(mapStateToProps)(BaseCartDropdown);
