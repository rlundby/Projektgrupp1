import React, {Component} from 'react';
import './App.css';
import LatestTransactions from './components/latestTransactions';
import Footer from "./components/footer";
import MonthlyEarnings from "./components/montlyEarnings";

import Inbox from './components/inbox';

class App extends Component {
  render() {
    return (
      <div className="App">
          <div className="wrapper">
            <MonthlyEarnings/>
            <Inbox/>
            <LatestTransactions/>
            <Footer/>
          </div>
      </div>
    );
  }
}


export default App;
