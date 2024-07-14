import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Navigation from "../Navigation/Navigation.jsx";
import css from "./App.module.css";
const MoviesPage = lazy(() => import("../../pages/MoviesPage/MoviesPage.jsx"));
const HomePage = lazy(() => import("../../pages/HomePage/HomePage.jsx"));

export default function App() {
  return (
    <div className={css.container}>
      <Navigation />
      <Suspense fallback={<p>Loading page...</p>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movie" element={<MoviesPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}
