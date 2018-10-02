import React, { Component } from 'react'

class AveragePrice extends Component {

    state = {
        avgPrice: null,
        isLoaded: false,
        token: sessionStorage.getItem('auth')
    };

    componentDidMount() {
        fetch('http://localhost:3001/api/products', {
            headers: {
                'Authorization':  this.state.token,
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                }
            })
            .then(response => response.json())
            .then(products => {

                return Math.round(products.reduce((acc, product) => {
                    return acc + product.price
                }, 0) / products.length)

            })
            .then(avgPrice => {
                this.setState({
                    avgPrice,
                    isLoaded: true
                })
            })
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
                                <i className="mdi mdi-tag-text-outline float-right"></i>
                            </div>
                            <div className="text-white">
                                <h6 className="text-uppercase mb-3">Average Price</h6>
                                <h4 className="mb-4">${this.state.avgPrice}</h4>

                                {/* Todo: Fixa detta sen */}
                                <span className="badge badge-warning"> 0% </span> <span
                                className="ml-2">From previous period</span>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }

    }
}

export default AveragePrice;