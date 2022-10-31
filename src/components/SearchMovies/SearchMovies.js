import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import {
  Form,
  Input,
  Button,
  List,
  Img,
  Item,
  MovieLink,
} from './SearchMovies.styled';
import { useLocation, useSearchParams } from 'react-router-dom';
export const SearchMovies = () => {
  const location = useLocation();
  const [params, setParams] = useSearchParams();
  const namePar = params.get('query');

  const [name, setName] = useState(namePar ?? '');
  const [moviesArr, setMoviesArr] = useState([]);

  const onInputChange = e => {
    setName(e.currentTarget.value);
  };
  console.log(namePar);
  console.log(name);

  useEffect(() => {
    movies();
  }, []);

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

  // if (namePar !== null) {
  //   movies();
  // }

  const heandleSearch = e => {
    e.preventDefault();
    if (name !== '') {
      movies();
      setParams({ query: name });
    }
    setName('');
  };

  return (
    <div>
      <div>
        <Form onSubmit={heandleSearch}>
          <Input value={name} onChange={onInputChange} />
          <Button type="submit">Search</Button>
        </Form>
      </div>
      <section>
        <List>
          {moviesArr.map(movie => (
            <Item key={movie.id}>
              <Link
                style={{
                  display: 'flex',
                  flexDirection: 'column-reverse',
                  textAlign: 'center',
                  height: '100%',
                  justifyContent: 'flex-end',
                  textDecoration: 'none',
                  fontWeight: '500',
                  color: 'black',
                  marginBottom: '10px',
                }}
                to={`${movie.id}`}
                state={{ from: location }}
              >
                {movie.original_title}{' '}
                <Img
                  alt={movie.title}
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                ></Img>
              </Link>
            </Item>
          ))}
        </List>
      </section>
      <Outlet />
    </div>
  );
};
