import css from "./SearchForm.module.css";

export default function SearchForm({ handleSubmit }) {
  return (
    <form onSubmit={handleSubmit} className={css.searchForm}>
      <input type="text" name="searchForm" className={css.inputForm} />
      <button type="submit" className={css.buttonForm}>
        Search
      </button>
    </form>
  );
}
