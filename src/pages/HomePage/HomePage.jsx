//import axios from "axios";
import { useEffect, useState } from "react";
//import { Link, useSearchParams } from "react-router-dom";
import getTrendMovie from "../../request-function.js";
import MovieList from "../../components/MovieList/MovieList.jsx";
import css from "./HomePage.module.css";

export default function HomePage() {
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
