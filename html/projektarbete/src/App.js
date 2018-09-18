import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';


import Main from './components/main';
import Login from './components/authentication';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            auth: false // hämta från session
        };
    }

    handleChange = (bool) => {
        this.setState({auth: bool})
    };


  render() {
    return (
      <Switch>
          <Route exact path='/' render={(props) =>(
              <Main {...props} data={this.state}/> )}/>
          <Route path='/login' render={(props) =>(
              <Login {...props} data={this.state} setAuth={this.handleChange}/> )}/>
      </Switch>
    );
  }
}


export default App;
