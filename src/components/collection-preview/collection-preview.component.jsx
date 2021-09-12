import React from 'react';
import { CollectionItem } from '../collection-item/collection-item.component';

import './collection-preview.styles.scss';

export const CollectionPreview = ({ title, items }) => {
  return (
    <div className='collection-preview'>
      <h1 className='title'>{title}</h1>
      <div className='preview'>
        {
          items.filter((item, idx) => idx < 4).map(({ id, ...otherProps}) => {
            return (<CollectionItem key={id} {...otherProps}></CollectionItem>);
          })
        }
      </div>
    </div>
  )
};