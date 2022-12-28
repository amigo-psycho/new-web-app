import React, { useState } from 'react';
import { Link } from "wouter";
import "./login.css";
import PropTypes from 'prop-types';

async function loginUser(credentials) {
    return fetch('http://localhost:8066/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(data => data.json()).then(console.log(credentials))
}

export default function Login({ setToken }) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
            username,
            password
        });
        setToken(token);
    }
    return (
        <div>
            <center className="login-form-main">
                <h3 className="login-head">LOGIN</h3>
                <form onSubmit={handleSubmit}>
                    <hr />
                    <input type="text" name="username" className="login-form username-area" placeholder="USERNAME" onChange={e => setUserName(e.target.value)} /><br />
                    <input type="password" name="password" className="login-form password-area" placeholder="PASSWORD" onChange={e => setPassword(e.target.value)} /><br />
                    <hr />
                    <input type="submit" className="login-form btn btn-dark" name="submit" />
                </form>
                <hr />
                <div className="login-bottom">
                    <div>
                        <span className='msg'>Don't have a account!<Link className="btn btn-dark" href="/Admin/signup"><>SIGNUP</></Link></span>
                    </div>
                    <hr />
                </div>
            </center>
            <div>
                <h1 className="head">MOVIEVERSE</h1>
            </div>
        </div>
    );
}
Login.propTypes = {
    setToken: PropTypes.func.isRequired
};