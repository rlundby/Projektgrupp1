
import React, { Component } from "react";

class EditingTransactions extends Component {

    componentDidMount() {
    }

    submitForm = e => {
        e.preventDefault();
        this.props.onSubmit();
    };

    render() {
            return (

                <div className="col-xl-6">
                    <div className="card m-b-20">
                        <div className="card-body">
                            <h4 className="mt-0 m-b-30 header-title">Editing transaction: {this.props.currentTransaction._id}</h4>
                            <form onSubmit={this.submitForm}>
                                <div className="form-group">
                                    <label htmlFor="name">Name:</label>
                                    <input className="form-control" name="name" type="text" value={this.props.currentTransaction.name} onChange={this.props.onChange}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="status">Status:</label>
                                    <select className="form-control" name="status" value={this.props.currentTransaction.status} onChange={this.props.onChange}>
                                        <option disabled value=''>  Select a status </option>
                                        <option value="Confirmed">Payment confirmed</option>
                                        <option value="Waiting">Payment waiting</option>
                                        <option value="Expired">Payment declined</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="name">Amount:</label>
                                    <input className="form-control" name="amount" type="number" value={this.props.currentTransaction.amount} onChange={this.props.onChange}/>
                                </div>
                                <button type="submit" className="btn btn-lg btn-success">Submit changes</button>
                            </form>
                            <button className="btn btn-lg mt-3" onClick={this.props.onCancel}>Cancel</button>
                        </div>
                    </div>
                </div>
                  

            )
        }
                    


}

export default EditingTransactions;