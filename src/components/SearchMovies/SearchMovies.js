import { useState } from 'react';
import { useEffect } from 'react';

import { Outlet } from 'react-router-dom';

import { useLocation, useSearchParams } from 'react-router-dom';
import { getSearchMoviesApi } from 'components/MoviesApi/MoviesApi';
import { SearchForm } from './SearchMoviesForm/SearchForm';
import { MoviesList } from './SearchMoviesList/MoviesList';

const SearchMovies = () => {
  const location = useLocation();
  const [params, setParams] = useSearchParams();
  const namePar = params.get('query');

  const [name, setName] = useState(namePar ?? '');
  const [moviesArr, setMoviesArr] = useState([]);

  const onInputChange = e => {
    setName(e.currentTarget.value);
  };

  useEffect(() => {
    if (name !== '') {
      getMovies();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getMovies = async () => {
    const moviesApi = await getSearchMoviesApi(name);
    setMoviesArr(moviesApi.results);
  };

  const heandleSearch = e => {
    e.preventDefault();
    if (name !== '') {
      getMovies();
      setParams({ query: name });
    }
    setName('');
  };

  return (
    <div>
      <SearchForm
        onHeandleSearch={heandleSearch}
        onValue={name}
        onOnChange={onInputChange}
      />
      <MoviesList onMoviesArr={moviesArr} onLocation={location} />
      <Outlet />
    </div>
  );
};

export default SearchMovies;
