import React, {Component} from "react";
import {Fragment as F} from 'react';
import './styles.css'
import UsermenuProfile from "../header-usermenu-profile";
import UsermenuSettings from "../header-usermenu-settings";

class UsermenuHub extends Component {

    render() {
        let component;
        switch(this.props.show) {
            case('profile'):
                 component = <UsermenuProfile/>;
                break;
            case('settings'):
                component = <UsermenuSettings/>;
                break;
            default:
                component = <p> Could not be found</p>
        }

        return (
            <F>
                <div className="userModalBackground">
                    <div className="userModal">
                        <div className="card">
                            <div className="card-header text-right">
                                <button className="btn btn-link" onClick={this.props.hide}> X </button>
                            </div>
                            {component}
                        </div>
                    </div>
                </div>
            </F>

        )
    }
}

export default UsermenuHub;