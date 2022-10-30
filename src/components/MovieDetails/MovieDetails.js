import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import userEvent from '@testing-library/user-event';

export const MovieDetails = () => {
  const { id } = useParams();

  const [details, setDetails] = useState({});

  const getDetailsApi = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=6f552eb6929f0128999ddb3bd491ac60&language=en-US`
    );
    return data;
  };

  useEffect(() => {
    getDetailsApi().then(setDetails);
  }, []);

  //   const year = details.release_date.slice(0, 4);

  const score = Math.round(details.vote_average * 10);
  console.log(details);

  return (
    <>
      <div style={{ display: 'flex' }}>
        <img
          alt={details.title}
          src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`}
        ></img>
        <div>
          <h1>
            {details.original_title}({details.release_date})
          </h1>
          <span>User score: {score}%</span>
          <h2>Overview</h2>
          <p>{details.overview}</p>
          <h3>Genres</h3>
          <p>
            {/* {details.genres.map(ganre => (
              <li>{ganre.name}</li>
            ))} */}
          </p>
        </div>
      </div>
    </>
  );
};
