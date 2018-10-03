import React, {Component} from 'react';
import OrderStatus from '../orderStatus';

class LatestOrders extends Component {

    state = {
        orders: null,
        isLoaded: false,
        token: sessionStorage.getItem('auth')
    };

    componentDidMount() {
        fetch('http://localhost:3001/api/get-orders', {
            headers: {
                'Authorization':  this.state.token,
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

                let latestOrders = []
                for(let i = 0; i < 6; i++) {
                    let last = orders.pop();
                    latestOrders.push(last)
                }

                this.setState({
                    orders: latestOrders,
                    isLoaded: true
                });

            });
    }

    render() {
        return (
            <div className="col-xl-6">
                <div className="card m-b-20">
                    <div className="card-body">
                        <h4 className="mt-0 m-b-30 header-title">Latest Orders</h4>

                        {!this.state.isLoaded
                            ? <h4 className="mb-4">Loading..</h4>
                            : (
                                <div className="table-responsive">
                                    <table className="table table-vertical mb-1">

                                        <tbody>
                                        {this.state.orders.map(order => {
                                            return (
                                                <tr key={order.id}>
                                                    <td>#{order.id.substring(0,8)}</td>
                                                    <td><img src={order.imgpath} alt="user"
                                                            className="thumb-sm mr-2 rounded-circle"/></td>
                                                    <td>{order.companyName}</td>
                                                    <td><OrderStatus status={order.status} />
                                                    </td>
                                                    <td>${order.price}</td>
                                                    <td>{new Date(order.date).toISOString().split('T')[0]}</td>
                                                    <td>
                                                        <button type="button"
                                                                className="btn btn-secondary btn-sm waves-effect waves-light">Edit
                                                        </button>
                                                    </td>
                                                </tr>

                                            )
                                        })}
                                        </tbody>
                                    </table>
                                </div>        
                            )                        
                        }

                    </div>
                </div>
            </div>
        )
    }

}


export default LatestOrders;