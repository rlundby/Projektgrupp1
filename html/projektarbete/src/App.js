import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';


import Main from './components/main';
import Login from './components/authentication';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            auth: false,
            activeUser: {}
        }
    }

    componentDidMount() {
        let auth = sessionStorage.getItem('auth');
        if(auth) {
            this.setState({auth: sessionStorage.setItem('auth', auth)})
        }
    }

    handleAuthChange = (bool) => {
        sessionStorage.setItem('auth', bool);
        this.setState({auth: bool})
    };

    handleUserChange = user => {
        this.setState({ activeUser: user})
    };


  render() {
    return (
      <Switch>
          <Route exact path='/' render={(props) =>(
              <Main {...props} data={this.state}/> )}/>
          <Route path='/login' render={(props) =>(
              <Login {...props} data={this.state} setAuth={this.handleAuthChange} activeUser={this.handleUserChange}/> )}/>
      </Switch>
    );
  }
}


export default App;
