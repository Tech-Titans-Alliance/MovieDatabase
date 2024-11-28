//Don't change anything in the app file without communicating to Xolani


import { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import MovieList from './MovieList';
import Header from './Header';
import './App.css';
import Footer from './components/Footer'
import AddFavourite from './Favourites';
import RemoveFavourites from './RemoveFavourites';
const App = () => {
    const [movies, setMovies] = useState([]);
    const [favourites, setFavourites] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    const GetMovieRequest = async (searchValue) => {
        const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=c7301b93`;
        // try {
        //     const response = await fetch(url);
        //     const responseJson = await response.json();
        //     if (responseJson.Search) {
        //         setMovies(responseJson.Search);
        //     }
        // } catch (error) {
        //     console.error('Error fetching movies:', error);
        // }


        try {
          const response = await fetch(url);
          const responseJson = await response.json();
    
          if (responseJson.Search) {
            setMovies(responseJson.Search);
            console.log(responseJson.Search)
          } else {
            // Default to fetching latest movies if no search results
            const latestUrl = `http://www.omdbapi.com/?s=Teen Titans&apikey=c7301b93`;
            const latestResponse = await fetch(latestUrl);
            const latestResponseJson = await latestResponse.json();
            if (latestResponseJson.Search) {
              setMovies(latestResponseJson.Search);
            } else {
              console.error("No movies found, even for latest!");
            }
          }
        } catch (error) {
          console.error("Error fetching movies:", error);
        }
    };

    // Fetch movies when `searchValue` changes
    useEffect(() => {
        GetMovieRequest(searchValue);
    }, [searchValue]);

    useEffect(() => {
      const movieFavourites = JSON.parse(localStorage.getItem('localfavourites'))
      setFavourites(movieFavourites);
    }, []);

    const saveToLocalStorage= (items)=>{
      localStorage.setItem('localfavourites',JSON.stringify(items))
      
    }

    //add to favourites 
    const addFavouriteMovie=(movie)=>{
      const newFavouriteList = [...favourites,movie]
      setFavourites(newFavouriteList);
      saveToLocalStorage(newFavouriteList);
    }

    const removeFavouriteMovie= (movie)=>{
      const newFavouriteList=favourites.filter((favourite)=>favourite.imdbID !== movie.imdbID);
      setFavourites(newFavouriteList);
      saveToLocalStorage(newFavouriteList);
    }

    return (

        <div className='container-fluid'>
            {/* Header with SearchBox */}
            <Header searchValue={searchValue} setSearchValue={setSearchValue} />
            
            {/* Movie List */}
            <div className='row'>
                <MovieList movies={movies} handleFavouritesClick={addFavouriteMovie} favouriteComponent={AddFavourite} />
            </div>

            {/* the favourites  */}
            <div className='row d-flex align-items-center mt-4 mb-2'>
              <h1>Favourites</h1>
            </div>
            <div className='row'>
                <MovieList movies={favourites} handleFavouritesClick={removeFavouriteMovie} favouriteComponent={RemoveFavourites} />
            </div>

            {/* Footer with Links */}
            <Footer/>
        </div>
        
    );
};

export default App;
