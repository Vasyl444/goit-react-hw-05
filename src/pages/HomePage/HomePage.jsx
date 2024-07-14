//import axios from "axios";
import { useEffect, useState } from "react";
//import { Link, useSearchParams } from "react-router-dom";
import getTrendMovie from "../../request-function.js";
import MovieList from "../../components/MovieList/MovieList.jsx";
import css from "./HomePage.module.css";

export default function HomePage() {
  /*const url = "https://api.themoviedb.org/3/trending/movie/day?language=en-US";
  const options = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNGI5YTc1ZDZlMzE3ZDUzNWM2MmJmZmJhNDM2N2Y1NSIsIm5iZiI6MTcyMDk0MTg5Ni4zMzQzNzMsInN1YiI6IjY2OTM3OTEzNzMwOGI1MGQ5YzljNjEyNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Z4UIT7y_V-3AMGME_gm8k9bhzRICKOU7a1qz_n_We0s",
    },
  };*/

  /*async function getTrendMovie() {
    const trendMovie = await axios.get(url, options);
    return trendMovie.data.results;
  }*/
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchMovies() {
      try {
        const response = await getTrendMovie(
          "/trending/movie/day?language=en-US"
        );
        setMovies(response.results);
      } catch {
        console.error();
      }
    }
    fetchMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className={css.homePageContainer}>
      <h1>Trending Today</h1>
      <MovieList movies={movies} />
    </div>
  );
}
