import React, { useState } from 'react';
import { Link } from "wouter";
import "./login.css";
export default () => {

    const [data, setData] = useState
        ({
            title: "",
            poster_path: "",
            trail_path: "",
            overview: "",
            gener: "",
            vote_average: "",
            geners:""
        })
    const { title, poster_path, trail_path, overview, gener, vote_average, geners } = data;

    const changeHandler = e => {
        setData({ ...data, [e.target.name]: e.target.value });
    }
    const submitHandler = e => {
        e.preventDefault();
        console.log(data);
        console.log("THE DATA FOR OSTING" + data);

        fetch("http://localhost:4200/api/movie", {
            method: 'POST', body: JSON.stringify(data), headers: {
                "Content-type": "application/json;charset=UTF-8"
            }
        })
            .then(response => response.json())
            .then(data => {
                alert('MOVEI ADDED');
                // console.log(data);
            });
    }
    return (
        <div>
            <center className="login-form-main">
                <h3 className="login-head">ADD MOVIE</h3>
                <form onSubmit={submitHandler}>
                    <hr />
                    <input type="text" name="title" className="login-form area" placeholder="MOVIE" value={title} onChange={changeHandler} required/><br />
                    <input type="url" name="poster_path" className="login-form area" placeholder="POSTER LINK" value={poster_path} onChange={changeHandler} required/><br />
                    <input type="url" name="trail_path" className="login-form area" placeholder="TRAILER LINK" value={trail_path} onChange={changeHandler} required/><br />
                    <input type="text" name="overview" className="login-form area" placeholder="OVERVIEW" value={overview} onChange={changeHandler} required/><br />
                    <div className='select'>
                    <input type="text" name="gener" className="login-form area" placeholder="GENER" value={gener} onChange={changeHandler} required/>
                    <select name="gener" onChange={changeHandler}>
                        <option value="" selected>Select</option>
                        <option value="horror">horror</option>
                        <option value="action">action</option>
                        <option value="sci-fi">sci-fi</option>
                        <option value="comedy">comedy</option>
                        <option value="drama">drama</option>
                    </select><br />
                    </div>
                    <input type="text" name="vote_average" className="login-form area" placeholder="RATING" value={vote_average} onChange={changeHandler} required/><br />
                    <hr />
                    <input type="submit" className="login-form btn btn-dark" name="submit" />
                </form>
            </center>
            <div>
                <h1 className="head">MOVIEVERSE</h1>
            </div>
        </div>
    );
}