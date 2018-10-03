
import React, { Component } from "react";
import AreaGraph from "../areaGraph";

class Yearly extends Component {

    state = {
       entries:[]
    };

    componentDidMount() {
        fetch('http://localhost:3001/api/yearly', {
            headers: {
                'Authorization': sessionStorage.getItem('auth'),
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
        .then(response => {
            if(response === 401){
                throw new Error('Unauthorized')
            }else return response.json()
        })
        .then(values => {
           this.setState(prevState => ({ entries:values.result}))
       });
    }
    
    sumOfMarket(){
        if (this.state.entries.length > 0){
                let sumOfMarketValues = this.state.entries.reduce((marketvalues, object) => {
                return marketvalues.market + object.market
            })
            return sumOfMarketValues
        }else return "no values to show"
    }
    sumOfIncome(){
        if (this.state.entries.length > 0){
                let sumOfIncomeValues = this.state.entries.reduce((incomevalues, object) => {
                return incomevalues.income + object.income
            })
            return sumOfIncomeValues
        } else return "no values to show"
    }
    lastMonth(){
        if (this.state.entries.length > 0){
            let latestObject = { year:0, month:0 }
            this.state.entries.forEach(object => {
                if(object.year >= latestObject.year){
                    if(object.month > latestObject.month){
                    return  latestObject = object
                    }else return null
                }else return null   
            });
            return latestObject.income
        }else return "no values to show"
    }

    render() {
        if(!this.state) {
            return(
                <div>No yearly values found. Did you start the server?</div>
            )
        } else {
            return (
                <div className="col-xl-6">
                <div className="card m-b-20">
                    <div className="card-body">
                        <h4 className="mt-0 header-title">Email Sent</h4>
                        <div className="row text-center m-t-20">
                            <div className="col-4">
                                <h5 className="">{this.sumOfMarket()}</h5>
                                <p className="text-muted ">Marketplace</p>
                            </div>
                            <div className="col-4">
                                <h5 className="">{this.sumOfIncome()}</h5>
                                <p className="text-muted ">Total Income</p>
                            </div>
                            <div className="col-4">
                                <h5 className="">{this.lastMonth()}</h5>
                                <p className="text-muted ">Last Month</p>
                            </div>
                        </div>
                        <AreaGraph/>
                    </div>
                </div>
            </div>
            );
        }   
    }
}

export default Yearly;