import React from 'react';
import {Redirect} from 'react-router-dom';

import LatestTransactions from '../latestTransactions';
import Footer from "../footer";
import MonthlyEarnings from "../montlyEarnings";

import Inbox from '../inbox';
import Header from "../header";



class Main extends React.Component {


    render() {

        if(!this.props.data.auth) {
            return <Redirect to="/login" />
        }

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


export default Main;
