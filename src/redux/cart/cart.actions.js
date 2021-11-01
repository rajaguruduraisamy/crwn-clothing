import { CartActionTypes } from './cart.types';

export const toggleCartDropdown = () => {
  return {
    type: CartActionTypes.TOGGLE_CART_DROPDOWN
  };
};

export const addCartItem = (item) => {
  return {
    type: CartActionTypes.ADD_ITEM,
    payload: item
  };
};

