import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
//import { Link } from "react-router-dom";
export default function HomePage() {
  const url = "https://api.themoviedb.org/3/trending/movie/day?language=en-US";
  const options = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNGI5YTc1ZDZlMzE3ZDUzNWM2MmJmZmJhNDM2N2Y1NSIsIm5iZiI6MTcyMDk0MTg5Ni4zMzQzNzMsInN1YiI6IjY2OTM3OTEzNzMwOGI1MGQ5YzljNjEyNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Z4UIT7y_V-3AMGME_gm8k9bhzRICKOU7a1qz_n_We0s",
    },
  };

  async function getTrendMovie() {
    const trendMovie = await axios.get(url, options);
    return trendMovie.data.results;
  } /*
  async function getTrendMovie() {
    const trendMovie = await axios.get(url, options);
    console.log(trendMovie.data);
    return trendMovie.data;
  }
  const [movie, setMovie] = useState(null);
  useEffect(
    () =>
      async function fetchMovie() {
        try {
          const returnedMovie = await getTrendMovie();
          setMovie(returnedMovie.results);
          console.log(returnedMovie.results[0]);
        } catch {
          console.error();
        } finally {
          console.log("the end :-)");
        }
        //fetchMovie();
      },
    []
  );
  console.log(movie !== null && movie[0]);
  function Rendering({ movie }) {
    if (movie !== null) {
      return (
        <ul>
          {movie.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      );
    } else return;
  }
  return (
    <div>
      <h1>Trending Today</h1>
      {<Rendering movie={movie} />}
    </div>
  );*/
  const [movies, setMovies] = useState();
  useEffect(() => {
    async function fetchArticles() {
      const response = await getTrendMovie();
      console.log(response);
      setMovies(response);
    }

    fetchArticles();
    //return setMovies();
  }, []);
  //console.log(movies);
  return (
    <div>
      <h1>Latest articles</h1>
      {movies && (
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>
              <Link to={movie.backdrop_path}>{movie.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
