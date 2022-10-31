import { Outlet, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
// eslint-disable-next-line no-unused-vars
import userEvent from '@testing-library/user-event';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export const MovieDetails = () => {
  const { id } = useParams();

  const location = useLocation();
  const backLinkHref = location.pathname.slice(0, location.pathname.length - 6);

  console.log(backLinkHref);

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
    <>
      <Link to={`${backLinkHref}`}>Go back</Link>
      <div style={{ display: 'flex' }}>
        <img
          style={{ width: '500px' }}
          alt={details.title}
          src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`}
        ></img>
        <div>
          <h1>
            {details.original_title}({year})
          </h1>
          <span>User score: {score}%</span>
          <h2>Overview</h2>
          <p>{details.overview}</p>
          <h3>Genres</h3>
          <ul style={{ display: 'flex', gap: '10px', listStyle: 'none' }}>
            {genres.map(ganre => (
              <li key={ganre.name}>{ganre.name}</li>
            ))}
          </ul>
        </div>
      </div>
      <div style={{ padding: '20px' }}>
        <h3 style={{ margin: '0' }}>Additional information</h3>
        <ul>
          <li>
            <Link to={'cast'}>Cast</Link>
          </li>
          <li>
            <Link to={'reviews'}>Reviews</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
};
