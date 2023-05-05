import { React, useEffect, useState } from "react";
import SearchIcon from "./Search.svg";
import MovieCard from "./MovieCrad";
import "./App.css";
// 4c1c6ebf  {api key}

// API url + API key
const API_URL = "http://www.omdbapi.com/?apikey=4c1c6ebf";

const movie1 = {
  Title: "City of God",
  Year: "2002",
  imdbID: "tt0317248",
  Type: "movie",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BOTMwYjc5ZmItYTFjZC00ZGQ3LTlkNTMtMjZiNTZlMWQzNzI5XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
};
const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setsearchTerm] = useState([]);

  const searchMoives = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };
  useEffect(() => {
    searchMoives("batman");
  }, []);
  return (
    <div className="app">
      <h1>Movie Land </h1>
      <div className="search">
        <input
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => {
            setsearchTerm(e.target.value);
          }}
        />
        <img
          src={SearchIcon}
          alt="search logo"
          onClick={() => {
            searchMoives(searchTerm);
          }}
        ></img>
      </div>
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};
export default App;
