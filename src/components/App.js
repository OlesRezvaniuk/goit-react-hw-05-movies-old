import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Layout } from './Layout';
import { Trendings } from './Trendings/Trendings';
import { MovieDetails } from './MovieDetails/MovieDetails';
import { Cast } from './Cast/Cast';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="home" element={<Trendings />} />
        <Route path="home/:id" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
        </Route>
        <Route path="movies" element={<div>Movies</div>} />
      </Route>
    </Routes>
  );
};
