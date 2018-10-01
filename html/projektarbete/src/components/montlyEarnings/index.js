import React, { Component } from "react";
import DonutGraph from "../graph";

class MonthlyEarnings extends Component {

    state = {
        earnings: [],
        thisMonth: null,
        lastMonth: null
    };

    // Get the monthly earnings for the selected month.
    // Right now the current month is hard coded
    componentDidMount() {
        fetch('http://localhost:3001/api/get-monthly-earnings', {
            headers: {
                'Authorization': sessionStorage.getItem('auth'),
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
            .then(response => {
                if (response.status === 401) {
                    throw new Error('Unauthorized')
                }
                return response.json()
            })
            .then(earnings => {
                for(let earning of earnings.earnings) {
                    this.setState(prevState => ({
                        earnings: [...prevState.earnings, earning]
                    }))
                }
                this.setState({
                    thisMonth: this.state.earnings.find(x => x.month === 8),
                    lastMonth: this.state.earnings.find(x => x.month === 7)
                });
            });
    }

    render() {

        if(!this.state.thisMonth) {
            return (
                <p> Getting this months earnings... </p>
            )
        } else {
            return(
                <div className="col-xl-3">
                    <div className="card m-b-20">
                        <div className="card-body">
                            <h4 className="mt-0 header-title">Monthly Earnings</h4>

                            <div className="row text-center m-t-20">
                                <div className="col-6">
                                    <h5 className="">${this.state.thisMonth.marketplace}</h5>
                                    <p className="text-muted ">Marketplace</p>
                                </div>
                                <div className="col-6">
                                    <h5 className="">${this.state.thisMonth.total}</h5>
                                    <p className="text-muted ">Total Income</p>
                                </div>
                            </div>
                            <DonutGraph/>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default MonthlyEarnings;