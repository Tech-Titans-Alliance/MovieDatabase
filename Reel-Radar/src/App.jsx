import { useState,useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import MovieList from './MovieList';
import Header from './Header';

// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import SearchBox from './SearchBox';


const App=()=> {
  const [movies, setMovies] = useState([]);
  const [searchValue,setSearchValue]=useState('');

  const GetMovieRequest=async(searchValue)=>{
    const url=`http://www.omdbapi.com/?s=${searchValue}&apikey=c7301b93`
    const response = await fetch(url);
    const responseJson = await response.json();
    console.log(responseJson);
    if(responseJson.Search){
      setMovies(responseJson.Search);
    }
    
  };
  //for the api to fetch movies
  useEffect(()=>{
    GetMovieRequest(searchValue);
  },[searchValue]);

  return (
    <>
     
    <div className='container-fluid'>
       
      {/* <div className='row d-flex align-items-center mt-4 mb-4'>
        <Header/>
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}/>
        <Header/>
      </div> */}

      <Header searchValue={searchValue} setSearchValue={setSearchValue} />
      
     <div className='row'>
      <MovieList movies={movies}/>
    </div> 
        
    </div>

      
    </>
  )
}

export default App
