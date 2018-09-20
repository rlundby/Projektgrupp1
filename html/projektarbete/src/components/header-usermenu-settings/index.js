import React, {Component} from "react";
import './styles.css'

class UsermenuSettings extends Component {

    render() {

        return (
            <div className="container-fluid">
                <h2 className="page-header">Settings</h2>
                <label className="switch">
                    <input type="checkbox" checked/>
                        <span className="slider round"></span>
                </label>
            </div>
        )
    }
}

export default UsermenuSettings;