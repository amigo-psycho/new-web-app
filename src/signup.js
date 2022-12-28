import React, { Component, useEffect, useState } from 'react';
import "./login.css";
export default class Signup extends Component {
    state = {
        username: "",
        password: "",
        cpassword: "",
        tname: "",
        email: ""
    };

    changeHandler = e => {
        let { name, value } = e.target;
        this.setState({ [name]: value, })
    }


    SubmitHandler = e => {
        e.preventDefault();
        const username = this.state.username;
        const password = this.state.password;
        const cpassword = this.state.cpassword;
        const tname = this.state.tname;
        const email = this.state.email;

        const user = { username, password, cpassword, tname, email };

        console.log(user);
        if (password == cpassword) {
            fetch("http://localhost:4200/api/user", {
                method: 'POST', body: JSON.stringify(user), headers: {
                    "Content-type": "application/json;charset=UTF-8"
                }
            })
                .then(response => response.json())
                .then(user => {
                    alert('USER ADDED');
                    console.log(user);
                    this.setState();
                });
        }
        else
        {
            alert("error")
        }
    }
    render() {
        return (
            <div>
                <center className="login-form-main">
                    <h3 className="login-head">SIGNUP</h3>
                    <form onSubmit={this.SubmitHandler}>
                        <hr />
                        <input type="text" name="username" className="login-form username-area" placeholder="USERNAME" value={this.state.username} onChange={this.changeHandler} /><br />
                        <input type="password" name="password" className="login-form password-area" placeholder="PASSWORD" value={this.state.password} onChange={this.changeHandler} /><br />
                        <input type="password" name="cpassword" className="login-form password-area" placeholder="C PASSWORD" value={this.state.cpassword} onChange={this.changeHandler} /><br />
                        <input type="text" name="tname" className="login-form login-area" placeholder="THEATER" value={this.state.tname} onChange={this.changeHandler} /><br />
                        <input type="email" name="email" className="login-form email-area" placeholder="EMAIL" value={this.state.email} onChange={this.changeHandler} /><br />
                        <hr />
                        <input type="submit" className="login-form btn btn-dark" name="submit"></input>
                    </form>
                    <hr />
                    <div className="login-bottom">
                        <hr />
                        <span>
                            <a href='#' className="social">instagram</a>
                            <a href='#' className="social">twitter</a>
                            <a href='#' className="social">facebook</a>
                        </span>
                        <hr />
                    </div>
                </center>
                <div>
                    <h1 className="head">MOVIEVERSE</h1>
                </div>
            </div>
        );
    }
}