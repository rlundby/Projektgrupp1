import React, {Component} from "react";
import './styles.css'

class UsermenuSettings extends Component {

    render() {

        return (
            <div className="container-fluid">
                <h2 className="page-header">Settings</h2>
                <div className="row">
                    <h5 className="col-sm-12">Enable notifications</h5>
                    <div className="col-sm-12">
                        <label className="switch">
                            <input type="checkbox" defaultChecked/>
                            <span className="slider round"></span>
                        </label>
                    </div>
                </div>
                <div className="row">
                    <h5 className="col-sm-12">Allow e-mails</h5>
                    <div className="col-sm-12">
                        <label className="switch">
                            <input type="checkbox" defaultChecked/>
                            <span className="slider round"></span>
                        </label>
                    </div>
                </div>
                <div className="row">
                    <h5 className="col-sm-12">Accept personalized cookies</h5>
                    <div className="col-sm-12">
                        <label className="switch">
                            <input type="checkbox" defaultChecked/>
                            <span className="slider round"></span>
                        </label>
                    </div>
                </div>

            </div>
        )
    }
}

export default UsermenuSettings;