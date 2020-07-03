import './App.css';

import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from '../pages/homepage/home-page.component';
import ShopPage from '../pages/shop/shop.component';
import Header from './header/header.component';
import SignInAndSignUpPage from '../pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from '../firebase/firebase.utils';

class App extends React.Component {
    constructor() {
        super();

        this.state = { currentUser: null };
    }

    // this is how you will unmount from Auth
    unsubscribeFromAuth = null;

    componentDidMount() {
        //observer will always trigger listening to the auth, user will always be sent to page until they sign out
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);

                userRef.onSnapshot((snapShot) => {
                    this.setState({ currentUser: { id: snapShot.id, ...snapShot.data() } });
                    console.log(this.state);
                });
            } else {
                console.log('userAuth did not have anything');
                this.setState({ currentUser: userAuth });
            }
        });
    }

    componentWillUnmount() {
        console.log('unsubscribing');
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
