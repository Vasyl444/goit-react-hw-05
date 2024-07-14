/* eslint-disable react-hooks/exhaustive-deps */
import css from "./MovieDetailsPage.module.css";
import { useEffect, useState } from "react";
import getTrendMovie from "../../request-function.js";
import { useParams } from "react-router-dom";

export default function MovieDetailsPage() {
  const movieId = useParams().moviId;
  const [movieDetails, setMovieDetails] = useState([]);
  useEffect(() => {
    async function fetchMovie() {
      try {
        const movieResult = await getTrendMovie(
          `/movie/${movieId}?language=en-US`
        );
        setMovieDetails(movieResult);
        console.log(movieResult);
      } catch {
        console.error();
      }
    }
    fetchMovie();
  }, []);

  const { poster_path, title, release_date, genres, overview } = movieDetails;

  return (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
        alt={title}
        className={css.movieCard}
      />
      <h2 className={css.movieTitle}>
        {movieDetails.title} ({Number.parseInt(release_date)} )
      </h2>
      <div className={css.detailsConteiner}>
        <h3>Overview</h3>
        <p>{overview}</p>
      </div>
      {genres !== undefined && (
        <div className={css.detailsConteiner}>
          <h3 className={css.movieDetailss}>Genres</h3>
          <ul>
            {genres.map((genre, index) => (
              <li key={index}>
                <p className={css.movieText}>{genre.name}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
