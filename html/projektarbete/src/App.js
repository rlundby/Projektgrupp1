import React, {Component} from 'react';
import './App.css';
import LatestTransactions from './components/latestTransactions';
import Footer from "./components/footer";
import MonthlyEarnings from "./components/montlyEarnings";

import Inbox from './components/inbox';
import TotalOrders from "./components/totalOrders";

class App extends Component {
  render() {
    return (
      <div className="App">
          <div className="wrapper">
            <TotalOrders />
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
