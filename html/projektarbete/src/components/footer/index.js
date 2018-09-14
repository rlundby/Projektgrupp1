
import React, { Component } from "react";

class Footer extends Component {


    render() {
        return(
            <footer className="footer">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            © 2018 Lexa - <span className="d-none d-sm-inline-block"> by EPN Sverige AB</span>.
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;