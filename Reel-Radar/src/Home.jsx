


// Define your search value
const searchValue = "avengers"; // Replace "latest" with your desired search term
const apiKey = "c7301b93";
const apiUrl = `http://www.omdbapi.com/?s=${searchValue}&apikey=${apiKey}`;


// Fetch data from the API
fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    if (data.Response === "True") {
      const movies = data.Search;
      // Loop through the results and display them
      for (let i = 0; i < movies.length; i++) {
        <div>
            
        </div>
        console.log(`Title: ${movies[i].Title}`);
        console.log(`Year: ${movies[i].Year}`);
        console.log(`Type: ${movies[i].Type}`);
        console.log(`Poster: ${movies[i].Poster}`);
        console.log('-------------------------');
      }
    } else {
      console.log("No results found:", data.Error);
    }
  })
  .catch(error => console.error("Error fetching data:", error));

  export default 