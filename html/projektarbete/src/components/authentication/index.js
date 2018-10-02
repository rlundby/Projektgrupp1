import React from 'react';
import {Redirect} from 'react-router-dom';
import './login.css';

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {username: '', email: '', password: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSignUpSubmit = this.handleSignUpSubmit.bind(this);
        this.handleSignInSubmit = this.handleSignInSubmit.bind(this);
    }


    handleSignInSubmit(event) {
        event.preventDefault();


        fetch('http://localhost:3001/api/signin',
            {
                method: 'POST',
                headers: {
                    'Accept': 'Application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({username: this.state.username, password: this.state.password})
            })
            .then(response => response.json())
            .then((user) => {
                if (!user.token) {
                    return document.getElementById('message').innerText = user.message
                } else if (user.token) {
                    sessionStorage.setItem('user', JSON.stringify(user));
                    sessionStorage.setItem('auth', JSON.stringify(user.token));
                    this.setState({username: '', password: ''});
                }
            })
            .catch(err => console.log('err', err))

    }


    handleSignUpSubmit(event) {
        event.preventDefault();

        fetch('http://localhost:3001/api/signup',
            {
                method: 'POST',
                headers: {
                    'Accept': 'Application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: this.state.username,
                    email: this.state.email,
                    password: this.state.password
                })
            })
            .then(response => response.json())
            .then((result) => {
                this.setState({username: '', email: '', password: ''});
                document.getElementById('userWasCreated').innerText = result.message;
            })
            .catch(err => console.log('err', err))

    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    render() {
        let auth = sessionStorage.getItem('auth');
        if (auth) {
            return <Redirect to="/"/>
        }

        return (
            <div id='body' className='justify-content-center'>
                <div id='formContainer' className='loginContainer d-inline-flex flex-column justify-content-center'>
                    <img src='assets/images/logo.png' alt="logo" className='logo-small w-50 mb-3'/>
                    <ul className='nav nav-tabs'>
                        <li className='nav-item'><a className='nav-link active' data-toggle="tab" href="#signup">Sign
                            Up </a></li>
                        <li className='nav-item'><a className='nav-link' data-toggle="tab" href="#signin">Sign In </a>
                        </li>
                    </ul>

                    <div className='tab-content justify-content-center mt-3'>
                        <form className='tab-pane active justify-content-center' id='signup'>
                            <div className="form-group">
                                <label htmlFor="email">Email address</label>
                                <input type="email" className="form-control" name="email"
                                       placeholder="name@example.com" value={this.state.email}
                                       onChange={this.handleChange}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <input type="text" className="form-control" value={this.state.username} name="username"
                                       onChange={this.handleChange}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Choose Password</label>
                                <input type="password" className="form-control" value={this.state.password}
                                       name="password" onChange={this.handleChange}/>
                            </div>
                            <button type="button" onClick={this.handleSignUpSubmit} className='btn btn-primary'>Sign
                                Up
                            </button>
                            <p id='userWasCreated'></p>
                        </form>

                        <form className='tab-pane' id='signin'>
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <input type="text" className="form-control" name="username"
                                       onChange={this.handleChange}/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" className="form-control" name="password"
                                       onChange={this.handleChange}/>
                            </div>
                            <button type="button" onClick={this.handleSignInSubmit} className='btn btn-primary'>Sign
                                In
                            </button>
                            <p id='message'></p>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;