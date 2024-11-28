
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './MovieList.css';
const MovieList = (props) => {
    return (
       <div className="row-container">
         <div className="row">
            {props.movies.map((movie, index) => (
                <div className="col-sm-3 mb-4 " key={index}>
                    <div className="card h-100">
                        <img
                            src={movie.Poster}
                            alt={movie.Title}
                            className="card-img-top"
                            style={{ height: "300px", objectFit: "cover" }}
                        />
                        <div className="Hcard">
                        <div className="card-body">
                            <h5 className="card-title">{movie.Title}</h5>
                            <p className="card-text">Year: {movie.Year}</p>
                        </div>
                        </div>
                    </div>
                </div>
            ))}
         </div>
       </div>
    );
};

export default MovieList;
