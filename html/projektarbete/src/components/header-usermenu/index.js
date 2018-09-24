import React, {Component} from "react";
import {Fragment as F} from 'react';
import UsermenuHub from "../header-usermenu-hub";

class HeaderUsermenu extends Component {

    state = {
        menuitem: '',
        show: false
    };

    menuClick(name) {
        this.setState({
            menuitem: name,
            show: true
        })
    };

    hideMenu = () => {
        this.setState({
            show: false
        })
    };

    handleSignOut = () => {
        sessionStorage.removeItem('auth')
    };

    render() {

        let linkURL = "http://localhost:3000";

        return (
            <F>
                <li className="menu-item">
                    <a className="navbar-toggle nav-link" id="mobileToggle">
                        <div className="lines">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </a>
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

                            <button className="dropdown-item" onClick={() => this.menuClick('profile')}><i
                                className="mdi mdi-account-circle m-r-5"></i> Profile</button>
                            <button className="dropdown-item" href={linkURL} onClick={() => this.menuClick('wallet')}><i
                                className="mdi mdi-wallet m-r-5"></i> My Wallet</button>
                            <button className="dropdown-item d-block" href={linkURL} onClick={() => this.menuClick('settings')}><i
                                className="mdi mdi-settings m-r-5"></i> Settings</button>
                            <div className="dropdown-divider"></div>
                            <a href={linkURL} className="dropdown-item text-danger" onClick={this.handleSignOut}><i
                                className="mdi mdi-power text-danger"></i> Logout</a>
                        </div>
                    </div>
                </li>
                {this.state.show  ? <UsermenuHub hide={this.hideMenu} show={this.state.menuitem}/> : null }
            </F>

        )
    }
}

export default HeaderUsermenu;