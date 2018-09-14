import React, { Component } from 'react';
import './App.css';
import LatestTransactions from './components/latestTransactions';
import Footer from "./components/footer";
import MonthlyEarnings from "./components/montlyEarnings";

class App extends Component {
  render() {
    return (
      <div className="App">
          <div className="wrapper">
            <MonthlyEarnings/>
            <LatestTransactions/>
            <Footer/>
          </div>
      </div>
    );
  }
}

export default App;
