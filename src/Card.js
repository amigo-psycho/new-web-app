import "bootstrap/dist/css/bootstrap.css";
import { Link, Route } from "wouter";
import "./Card.css";
import Demo from "./demo";
export default ({ movie, deleteById }) => {
    let poster = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
    return (
        <div>
            <div className="movieRow">
                <div className="mtitle">
                    <h2 >{movie.title}</h2>
                </div>
                <div className="movieRow--listarea">
                    <div className="movieRow--list" >
                        <div className="movieRow--item">
                            <img className="ming" src={poster} alt={movie.title} />
                        </div>
                    </div>
                    <div>
                        <button className="btn btns btn-dark" onClick={() => { deleteById(movie.id) }}>DELETE</button>
                        <Link href="/tick"><button className="btn btn-dark">TICKET</button></Link>
                    </div>
                </div>
                <Demo title ={movie.title}/>
                <Route path="/tick"><Demo title ={movie.title}/></Route>

            </div>

        </div>
    )
}