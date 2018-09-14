import React, {Component} from 'react';
import './App.css';
import LatestTransactions from './components/latestTransactions';
import Inbox from './components/inbox';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Inbox/>
                <LatestTransactions/>
            </div>
        );
    }
}

export default App;
