import './App.css';

import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import HomePage from '../pages/homepage/home-page.component';
import ShopPage from '../pages/shop/shop.component';
import Header from './header/header.component';
import SignInAndSignUpPage from '../pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from '../components/checkout/checkout.component';

import { selectCurrentUser } from '../redux/user/user.selectors';
import { checkUserSession } from '../redux/user/user.action';

class App extends React.Component {
    // this is how you will unmount from Auth
    unsubscribeFromAuth = null;

    componentDidMount() {
        const { checkUserSession } = this.props;

        checkUserSession();
    }

    componentWillUnmount() {
        // unsubscribing here is basically saying: observable, we no longer need the subscription, lets get rid of it
        // this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route path='/shop' component={ShopPage} />
                    <Route exact path='/checkout' component={CheckoutPage} />
                    <Route exact path='/signin' render={() => (this.props.currentUser ? <Redirect to='/' /> : <SignInAndSignUpPage />)} />
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
});

const mapDispatchToProps = (dispatch) => ({
    checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
