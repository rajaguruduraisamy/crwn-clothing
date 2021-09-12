import React, { Component } from 'react';
import { SHOP_DATA } from './shopdata.js';
import { CollectionPreview } from '../../components/collection-preview/collection-preview.component';

import './shoppage.styles.scss';

export class ShopPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collection: SHOP_DATA
    };
  }

  render() {
    const collection = this.state.collection;
    return (
      <div className='shoppage'>
        { collection.map(({id, ...otherProps}) => {
          return <CollectionPreview key={id} {...otherProps}/>
        })}
      </div>
    )
  }
}