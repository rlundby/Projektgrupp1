
import React, { Component } from "react";

class Header extends Component {


    render() {
        return(
            <header id="topnav">
                <div className="topbar-main">
                    <div className="container-fluid">

                        <div className="logo">

                            <a href="index.html" className="logo">
                                <img src="assets/images/logo-sm.png" alt="" className="logo-small"/>
                                <img src="assets/images/logo.png" alt="" className="logo-large"/>
                            </a>

                        </div>


                        <div className="menu-extras topbar-custom">

                            <ul className="float-right list-unstyled mb-0 ">

                                <li className="dropdown notification-list d-none d-sm-block">
                                    <form role="search" className="app-search">
                                        <div className="form-group mb-0">
                                            <input type="text" className="form-control" placeholder="Search.."/>
                                                <button type="submit"><i className="fa fa-search"></i></button>
                                        </div>
                                    </form>
                                </li>

                                <li className="dropdown notification-list">
                                    <a className="nav-link dropdown-toggle arrow-none waves-effect"
                                       data-toggle="dropdown" href="#" role="button" aria-haspopup="false"
                                       aria-expanded="false">
                                        <i className="ti-bell noti-icon"></i>
                                        <span className="badge badge-pill badge-danger noti-icon-badge">3</span>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right dropdown-menu-lg">

                                        <h6 className="dropdown-item-text">
                                            Notifications (258)
                                        </h6>
                                        <div className="slimscroll notification-item-list">

                                            <a href="javascript:void(0);" className="dropdown-item notify-item active">
                                                <div className="notify-icon bg-success"><i
                                                    className="mdi mdi-cart-outline"></i></div>
                                                <p className="notify-details">Your order is placed<span
                                                    className="text-muted">Dummy text of the printing and typesetting industry.</span>
                                                </p>
                                            </a>

                                            <a href="javascript:void(0);" className="dropdown-item notify-item">
                                                <div className="notify-icon bg-warning"><i
                                                    className="mdi mdi-message"></i></div>
                                                <p className="notify-details">New Message received<span
                                                    className="text-muted">You have 87 unread messages</span></p>
                                            </a>

                                            <a href="javascript:void(0);" className="dropdown-item notify-item">
                                                <div className="notify-icon bg-info"><i className="mdi mdi-martini"></i>
                                                </div>
                                                <p className="notify-details">Your item is shipped<span
                                                    className="text-muted">It is a long established fact that a reader will</span>
                                                </p>
                                            </a>

                                            <a href="javascript:void(0);" className="dropdown-item notify-item">
                                                <div className="notify-icon bg-primary"><i
                                                    className="mdi mdi-cart-outline"></i></div>
                                                <p className="notify-details">Your order is placed<span
                                                    className="text-muted">Dummy text of the printing and typesetting industry.</span>
                                                </p>
                                            </a>

                                            <a href="javascript:void(0);" className="dropdown-item notify-item">
                                                <div className="notify-icon bg-danger"><i
                                                    className="mdi mdi-message"></i></div>
                                                <p className="notify-details">New Message received<span
                                                    className="text-muted">You have 87 unread messages</span></p>
                                            </a>
                                        </div>

                                        <a href="javascript:void(0);"
                                           className="dropdown-item text-center text-primary">
                                            View all <i className="fi-arrow-right"></i>
                                        </a>
                                    </div>
                                </li>
                                <li className="dropdown notification-list">
                                    <div className="dropdown notification-list nav-pro-img">
                                        <a className="dropdown-toggle nav-link arrow-none waves-effect nav-user"
                                           data-toggle="dropdown" href="#" role="button" aria-haspopup="false"
                                           aria-expanded="false">
                                            <img src="assets/images/users/user-4.jpg" alt="user"
                                                 className="rounded-circle"/>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-right profile-dropdown ">

                                            <a className="dropdown-item" href="#"><i
                                                className="mdi mdi-account-circle m-r-5"></i> Profile</a>
                                            <a className="dropdown-item" href="#"><i
                                                className="mdi mdi-wallet m-r-5"></i> My Wallet</a>
                                            <a className="dropdown-item d-block" href="#"><span
                                                className="badge badge-success float-right">11</span><i
                                                className="mdi mdi-settings m-r-5"></i> Settings</a>
                                            <a className="dropdown-item" href="#"><i
                                                className="mdi mdi-lock-open-outline m-r-5"></i> Lock screen</a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item text-danger" href="#"><i
                                                className="mdi mdi-power text-danger"></i> Logout</a>
                                        </div>
                                    </div>
                                </li>
                                <li className="menu-item">
                                    <a className="navbar-toggle nav-link" id="mobileToggle">
                                        <div className="lines">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="clearfix"></div>

                    </div>
                </div>


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
                                        <div id="header-chart-1"></div>
                                        <div className="info">Balance $ 2,317</div>
                                    </div>
                                    <div className="state-graph">
                                        <div id="header-chart-2"></div>
                                        <div className="info">Item Sold 1230</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="navbar-custom">
                    <div className="container-fluid">
                        <div id="navigation">
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
            </header>
        )
    }
}

export default Header;