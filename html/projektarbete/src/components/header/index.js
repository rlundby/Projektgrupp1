
import React, { Component } from "react";
import HeaderDashboard from "../header-dashboard";
import HeaderNotification from "../header-notification";
import HeaderSearch from "../header-search";
import HeaderUsermenu from "../header-usermenu";
import HeaderLogo from "../header-logo";

class Header extends Component {


    render() {
        return(
            <header id="topnav">
                <div className="topbar-main">
                    <div className="container-fluid">
                    <HeaderLogo/>
                        <div className="menu-extras topbar-custom">
                            <ul className="float-right list-unstyled mb-0 ">
                                <HeaderSearch/>
                                <HeaderNotification/>
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

export default Header;