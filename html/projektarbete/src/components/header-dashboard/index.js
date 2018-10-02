
import React, { Component } from "react";
import HeaderDashboardWallet from "../header-dashboard-wallet";

class HeaderDashboard extends Component {

    componentDidMount() {
    }
    render() {
        return(
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="page-title-box">
                                <h4 className="page-title">Dashboard</h4>
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item active">
                                        Welcome to Lexa Dashboard
                                    </li>
                                </ol>
                                <HeaderDashboardWallet/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="navbar-custom">
                    <div className="container-fluid">
                        <div id="navigation" className="text-left">
                            <ul className="navigation-menu">
                                <li className="has-submenu">
                                    <a href="index.html">
                                        <i className="ti-dashboard"></i>
                                        <span>Dashboard</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HeaderDashboard;