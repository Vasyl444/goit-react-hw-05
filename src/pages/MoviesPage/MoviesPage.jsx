import { useEffect, useState } from "react";
import getTrendMovie from "../../request-function.js";
import SearchForm from "../../components/SearchForm/SearchForm.jsx";
import css from "./MoviesPage.module.css";

export default function MoviesPage() {
  const [search, setSearch] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const searchValue = document.querySelector("input[name=searchForm]");
    console.log(searchValue.value);
    setSearch(searchValue);
    form.reset();
  };
  /* useEffect(() => {
    async function searchMovie() {
      try {
        const result = await getTrendMovie(searchUrl) {
          
        };
      } catch {
        console.error();
      }
    }
  });
*/
  return (
    <div className={css.movieContainer}>
      <SearchForm handleSubmit={handleSubmit} />
    </div>
  );
}
