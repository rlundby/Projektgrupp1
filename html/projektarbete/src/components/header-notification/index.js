import React, {Component} from "react";
import {Fragment as F} from "react";

class HeaderNotification extends Component {

    handleSignOut = () => {
        sessionStorage.removeItem('auth')
    };

    render() {

        let linkURL = "http://localhost:3000";

        return (
            <F>
                <li className="dropdown notification-list">
                    <a className="nav-link dropdown-toggle arrow-none waves-effect"
                       data-toggle="dropdown" href={linkURL} role="button" aria-haspopup="false"
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
                           data-toggle="dropdown" href={linkURL} role="button" aria-haspopup="false"
                           aria-expanded="false">
                            <img src="assets/images/users/user-4.jpg" alt="user"
                                 className="rounded-circle"/>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right profile-dropdown ">

                            <a className="dropdown-item" href={linkURL} ><i
                                className="mdi mdi-account-circle m-r-5"></i> Profile</a>
                            <a className="dropdown-item" href={linkURL} ><i
                                className="mdi mdi-wallet m-r-5"></i> My Wallet</a>
                            <a className="dropdown-item d-block" href={linkURL} ><span
                                className="badge badge-success float-right">11</span><i
                                className="mdi mdi-settings m-r-5"></i> Settings</a>
                            <a className="dropdown-item" href={linkURL} ><i
                                className="mdi mdi-lock-open-outline m-r-5"></i> Lock screen</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item text-danger" onClick={this.handleSignOut} href={linkURL} ><i
                                className="mdi mdi-power text-danger"></i> Logout</a>
                        </div>
                    </div>
                </li>
            </F>
        )
    }
}

export default HeaderNotification;