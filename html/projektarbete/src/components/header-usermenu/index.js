import React, {Component} from "react";

class HeaderUsermenu extends Component {


    render() {
        return (
            <li className="menu-item">
                <a className="navbar-toggle nav-link" id="mobileToggle">
                    <div className="lines">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </a>
            </li>
        )
    }
}

export default HeaderUsermenu;