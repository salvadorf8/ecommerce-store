import { createSelector } from 'reselect';

// reselect takes the following naming structure and gets the whole state and just returns a slice of it.
// in this case just the cart
const selectCart = (state) => state.cart;

// thus a memoized selector
export const selectCartItems = createSelector([selectCart], (cart) => cart.cartItems);

export const selectCartHidden = createSelector([selectCart], (cart) => cart.hidden);

export const selectCartItemsCount = createSelector([selectCartItems], (cartItems) => cartItems.reduce((theQuantity, cartItem) => theQuantity + cartItem.quantity, 0));

//reason for selector is so that the cart dropdown and icon will not be rerendered when we sign out which is
// not related to the components.
