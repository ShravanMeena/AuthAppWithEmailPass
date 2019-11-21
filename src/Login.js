import React, { Component } from 'react'

import fire from './config/Fire'
    
export class Login extends Component {
    constructor(props) {
        super(props);       
        this.state = {
            email: "",
            password: ""    
        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name] : e.target.value });
    }

//Login Func    
    login = (e) => {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
        }).catch((error) => {
            console.log(error);
            window.alert("Something Went Wrong");
        });
    }

//register Func    
    signup = (e) => {
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).catch((error) => {
            window.alert("Something Went Wrong");
            console.log(error);
        });
    }


        render() {
            return (
                <div className="container mt-5">
                    <form>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input name="email" value={this.state.email} type="email" onChange={this.handleChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input name="password" type="password" value={this.state.password} onChange={this.handleChange} className="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <button type="submit" onClick={this.login} className="btn btn-primary">Login</button>
                    <button type="submit" onClick={this.signup} style={{marginLeft: "25px"}} className="btn btn-success">Register</button>
                    </form>                    
                </div>
            )
        }
    }
    
    export default Login
    