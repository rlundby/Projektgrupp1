
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

                        <Sparklines data={[0, this.state.currentUserWallet.solditems, this.state.currentUserWallet.balance]}>
                            <SparklinesBars style={{ fill: "#40c0f5" }} />
                        </Sparklines>
                    </div>
                    <div className="info"> Item Sold, Balance in $</div>
                </div>
            </div>


        )
    }
}

export default HeaderDashboardWallet;