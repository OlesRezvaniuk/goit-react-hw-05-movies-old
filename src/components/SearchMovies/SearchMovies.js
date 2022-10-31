import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

export const SearchMovies = () => {
  const [name, setName] = useState('');
  const [moviesArr, setMoviesArr] = useState([]);

  const onInputChange = e => {
    setName(e.currentTarget.value);
  };

  const heandleSearch = e => {
    e.preventDefault();
    if (name !== '') {
      movies();
    }
    console.log(moviesArr);
    setName('');
  };

  const getMoviesApi = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=6f552eb6929f0128999ddb3bd491ac60&language=en-US&query=${name}&page=1&include_adult=false`
    );
    return data;
  };

  const movies = async () => {
    const moviesApi = await getMoviesApi();
    setMoviesArr(moviesApi.results);
  };

  return (
    <div>
      <div>
        <form onSubmit={heandleSearch}>
          <input value={name} onChange={onInputChange} />
          <button type="submit">Search</button>
        </form>
      </div>
      <section>
        <ul>
          {moviesArr.map(movie => (
            <li key={movie.id}>
              <Link to={`${movie.id}`}>{movie.original_title}</Link>
            </li>
          ))}
        </ul>
      </section>
      <Outlet />
    </div>
  );
};
