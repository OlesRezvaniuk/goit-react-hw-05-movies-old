import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import s from './Cast.module.css';

export const Cast = () => {
  const { id } = useParams();
  //   const [cast, setCast] = useState([]);
  const [topCast, setTopCast] = useState([]);

  const getCastApi = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=6f552eb6929f0128999ddb3bd491ac60&language=en-US`
    );
    return data;
  };

  const onArrayItems = async () => {
    const movieCast = await getCastApi();
    // setCast(movieCast);
    const topCast = await movieCast.cast.splice(0, 21);
    setTopCast(topCast);
  };

  useEffect(() => {
    onArrayItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <ul className={s.cast__list}>
        {topCast.map(name => (
          <li className={s.cast__item} key={name.id}>
            <img
              style={{ width: '100%' }}
              alt={name.cast_id}
              src={`https://image.tmdb.org/t/p/w500/${name.profile_path}`}
            ></img>
            <div>
              <p>{name.name}</p>
              <p>{name.character}</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};
