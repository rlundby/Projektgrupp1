import React, {Component} from 'react';
import './App.css';
import LatestTransactions from './components/latestTransactions';
import Footer from "./components/footer";
import MonthlyEarnings from "./components/montlyEarnings";

import Inbox from './components/inbox';
import TotalOrders from "./components/totalOrders";
import LatestOrders from './components/latestOrders';

class App extends Component {
  render() {
    return (
      <div className="App">
          <div className="wrapper">
            <TotalOrders />
            <MonthlyEarnings/>
            <Inbox/>
            <div className='row'>
              <LatestTransactions/>
              <LatestOrders />
            </div>
            <Footer/>
          </div>
      </div>
    );
  }
}


export default App;
