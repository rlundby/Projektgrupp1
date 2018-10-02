
import React, { Component } from "react";
import HeaderDashboard from "../header-dashboard";
import HeaderNotification from "../header-notification";
import HeaderSearch from "../header-search";
import HeaderUsermenu from "../header-usermenu";
import HeaderLogo from "../header-logo";

class Header extends Component {

    state = {
        user: null,
    };


    componentDidMount() {
        this.setState({
            user: JSON.parse(sessionStorage.getItem('user')),
        })
    }


    render() {
        if(!this.state.user) {
            return <p> Please log in to access the menu</p>
        } else {

        return(
            <header id="topnav">
                <div className="topbar-main">
                    <div className="container-fluid">
                    <HeaderLogo/>
                        <div className="menu-extras topbar-custom">
                            <ul className="float-right list-unstyled mb-0 ">
                                <HeaderSearch/>
                                <HeaderNotification/>
                                <li>
                                    <a className="nav-link dropdown-toggle arrow-none waves-effect">{this.state.user.username}</a>
                                </li>
                                <HeaderUsermenu/>
                            </ul>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                </div>
                <HeaderDashboard/>
            </header>
         )
        }
    }
}

export default Header;