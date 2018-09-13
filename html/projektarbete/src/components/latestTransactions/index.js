
import React, { Component } from "react";

class LatestTransactions extends Component {

    state = {
      transactions: null
    };

    componentDidMount() {
        fetch('http://localhost:3001/api/transactions')
            .then(response => response.json())
            .then(transactions => this.setState({ transactions }));
    }


    render() {
        if(!this.state.transactions) {
            return(
                <div>No transactions found</div>
            )
        } else {
            return (
                <div>
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="card m-b-20">
                                <div className="card-body">
                                    <h4 className="mt-0 m-b-30 header-title">Latest Transactions</h4>

                                    <div className="table-responsive">
                                        <table className="table table-vertical">
                                            <tbody>
                                            {this.state.transactions.map((transaction, i) => {
                                                if(transaction.status === 'Confirmed') {
                                                    return (
                                                        <tr key={i}>
                                                            <td>
                                                                <img src="assets/images/users/user-2.jpg" alt="user"
                                                                     className="thumb-sm rounded-circle mr-2"/>
                                                                {transaction.name}
                                                            </td>


                                                            <td><i className="mdi mdi-checkbox-blank-circle text-success"></i> Confirm</td>
                                                            <td>
                                                                ${transaction.amount}
                                                                <p className="m-0 text-muted font-14">Amount</p>
                                                            </td>
                                                            <td>
                                                                {new Date(transaction.date).toISOString().split('T')[0]}
                                                                <p className="m-0 text-muted font-14">Date</p>
                                                            </td>
                                                            <td>
                                                                <button type="button"
                                                                        className="btn btn-secondary btn-sm waves-effect waves-light">Edit
                                                                </button>
                                                            </td>
                                                        </tr>
                                                    )
                                                } else if (transaction.status === 'Waiting') {
                                                    return (
                                                        <tr key={i}>
                                                            <td>
                                                                <img src="assets/images/users/user-2.jpg" alt="user"
                                                                     className="thumb-sm rounded-circle mr-2"/>
                                                                {transaction.name}
                                                            </td>


                                                            <td><i className="mdi mdi-checkbox-blank-circle text-warning"></i> Awaiting payment</td>
                                                            <td>
                                                                ${transaction.amount}
                                                                <p className="m-0 text-muted font-14">Amount</p>
                                                            </td>
                                                            <td>
                                                                {new Date(transaction.date).toISOString().split('T')[0]}
                                                                <p className="m-0 text-muted font-14">Date</p>
                                                            </td>
                                                            <td>
                                                                <button type="button"
                                                                        className="btn btn-secondary btn-sm waves-effect waves-light">Edit
                                                                </button>
                                                            </td>
                                                        </tr>
                                                    )
                                                } else {
                                                    return (
                                                        <tr key={i}>
                                                            <td>
                                                                <img src="assets/images/users/user-2.jpg" alt="user"
                                                                     className="thumb-sm rounded-circle mr-2"/>
                                                                {transaction.name}
                                                            </td>


                                                            <td><i className="mdi mdi-checkbox-blank-circle text-danger"></i> Payment Declined</td>
                                                            <td>
                                                                ${transaction.amount}
                                                                <p className="m-0 text-muted font-14">Amount</p>
                                                            </td>
                                                            <td>
                                                                {new Date(transaction.date).toISOString().split('T')[0]}
                                                                <p className="m-0 text-muted font-14">Date</p>
                                                            </td>
                                                            <td>
                                                                <button type="button"
                                                                        className="btn btn-secondary btn-sm waves-effect waves-light">Edit
                                                                </button>
                                                            </td>
                                                        </tr>
                                                    )
                                                }

                                            }
                                            )}
                                            </tbody>
                                        </table>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default LatestTransactions;