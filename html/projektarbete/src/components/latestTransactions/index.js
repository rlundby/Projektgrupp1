
import React, { Component } from "react";

class LatestTransactions extends Component {

    state = {
        transactions: null,
        editing: false,
        currentTransaction: {},
    };

    componentDidMount() {
        fetch('http://localhost:3001/api/transactions')
            .then(response => response.json())
            .then(transactions => this.setState({ transactions }));
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

    handleSubmit = event => {
        console.log('Form submitting!');
        this.updateTransaction();
        event.preventDefault();
    };

    updateTransaction(){
        console.log('You are trying to update:');
        console.log(this.state.currentTransaction)
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
                })
                this.getUpdatedTransactions();
            })
            .catch(err => console.log(err))
    }


    render() {
        if(!this.state.transactions) {
            return(
                <div>No transactions found</div>
            )
        }else if(this.state.editing) {
            return (

                <div>
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="card m-b-20">
                                <div className="card-body">
                                    <h4 className="mt-0 m-b-30 header-title">Editing transaction: {this.state.currentTransaction._id}</h4>
                                    <form onSubmit={this.handleSubmit}>
                                        <div className="form-group">
                                            <label htmlFor="name">Name:</label>
                                            <input className="form-control" name="name" type="text" value={this.state.currentTransaction.name} onChange={this.handleChange}/>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="status">Status:</label>
                                            <select className="form-control" name="status" value={this.state.currentTransaction.status} onChange={this.handleChange}>
                                                <option disabled value=''>  Select a status </option>
                                                <option value="Confirmed">Payment confirmed</option>
                                                <option value="Waiting">Payment waiting</option>
                                                <option value="Expired">Payment declined</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="name">Amount:</label>
                                            <input className="form-control" name="amount" type="number" value={this.state.currentTransaction.amount} onChange={this.handleChange}/>
                                        </div>
                                        <button type="submit" className="btn btn-lg btn-success">Submit changes</button>
                                    </form>
                                    <button className="btn btn-lg mt-3" onClick={() => {this.setState({editing: false})}}>Cancel</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

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
                                                                        className="btn btn-secondary btn-sm waves-effect waves-light"
                                                                        onClick={() => {this.handleEditToggle(transaction)}}>Edit
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
                                                                        className="btn btn-secondary btn-sm waves-effect waves-light"
                                                                        onClick={() => {this.handleEditToggle(transaction)}}>Edit
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
                                                                        className="btn btn-secondary btn-sm waves-effect waves-light"
                                                                        onClick={() => {this.handleEditToggle(transaction)}}>Edit
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