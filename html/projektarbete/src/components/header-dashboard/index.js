
import React, { Component } from "react";
import {Sparklines, SparklinesBars} from "react-sparklines";

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
                                <div className="state-information">
                                    <div className="state-graph">
                                        <div className="testingstuff">
                                            {/*  These graphs are still hard code */}

                                            <Sparklines data={[5, 3, 2, 10, 12, 14, 12, 12, 20, 10, 2, 5, 12]}>
                                                <SparklinesBars style={{ fill: "#40c0f5" }} />
                                            </Sparklines>
                                        </div>
                                        <div className="info">Balance $ 2,317</div>
                                    </div>
                                    <div className="state-graph">
                                        <div className="testingstuff">
                                            {/*  These graphs are still hard code */}

                                            <Sparklines data={[5, 3, 2, 10, 12, 14, 12, 12, 20, 10, 2, 5, 12]}>
                                                <SparklinesBars style={{fill: "#822ff5" }} />
                                            </Sparklines>
                                        </div>
                                        <div className="info">Item Sold 1230</div>
                                    </div>
                                </div>
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