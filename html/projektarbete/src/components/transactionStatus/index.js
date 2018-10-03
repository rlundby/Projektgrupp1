
import React, { Component } from "react";

class TransactionStatus extends Component {

    componentDidMount() {
    }

    // Renders different status for the transaction depending on status code.
    render() {

        if(this.props.statusCode === 'Confirmed'){
            return <td className="text-left"><i className="mdi mdi-checkbox-blank-circle text-success"></i>Confirm</td>
        } else if(this.props.statusCode === 'Waiting'){
            return <td className="text-left"><i className="mdi mdi-checkbox-blank-circle text-warning"></i>Awaiting Payment</td>
        } else {
            return <td className="text-left"><i className="mdi mdi-checkbox-blank-circle text-danger"></i>Payment Declined</td>
        }
    }

                    


}

export default TransactionStatus;