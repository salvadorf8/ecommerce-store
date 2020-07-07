import './cart-dropdown.styles.scss';
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

const CartDropDown = ({ cartItems }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>{cartItems.length ? cartItems.map((cartItem) => <CartItem key={cartItem.id} item={cartItem} />) : <span className='empty-message'>Your cart is empty</span>}</div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItemsCount
});

export default connect(mapStateToProps)(CartDropDown);
