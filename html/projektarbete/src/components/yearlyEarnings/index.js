import React, { Component } from "react";
import StackedChart from "../stackedChart";


class YearlyEarnings extends Component {

    state = {
        total: null,
        tax: null,
        isLoaded: false
    };

    componentDidMount() {
        fetch('http://localhost:3001/api/get-yearly-earnings-total', {
            headers: {
                'Authorization': sessionStorage.getItem('auth'),
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
        .then(response => response.json())
        .then(result => {
            this.setState({
                total: result.total,
                tax: result.tax,
                isLoaded: true
            })
        });
    }

    render() {
    
        return (
            <div className="col-xl-3">
            <div className="card m-b-20">
                <div className="card-body">
                    <h4 className="mt-0 header-title">Yearly Earnings</h4>
                    {!this.state.isLoaded
                        ? <h4 className="mb-4">Loading..</h4>
                        : (
                            <div className="row text-center m-t-20">
                                <div className="col-6">
                                    <h5 className="">$ {this.state.total}</h5>
                                    <p className="text-muted ">Total Income</p>
                                </div>
                                <div className="col-6">
                                    <h5 className="">$ {this.state.tax}</h5>
                                    <p className="text-muted ">Tax</p>
                                </div>
                            </div>

                        )
                    }
                    <StackedChart />
                    
                </div>
            </div>
        </div>
        )

    }
}

export default YearlyEarnings