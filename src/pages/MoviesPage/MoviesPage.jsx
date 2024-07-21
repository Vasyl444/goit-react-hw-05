import { useEffect, useState } from "react";
import getTrendMovie from "../../request-function.js";
import SearchForm from "../../components/SearchForm/SearchForm.jsx";
import css from "./MoviesPage.module.css";
import MovieList from "../../components/MovieList/MovieList.jsx";
import { useSearchParams } from "react-router-dom";
import { ThreeCircles } from "react-loader-spinner";

const Loader = (
  <ThreeCircles
    visible={true}
    height="50"
    width="50"
    color="darkgrey"
    ariaLabel="three-circles-loading"
    wrapperStyle={{ marginTop: "10px" }}
    wrapperClass="loader"
  />
);
export default function MoviesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [error, setError] = useState(false);
  const [responseValue, setResponseValue] = useState("");
  const [empty, setEmpty] = useState(false);
  const [load, setLoad] = useState(false);
  const [notFound, setNotFound] = useState(false);

  const query = searchParams.get("query") ?? "";
  useEffect(() => {
    async function searchMovie() {
      try {
        setNotFound(false);
        setError(false);
        setLoad(true);
        if (query === null) {
          return;
        } else {
          const result = await getTrendMovie(
            `/search/movie?query=${query}&include_adult=false&language=en-US&page=1`
          );
          setResponseValue(result.results);
        }
      } catch {
        setError(true);
      } finally {
        setLoad(false);
      }
    }
    searchMovie();
  }, [query]);
  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const searchValue = document
      .querySelector("input[name=searchForm]")
      .value.trim();
    searchValue === "" ? setEmpty(true) : setEmpty(false);
    searchParams.set("query", searchValue);
    setSearchParams(searchParams);
    form.reset();
    console.log(responseValue);
  }
  return (
    <div className={css.movieContainer}>
      <SearchForm handleSubmit={handleSubmit} responseValue={responseValue} />
      {load && Loader}
      {error && <p className="notFound">Opps... Please, reload the page</p>}
      {empty && <p className="notFound">The field is empty</p>}
      {notFound === true && (
        <p className="notFound">
          Sorry, we did not find any movies for your request.
        </p>
      )}
      <MovieList movies={responseValue} />
    </div>
  );
}
