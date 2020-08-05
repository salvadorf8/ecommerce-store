import React from 'react';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { ReactComponent as SVGLogo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import * as S from './header.styles';

const Header = ({ currentUser, hidden }) => (
    <S.Navbar>
        <S.NavbarBrandLink to='/'>
            <SVGLogo className='logo' />
        </S.NavbarBrandLink>
        <S.NavbarNav>
            <S.NavLink to='/shop'>SHOP</S.NavLink>
            <S.NavLink to='/contact'>CONTACT</S.NavLink>
            {currentUser ? (
                <S.NavLink as='div' onClick={() => auth.signOut()}>
                    SIGN OUT
                </S.NavLink>
            ) : (
                <S.NavLink className='option' to='/signin'>
                    SIGN IN
                </S.NavLink>
            )}
            <CartIcon />
        </S.NavbarNav>
        {hidden ? null : <CartDropDown />}
    </S.Navbar>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
