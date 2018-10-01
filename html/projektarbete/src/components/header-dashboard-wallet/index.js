
import React, { Component } from "react";
import {Sparklines, SparklinesBars} from "react-sparklines";

class HeaderDashboardWallet extends Component {

    state = {
        currentUser: {
            id: 12
        },
        currentUserWallet: null
    };

    // On mount, get user wallet and display in dashboard
    componentDidMount() {
        fetch('http://localhost:3001/api/user-wallet/' + this.state.currentUser.id, {
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
            .then(currentUserWallet => {
                this.setState({currentUserWallet});
            });
    }
    render() {
        if(!this.state.currentUserWallet) {
            return <p> Please sign in to use this function</p>
        }
        return(

            <div className="state-information">
                <div className="state-graph">
                    <div className="testingstuff">
                        {/*  These graphs are still hard code */}

                        <Sparklines data={[5, 3, 2, 10, 12, 14, 12, 12, 20, 10, 2, 5, 12]}>
                            <SparklinesBars style={{ fill: "#40c0f5" }} />
                        </Sparklines>
                    </div>
                    <div className="info">Balance ${this.state.currentUserWallet.balance}</div>
                </div>
                <div className="state-graph">
                    <div className="testingstuff">
                        {/*  These graphs are still hard code */}

                        <Sparklines data={[5, 3, 2, 10, 12, 14, 12, 12, 20, 10, 2, 5, 12]}>
                            <SparklinesBars style={{fill: "#822ff5" }} />
                        </Sparklines>
                    </div>
                    <div className="info">Item Sold {this.state.currentUserWallet.solditems}</div>
                </div>
            </div>


        )
    }
}

export default HeaderDashboardWallet;