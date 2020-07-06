import './App.css';

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import HomePage from '../pages/homepage/home-page.component';
import ShopPage from '../pages/shop/shop.component';
import Header from './header/header.component';
import SignInAndSignUpPage from '../pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from '../firebase/firebase.utils';
import { setCurrentUser } from '../redux/user/user.action';

class App extends React.Component {
    // this is how you will unmount from Auth
    unsubscribeFromAuth = null;

    componentDidMount() {
        const { setCurrentUser } = this.props;

        //observer will always trigger listening to the auth, user will always be sent to page until they sign out
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
            if (userAuth) {
                console.log('userAuth is not empty');

                const userRef = await createUserProfileDocument(userAuth);

                userRef.onSnapshot((snapShot) => {
                    setCurrentUser({ id: snapShot.id, ...snapShot.data() });
                });
            } else {
                console.log('userAuth did not have anything');
                setCurrentUser(userAuth);
            }
        });
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route path='/shop' component={ShopPage} />
                    <Route path='/signin' component={SignInAndSignUpPage} />
                </Switch>
            </div>
        );
    }
}

const mapDispatchToProp = (dispatch) => {
    return { setCurrentUser: (user) => dispatch(setCurrentUser(user)) };
};

export default connect(null, mapDispatchToProp)(App);
