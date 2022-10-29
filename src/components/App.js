import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Layout } from './Layout';
import { Trendings } from './Trendings';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="home" element={<Trendings />} />
        <Route path="movies" element={<div>Movies</div>} />
      </Route>
    </Routes>
  );
};
