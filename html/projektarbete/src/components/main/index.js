import React from 'react';
import {Redirect} from 'react-router-dom';

import LatestTransactions from '../latestTransactions';
import Footer from "../footer";
import MonthlyEarnings from "../montlyEarnings";
import TotalOrders from '../totalOrders';
import LatestOrders from '../latestOrders';
import Yearly from '../yearly';

import Inbox from '../inbox';
import Header from "../header";



class Main extends React.Component {


    render() {
        let auth = sessionStorage.getItem('auth');
        if(!auth) {
            return <Redirect to="/login" />
        }

        return (
            <div className="App">

                <Header/>
                <div className="wrapper">
                    <TotalOrders />
                    <MonthlyEarnings/>
                    <Yearly/>
                    <Inbox/>
                    <div className='row'>
                        <LatestTransactions/>
                        <LatestOrders/>
                    </div>
                    <Footer/>
                </div>
            </div>
        );
    }
}


export default Main;
