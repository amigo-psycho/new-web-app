import React, { Component } from "react";
import './login.css';
import Card from "./Card";

class Preview extends Component {

    state = {
        movie: [],
    }
    refrsh = async () => {
        try {
            let response = await fetch("http://localhost:4200/api/movie");
            let data = await response.json();
            this.setState({ movie: data });
        } catch (err) {
            console.loq(err);
        }
    }
    componentDidMount() {
        this.refrsh();
    }
    deleteById = (id) => {
        fetch("http://localhost:4200/api/movie/" + id, {
            method: "DELETE"
        })
            .then(response => response.json())
            .then((data) => {
                alert("RECORD DELETED FOR ID : " + id);
                this.refrsh();
            });
    }
    render() {
        return (
            <div>
                <div className="movieRows">
                    {this.state.movie.map(c => <Card key={c.id} movie={c} deleteById={this.deleteById} />)}
                </div>
                <h1 className="head">MOVIEVERSE</h1>
            </div>
        )
    }
}
export default Preview