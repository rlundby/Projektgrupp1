import React from 'react';
import {Redirect} from 'react-router-dom';

import LatestTransactions from '../latestTransactions';
import Footer from "../footer";
import MonthlyEarnings from "../montlyEarnings";
import TotalOrders from '../totalOrders';
import LatestOrders from '../latestOrders';
import AveragePrice from '../averagePrice';
import Testimonial from '../testimonial';
import Inbox from '../inbox';
import Header from "../header";




class Main extends React.Component {


    render() {
        // om användaren inte har ett giltigt token, skicka tillbaka till login-sidan
        let auth = sessionStorage.getItem('auth');
        if(!auth) {
            return <Redirect to="/login" />
        }

        return (

            <div className="App">

                <Header/>
                <div className="wrapper">

                        <div className='container-fluid'>
                            <div className='row'>
                                <TotalOrders />

                                <AveragePrice/>

                            </div>
                            <MonthlyEarnings/>
                            <div className='row'>
                                <Inbox />

                                <Testimonial />
                            </div>
                            <div className='row'>
                                <LatestTransactions/>
                                <LatestOrders/>
                            </div>
                        </div>

                    <Footer/>
                </div>
            </div>
        );
    }
}


export default Main;
