import React, {Component} from "react";

class UsermenuWallet extends Component {

    state = {
        currentUser: {
            id: 12
        },
        currentUserWallet: null
    };

    componentDidMount() {
        fetch('http://localhost:3001/api/user-wallet/' + this.state.currentUser.id)
            .then(response => response.json())
            .then(currentUserWallet => {
                this.setState({currentUserWallet});
            });
    }

    render() {
        if(!this.state.currentUserWallet) {
            return <p> No user detected. </p>
        }
        else {
            return (
                <div className="container-fluid">
                    <h3 className="page-header">Wallet</h3>
                    <div className="row">
                        <h5 className="col-sm-12">Balance</h5>
                        <div className="col-sm-12">
                            <h6>${this.state.currentUserWallet.balance}</h6>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default UsermenuWallet;