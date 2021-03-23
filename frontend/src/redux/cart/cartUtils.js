export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.product === cartItemToAdd.product
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.product === cartItemToAdd.product
        ? { ...cartItem, qty: cartItem.qty + cartItemToAdd.qty }
        : cartItem
    );
  }
  return [...cartItems, { ...cartItemToAdd, qty: cartItemToAdd.qty }];
};
