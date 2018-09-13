import React, { Component } from 'react';
import './App.css';
import LatestTransactions from './components/latestTransactions';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LatestTransactions/>
      </div>
    );
  }
}

export default App;
