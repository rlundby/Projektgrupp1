import React from 'react';
import {Redirect} from 'react-router-dom';

import LatestTransactions from '../latestTransactions';
import Footer from "../footer";
import MonthlyEarnings from "../montlyEarnings";
import TotalOrders from '../totalOrders';
import LatestOrders from '../latestOrders';

import Inbox from '../inbox';
import Header from "../header";



class Main extends React.Component {


    render() {
        console.log('props i main:', this.props)
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
