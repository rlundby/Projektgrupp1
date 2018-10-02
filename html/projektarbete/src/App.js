import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';

import Main from './components/main';
import Login from './components/authentication';


class App extends Component {

    render() {
        return (
            <Switch>
                <Route exact path='/' component={Main} />
                <Route path='/login' component={Login}/>
            </Switch>
        );
    }
}


export default App;
