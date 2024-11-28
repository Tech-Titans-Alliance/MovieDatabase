import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./MovieList.css";

const MovieList = (props) => {
    const FavouriteComponent = props.favouriteComponent;

    return (
        <div className="row">
            {props.movies?.map((movie, index) => (
                <div
                    className="col-sm-3 mb-4"
                    key={index}
                    onClick={() => props.handleCardClick(movie)} // Handle card click
                    style={{ cursor: "pointer" }} // Add pointer cursor
                >
                    <div className="card h-100">
                        <img
                            src={movie.Poster}
                            alt={movie.Title}
                            className="card-img-top"
                            style={{ height: "300px", objectFit: "cover" }}
                        />
                        <div className="card-body">
                            <h5 className="card-title">{movie.Title}</h5>
                            <p className="card-text">Year: {movie.Year}</p>
                            <p className="card-text">Information: {movie.imdbID}</p>
                            <div
                                onClick={(e) => {
                                    e.stopPropagation(); // Prevent event bubbling
                                    props.handleFavouritesClick(movie);
                                }}
                                style={{ position: "absolute", bottom: "10px", right: "10px" }}
                            >
                                <FavouriteComponent />
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MovieList;
