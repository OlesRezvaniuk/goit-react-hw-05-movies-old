import { Outlet, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
// eslint-disable-next-line no-unused-vars
// import userEvent from '@testing-library/user-event';
// import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import {
  Box,
  ToBackBtn,
  BoxInfo,
  AdditInfo,
  BoxInfoItem,
  Poster,
} from './MovieDetails.styled';

const linkArr = [
  { name: 'cast', href: 'cast' },
  { name: 'reviews', href: 'reviews' },
];

export const MovieDetailsSearch = () => {
  const { id } = useParams();

  // const product = getProductById(id);
  const location = useLocation();
  const { search, pathname } = location.state.from;

  const [details, setDetails] = useState({});
  const [genres, setGenres] = useState([]);
  const [year, setYear] = useState([]);

  const getDetailsApi = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=6f552eb6929f0128999ddb3bd491ac60&language=en-US`
    );
    return data;
  };

  const onArrayItems = async () => {
    const movieDetails = await getDetailsApi();
    setDetails(movieDetails);
    const allGenres = await movieDetails.genres;
    setGenres(allGenres);
    const year = await movieDetails.release_date.slice(0, 4);
    setYear(year);
  };

  useEffect(() => {
    onArrayItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const score = Math.round(details.vote_average * 10);

  return (
    <Box>
      <ToBackBtn to={pathname + search}>Go back</ToBackBtn>
      <BoxInfo>
        <Poster
          alt={details.title}
          src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`}
        ></Poster>
        <div style={{ padding: '15px' }}>
          <h1>
            {details.original_title}({year})
          </h1>
          <span>User score: {score}%</span>
          <h2>Overview</h2>
          <p>{details.overview}</p>
          <h3>Genres</h3>
          <ul
            style={{
              listStyle: 'none',
              padding: '0',
            }}
          >
            {genres.map(ganre => (
              <li key={ganre.name}>{ganre.name}</li>
            ))}
          </ul>
        </div>
      </BoxInfo>
      <div style={{ padding: '20px' }}>
        <h3
          style={{
            margin: '0',
            textAlign: 'center',
            textTransform: 'uppercase',
          }}
        >
          Additional information
        </h3>
        <AdditInfo>
          {linkArr.map(link => (
            <li key={link.name}>
              <BoxInfoItem key={link.name} to={`${link.href}`}>
                {link.name}
              </BoxInfoItem>
            </li>
          ))}
        </AdditInfo>
      </div>
      <Outlet />
    </Box>
  );
};
