import React, { Component } from 'react'

class TotalOrders extends Component {

    state = {
        orders: null,
        isLoaded: false
    };

    componentDidMount() {
        fetch('http://localhost:3001/api/get-total-orders', {
            headers: {
                'Authorization':  sessionStorage.getItem('auth'),
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
            .then(result => {
                if (result.status === 401) {
                    throw new Error('Unauthorized')
                }
                return result.json()
            })
            .then(orders => {
                this.setState({ 
                    orders,
                    isLoaded: true
                 })
            });
    }

    render() {

        if(!this.state.isLoaded) {
            return null;
        }
        else {
           return (
            <div className="col-xl-3 col-md-6">
                <div className="card mini-stat bg-primary">
                    <div className="card-body mini-stat-img">
                        <div className="mini-stat-icon">
                            <i className="mdi mdi-cube-outline float-right"></i>
                        </div>
                        <div className="text-white">
                            <h6 className="text-uppercase mb-3">Orders</h6>
                            <h4 className="mb-4">{this.state.orders}</h4>

                            {/* Todo: Fixa detta sen */}
                            <span className="badge badge-info"> +11% </span> <span
                            className="ml-2">From previous period</span>
                        </div>
                    </div>
                </div>
            </div>
        )  
        }
       
    }
}

export default TotalOrders;