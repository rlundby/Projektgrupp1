import React, {Component} from "react";
import {Fragment as F} from 'react';

class UsermenuProfile extends Component {

    state = {
        user: null,
        editing: null
    };

    componentDidMount() {
        let user = JSON.parse(sessionStorage.getItem('user'));
        this.setState({
            user,
            editing: {
                userid: user.userId,
                username: user.username,
                email: user.email,
                password: '123456',
                confirmedPassword: '123456'
            }
        })
    }

    handleChange = event => {
        let k = event.target.value;
        let n = event.target.name;
        switch(n) {
            case 'email':
                this.setState(prevState => ({
                    editing: {
                        ...prevState.editing,
                        email: k
                    }
                }));
                break;
            case 'username':
                this.setState(prevState => ({
                    editing: {
                        ...prevState.editing,
                        username: k
                    }
                }));
                break;
            case 'password':
                this.setState(prevState => ({
                    editing: {
                        ...prevState.editing,
                        password: k
                    }
                }));
                break;
            case 'confirmPassword':
                this.setState(prevState => ({
                    editing: {
                        ...prevState.editing,
                        confirmedPassword: k
                    }
                }));
                break;
            default:
                console.log('This should not happen');
        }
    };

    render() {
        if(!this.state.user) {
            return <p> No user found </p>
        } else {
        return (
            <F>
                <div className="container-fluid">
                    <h2 className="page-header">Edit Profile</h2>
                    <div className="row">
                        <div className="col-md-4 col-sm-6 col-xs-12">
                            <div className="text-center">
                                <img src="assets/images/users/user-4.jpg"
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
                                        <input className="form-control" type="text" name="email" value={this.state.editing.email} onChange={this.handleChange}/>
                                    </div>
                                    <div className="form-group col-lg-6">
                                        <label className="control-label">Username:</label>
                                        <input className="form-control" type="text" name="username" value={this.state.editing.username} onChange={this.handleChange}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-group col-lg-6">
                                            <label className="control-label">Change password:</label>
                                            <input className="form-control" type="password" name="password" value={this.state.editing.password} onChange={this.handleChange}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-group col-lg-6">
                                        <label className="control-label">Confirm new password:</label>
                                        <input className="form-control"  type="password" name="confirmPassword" onChange={this.handleChange}/>
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
}

export default UsermenuProfile;