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

class App extends React.Component {
    // this is how you will unmount from Auth
    unsubscribeFromAuth = null;

    componentDidMount() {
        // const { setCurrentUser } = this.props;
        // // observer will always trigger a listener to the auth, user will always be sent to page until they sign out
        // // below is an example of - observable/observer pattern - using the firebase library
        // // onAuthStateChanged is known as an observable - which continuously fires off events that occur
        // this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
        //     // the function code here is our subscription asking the observable to fire when a particular event occurs
        //     if (userAuth) {
        //         const userRef = await createUserProfileDocument(userAuth);
        //         userRef.onSnapshot((snapShot) => {
        //             setCurrentUser({ id: snapShot.id, ...snapShot.data() });
        //         });
        //     } else {
        //         setCurrentUser(userAuth);
        //     }
        // });
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

export default connect(mapStateToProps)(App);
