import css from "./SearchForm.module.css";

export default function SearchForm({ handleSubmit }) {
  return (
    <form onSubmit={handleSubmit} className={css.searchForm}>
      <input type="text" name="searchForm" />
      <button type="submit">Search</button>
    </form>
  );
}
