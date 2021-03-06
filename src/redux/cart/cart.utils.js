export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(item => item.id === cartItemToAdd.id);

  if (existingCartItem) {
    return cartItems.map((item) => {
      if (item.id === cartItemToAdd.id) {
        return {
          ...item,
          quantity: item.quantity + 1
        }
      } else {
        return item
      }
    });
  }
  
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
};