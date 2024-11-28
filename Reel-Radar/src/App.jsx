import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MovieList from "./MovieList";
import Header from "./Header";
import Footer from "./components/Footer";
import AddFavourite from "./Favourites";
import RemoveFavourites from "./RemoveFavourites";
import "./App.css";

const App = () => {
    const [movies, setMovies] = useState([]);
    const [favourites, setFavourites] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const [selectedMovie, setSelectedMovie] = useState(null); // State for selected movie

    const GetMovieRequest = async (searchValue) => {
        const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=c7301b93`;
        try {
          const response = await fetch(url);
          const responseJson = await response.json();

            if (responseJson.Search) {
                setMovies(responseJson.Search);
            } else {
                const latestUrl = `http://www.omdbapi.com/?s=Teen Titans&apikey=c7301b93`;
                const latestResponse = await fetch(latestUrl);
                const latestResponseJson = await latestResponse.json();
                if (latestResponseJson.Search) {
                    setMovies(latestResponseJson.Search);
                }
            }
        } catch (error) {
            console.error("Error fetching movies:", error);
        }
    };

    useEffect(() => {
        GetMovieRequest(searchValue);
    }, [searchValue]);

    useEffect(() => {
        const movieFavourites = JSON.parse(localStorage.getItem("localfavourites"));
        setFavourites(movieFavourites);
    }, []);

    const saveToLocalStorage = (items) => {
        localStorage.setItem("localfavourites", JSON.stringify(items));
    };

    const addFavouriteMovie = (movie) => {
        const newFavouriteList = [...(favourites || []), movie];
        setFavourites(newFavouriteList);
        saveToLocalStorage(newFavouriteList);
    };

    const removeFavouriteMovie = (movie) => {
        const newFavouriteList = favourites.filter(
            (favourite) => favourite.imdbID !== movie.imdbID
        );
        setFavourites(newFavouriteList);
        saveToLocalStorage(newFavouriteList);
    };

    // Handle when a movie card is clicked
    const handleCardClick = async (movie) => {
      const url = `http://www.omdbapi.com/?i=${movie.imdbID}&apikey=c7301b93`;
      const response = await fetch(url);
      const responseJson = await response.json();
      console.log(responseJson)
        setSelectedMovie(responseJson);
        
    };

    // Handle going back to the movie list
    const handleBackToList = () => {
        setSelectedMovie(null);
    };

    return (
        <div className="container-fluid">
            {/* Header with SearchBox */}
            <Header searchValue={searchValue} setSearchValue={setSearchValue} />

            {selectedMovie ? (
                // Show Movie Details
                <div className="movie-details text-white">
                    <button className="btn btn-light mb-3" onClick={handleBackToList}>
                        Back to Movie List
                    </button>
                    <div className="row">
                        <div className="col-md-6">
                            <img
                                src={selectedMovie.Poster}
                                alt={selectedMovie.Title}
                                className="img-fluid"
                                style={{ border: "2px solid red" }}
                            />
                        </div>
                        <div className="col-md-6">
                            <h2 style={{ color: "red" }}>{selectedMovie.Title}</h2>
                            <p><strong>Year:</strong> {selectedMovie.Year}</p>
                            <p><strong>Actors:</strong> {selectedMovie.Actors}</p>
                            <p><strong>Awards:</strong> {selectedMovie.Awards}</p>
                            <p><strong>Genre:</strong> {selectedMovie.Genre}</p>
                            <p><strong>Runtime:</strong> {selectedMovie.Runtime}</p>
                            <p><strong>Rating:</strong> {selectedMovie.imdbRating}</p>
                            <p><strong>Language:</strong> {selectedMovie.Language}</p>
                           
                          
                        </div>
                    </div>
                </div>
            ) : (
                // Show Movie List
                <>
                    {/* Movie List */}
                    <div className="row">
                        <MovieList
                            movies={movies}
                            handleCardClick={handleCardClick}
                            handleFavouritesClick={addFavouriteMovie}
                            favouriteComponent={AddFavourite}
                        />
                    </div>

                    {/* Favourites */}
                    <div className="row d-flex align-items-center mt-4 mb-2">
                        <h1>Favourites</h1>
                    </div>
                    <div className="row">
                        <MovieList
                            movies={favourites}
                            handleCardClick={handleCardClick}
                            handleFavouritesClick={removeFavouriteMovie}
                            favouriteComponent={RemoveFavourites}
                        />
                    </div>
                </>
            )}

            <Footer />
        </div>
    );
};

export default App;
