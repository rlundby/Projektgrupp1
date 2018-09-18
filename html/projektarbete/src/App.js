import React, {Component} from 'react';
import './App.css';
import LatestTransactions from './components/latestTransactions';
import Footer from "./components/footer";
import MonthlyEarnings from "./components/montlyEarnings";

import Inbox from './components/inbox';
import Header from "./components/header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
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
