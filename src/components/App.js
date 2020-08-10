import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import HomePage from '../pages/homepage/home-page.component';
import ShopPage from '../pages/shop/shop.component';
import Header from './header/header.component';
import SignInAndSignUpPage from '../pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from '../components/checkout/checkout.component';

import { GlobalStyle } from './global.styles';

import { selectCurrentUser } from '../redux/user/user.selectors';
import { checkUserSession } from '../redux/user/user.action';

const App = ({ checkUserSession, currentUser }) => {
    // checkUserSession is a property function that is being passed in from mapDispatchToProps
    // its working because checkUserSession is not going to change, thus the dispatch function doesnt need to update
    // thus is working like componentDidMount
    useEffect(() => {
        checkUserSession();
    }, [checkUserSession]);

    return (
        <div className='parent'>
            <div className='body'>
                <GlobalStyle />
                <Header />
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route path='/shop' component={ShopPage} />
                    <Route exact path='/checkout' component={CheckoutPage} />
                    <Route exact path='/signin' render={() => (currentUser ? <Redirect to='/' /> : <SignInAndSignUpPage />)} />
                </Switch>
            </div>
            <div className='footer'>
                <div className='signature'>&copy; salvador.flores.dev</div>
            </div>
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
});

const mapDispatchToProps = (dispatch) => ({
    checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
