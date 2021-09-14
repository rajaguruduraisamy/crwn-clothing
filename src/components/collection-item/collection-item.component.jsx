import React from 'react';
import { CustomButton } from '../custom-button/custom-button.component';

import './collection-item.styles.scss';

export const CollectionItem = ({name, imageUrl, price}) => {
  return (
    <div className='collection-item'>
      <div className='image' style={{ backgroundImage: `url(${imageUrl})`}}></div>
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <CustomButton className='add-to-cart-button' inverted>ADD TO CART</CustomButton>
    </div>
  )
};
