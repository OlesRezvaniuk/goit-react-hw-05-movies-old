import { lazy } from 'react';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { Trendings } from './Trendings/Trendings';
import { MovieDetailsSearch } from './MovieDetails/MovieDetailsSearch';

const MovieDetails = lazy(() => import('./MovieDetails/MovieDetails'));
const SearchMovies = lazy(() => import('./SearchMovies/SearchMovies'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Trendings />} />
        <Route path="/:id" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="movies" element={<SearchMovies />} />
        <Route path="movies/:id" element={<MovieDetailsSearch />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};
