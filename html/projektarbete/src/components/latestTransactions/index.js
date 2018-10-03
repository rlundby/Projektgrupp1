
import React, { Component } from "react";
import EditingTransactions from "../editingTransactions";
import TransactionStatus from "../transactionStatus";

class LatestTransactions extends Component {

    state = {
        transactions: null,
        editing: false,
        currentTransaction: {},
    };

    componentDidMount() {
        fetch('http://localhost:3001/api/transactions')
            .then(response => response.json())
            .then(transactions => {
                this.setState({ transactions });
            });
    }

    getUpdatedTransactions() {
        fetch('http://localhost:3001/api/transactions')
            .then(response => response.json())
            .then(transactions => this.setState({ transactions }));
    }

    handleEditToggle(transaction){
        console.log(transaction);
        this.setState({
            editing: true,
            currentTransaction: transaction,
        });
    }

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

    handleSubmit (){
        this.updateTransaction();
    };

    updateTransaction(){
        console.log('You are trying to update:');
        console.log(this.state.currentTransaction);
        fetch('http://localhost:3001/api/update-transaction/' + this.state.currentTransaction._id, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json, text/plain */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.currentTransaction)
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