import SearchForm from "../../components/SearchForm/SearchForm.jsx";
import css from "./MoviesPage.module.css";

export default function MoviesPage() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const searchValue = document.querySelector("input[name=searchForm]");
    console.log(searchValue.value);
    form.reset();
  };
  return (
    <div className={css.movieContainer}>
      <SearchForm handleSubmit={handleSubmit} />
    </div>
  );
}
