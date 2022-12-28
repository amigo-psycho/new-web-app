import "bootstrap/dist/css/bootstrap.css";
import { Link, Route } from "wouter";
import Demo from "./demo";
export default ({ movie, deleteById }) => {
    let poster = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
    return (
        <div>
            <div className="movieRow">
                <div className="movieRow--listarea">
                    <div className="movieRow--list" >
                        <div className="movieRow--item">
                            <img className="ming" src={poster} alt={movie.title} />
                        </div>
                    </div>
                    <button className="btn btns btn-dark" onClick={() => { deleteById(movie.id) }}>DELETE</button>
                </div>
            </div>
        </div>
    )
}