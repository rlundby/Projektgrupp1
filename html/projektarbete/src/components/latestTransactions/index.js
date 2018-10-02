
import React, { Component } from "react";
import EditingTransactions from "../editingTransactions";
import TransactionStatus from "../transactionStatus";

class LatestTransactions extends Component {

    state = {
        transactions: null,
        editing: false,
        currentTransaction: {},
    };

    // On mount, get all transactions (if authorized)
    componentDidMount() {
        fetch('http://localhost:3001/api/transactions', {
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
            .then(transactions => {
                this.setState({ transactions });
            });
    }

    // When a transaction is updated, get the new ones.
    getUpdatedTransactions() {
        fetch('http://localhost:3001/api/transactions', {
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
            .then(transactions => this.setState({ transactions }));
    }

    // When trying to edit - display a form
    handleEditToggle(transaction){
        console.log(transaction);
        this.setState({
            editing: true,
            currentTransaction: transaction,
        });
    }

    // Handle the changes in the input fields
    handleChange = event => {
    let k = event.target.value;
    let n = event.target.name;
    switch(n) {
        case 'name':
            this.setState(prevState => ({
                currentTransaction: {
                    ...prevState.currentTransaction,
                    name: k
                }
            }));
            break;
        case 'status':
            this.setState(prevState => ({
                currentTransaction: {
                    ...prevState.currentTransaction,
                    status: k
                }
            }));
            break;
        case 'amount':
            this.setState(prevState => ({
                currentTransaction: {
                    ...prevState.currentTransaction,
                    amount: k
                }
            }));
            break;
        default:
            console.log('This should not happen');
    }
    };

    // Handles the submit updated transaction function
    handleSubmit (){
        this.updateTransaction();
    };

    // Updates the selected transaction with the input in the edit form
    updateTransaction(){
        console.log('You are trying to update:');
        console.log(this.state.currentTransaction);
        fetch('http://localhost:3001/api/update-transaction/' + this.state.currentTransaction._id, {
            method: 'PUT',
            headers: {
                'Authorization': sessionStorage.getItem('auth'),
                'Accept': 'application/json, text/plain */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.currentTransaction)
        })
            .then(result => {
                if (result.status === 401) {
                    throw new Error('Unauthorized')
                }
                return result.json()
            })
            .then((res) => {
                console.log(res);
                this.setState({
                    editing: false
                });
                this.getUpdatedTransactions();
            })
            .catch(err => console.log(err))
    }


    render() {
        if(!this.state.transactions) {
            return(
                <div>No transactions found. Did you start the server?</div>
            )
        }else if(this.state.editing) {
            return (
                <EditingTransactions
                    currentTransaction={this.state.currentTransaction}
                    onChange={this.handleChange}
                    onSubmit={() => this.handleSubmit()}
                    onCancel={() => {this.setState({editing: false})}}
                />
            )
        } else {
            return (
                <div className="col-xl-6">
                    <div className="card m-b-20">
                        <div className="card-body">
                            <h4 className="mt-0 m-b-30 header-title">Latest Transactions</h4>
                            <div className="table-responsive">
                                <table className="table table-vertical">
                                    <tbody>
                                    {this.state.transactions.map((transaction, i) => {
                                        return (
                                            <tr key={i}>
                                                <td className="text-left">
                                                    <img src="assets/images/users/user-2.jpg" alt="user"
                                                         className="thumb-sm rounded-circle mr-2"/>
                                                    {transaction.name}
                                                </td>
                                                <TransactionStatus
                                                    statusCode={transaction.status}
                                                />
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
                                                            className="btn btn-secondary btn-sm waves-effect waves-light"
                                                            onClick={() => {this.handleEditToggle(transaction)}}>Edit
                                                    </button>
                                                </td>
                                            </tr>
                                        )
                                      }
                                    )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                    
            );
        }
    }
}

export default LatestTransactions;