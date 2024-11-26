import { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import MovieList from './MovieList';
import Header from './Header';
import Footer from './components/Footer';
import './App.css';
import SearchBox from './SearchBox';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const GetMovieRequest = async (searchValue) => {
    // Replace with your desired API URL for fetching movies (this link is just an example)
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=c7301b93`; // Make sure this is replaced with the correct one
    const response = await fetch(url);
    const responseJson = await response.json();
    console.log(responseJson);
    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  // Fetch movies when the search value changes
  useEffect(() => {
    if (searchValue) {
      GetMovieRequest(searchValue);
    }
  }, [searchValue]);

  return (
    <>
      <div className='container-fluid'>
        {/* Place Header on top with search functionality */}
        <Header searchValue={searchValue} setSearchValue={setSearchValue} />

        <div className="row">
          {/* Render Movie List */}
          <MovieList movies={movies} />
        </div>

        {/* Render Footer */}
        <Footer />
      </div>
    </>
  );
}

export default App;
