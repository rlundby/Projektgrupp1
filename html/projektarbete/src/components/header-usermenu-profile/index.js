import React, {Component} from "react";
import {Fragment as F} from 'react';

class UsermenuProfile extends Component {

    render() {

        return (
            <F>
                <div className="container-fluid">
                    <h2 className="page-header">Edit Profile</h2>
                    <div className="row">
                        <div className="col-md-4 col-sm-6 col-xs-12">
                            <div className="text-center">
                                <img src="http://lorempixel.com/200/200/people/9/"
                                     className="avatar img-circle img-thumbnail" alt="avatar"/>
                                    <h6>Upload a different photo...</h6>
                                    <input type="file" className="text-center center-block well well-sm"/>
                            </div>
                        </div>
                        <div className="col-md-8 col-sm-6 col-xs-12 personal-info">
                            <h3>Personal info</h3>
                            <form className="form-horizontal">
                                <div className="row">
                                    <div className="form-group col-lg-6">
                                        <label className="control-label">Email:</label>
                                        <input className="form-control" type="text"/>
                                    </div>
                                    <div className="form-group col-lg-6">
                                        <label className="control-label">Username:</label>
                                        <input className="form-control" type="text"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-group col-lg-6">
                                            <label className="control-label">Password:</label>
                                            <input className="form-control"  type="password"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-group col-lg-6">
                                        <label className="control-label">Confirm password:</label>
                                        <input className="form-control"  type="password"/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="control-label"></label>
                                    <div className="col-md-8">
                                        <input className="btn btn-primary mr-3" value="Save Changes" type="button"/>
                                        <input className="btn btn-default" value="Cancel" type="reset"/>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </F>

        )
    }
}

export default UsermenuProfile;