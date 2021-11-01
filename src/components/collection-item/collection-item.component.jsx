import React from 'react';
import { connect } from 'react-redux';
import { CustomButton } from '../custom-button/custom-button.component';
import { addCartItem } from '../../redux/cart/cart.actions';

import './collection-item.styles.scss';

const BaseCollectionItem = ({ item, addItemToCart }) => {
  const { imageUrl, name, price } = item;
  return (
    <div className='collection-item'>
      <div className='image' style={{ backgroundImage: `url(${imageUrl})`}}></div>
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <CustomButton className='add-to-cart-button' inverted onClick={() => addItemToCart(item)}>ADD TO CART</CustomButton>
    </div>
  )
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItemToCart: (item) => dispatch(addCartItem(item))
  };
}

export const CollectionItem = connect(null, mapDispatchToProps)(BaseCollectionItem);
