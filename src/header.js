import React from "react";
import { Link, Route } from "wouter";
import "bootstrap/dist/css/bootstrap.css";
import "./header.css";
import logo from "./images/LOGO.png";
export default () => {
    return (
        <div className="header-main">
            <span className="navbar">
            <Link href="/Admin/Home"><a href="#" ><img src={logo} alt="MOVIEVERSE" className="logo" /></a></Link>
                <span className="navbar-end fixed">
                    <span className="navbar-brand "><Link href="/Admin/Add"><button className="btn btn-dark">ADD</button></Link></span>
                    <span className="navbar-brand "><Link href="/tick"><button className="btn btn-dark">TICKET</button></Link></span>
                </span>
            </span>

        </div>
    )
}