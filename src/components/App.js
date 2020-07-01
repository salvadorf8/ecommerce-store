import './App.css';

import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from '../pages/HomePage.component';

const HatsPage = () => <div>hats</div>;

function App() {
    return (
        <div>
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route path='/shop/hats' component={HatsPage} />
            </Switch>
        </div>
    );
}

export default App;
