import { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import MovieList from './MovieList';
import Header from './Header';
import './App.css';
import Footer from './components/Footer'


const App = () => {
    const [movies, setMovies] = useState([]);
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

    return (
        <div className='container-fluid'>
            {/* Header with SearchBox */}
            <Header searchValue={searchValue} setSearchValue={setSearchValue} />
            
            {/* Movie List */}
            <div className='row'>
                <MovieList movies={movies} />
            </div>
        </div>
    );
};

export default App;
