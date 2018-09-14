import React, { Component } from 'react';
import './App.css';
import LatestTransactions from './components/latestTransactions';
import Footer from "./components/footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <LatestTransactions/>
          <Footer/>
        </div>
      </div>
    );
  }
}

export default App;
