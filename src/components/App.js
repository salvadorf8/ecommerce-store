import './App.css';

import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from '../pages/homepage/home-page.component';
import ShopPage from '../pages/shop/shop.component';
import Header from './header/header.component';
import SignInAndSignUpPage from '../pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth } from '../firebase/firebase.utils';

class App extends React.Component {
    constructor() {
        super();

        this.state = { currentUser: null };
    }

    // this is how you will unmount from Auth
    unsubscribeFromAuth = null;

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
            //subscriber is always listening to the auth, user will always be sent untill they sign out
            this.setState({ currentUser: user });
            console.log(user);
        });
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div>
                <Header currentUser={this.state.currentUser} />
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route path='/shop' component={ShopPage} />
                    <Route path='/signin' component={SignInAndSignUpPage} />
                </Switch>
            </div>
        );
    }
}

export default App;
