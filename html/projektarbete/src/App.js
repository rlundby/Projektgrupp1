import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';


import Main from './components/main';
import Login from './components/authentication';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            auth: "",
        }
    }


    componentDidMount() {
        // kolla om användaren redan har en token i session
        let auth = sessionStorage.getItem('auth');
        if (auth) {
            this.setState({auth: sessionStorage.setItem('auth', auth)})
        }
    }

    handleAuthChange = (token) => {
        // när användaren är inloggad och fått token tillbaka, spara ner token i session och i state
        sessionStorage.setItem('auth', token);
        this.setState({auth: token})
    };

    // skicka med token till Main-komponenten
    render() {
        return (
            <Switch>
                <Route exact path='/' render={(props) => (
                    <Main {...props} data={this.state}/>)}/>
                <Route path='/login' render={(props) => (
                    <Login {...props} data={this.state} setAuth={this.handleAuthChange}/>)}/>
            </Switch>
        );
    }
}


export default App;
