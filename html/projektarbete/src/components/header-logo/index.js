import React, {Component} from "react";

class HeaderLogo extends Component {


    render() {
        return (
            <div className="logo">

                <a href="index.html" className="logo">
                    <img src="assets/images/logo-sm.png" alt="" className="logo-small"/>
                    <img src="assets/images/logo.png" alt="" className="logo-large"/>
                </a>

            </div>
        )
    }
}

export default HeaderLogo;