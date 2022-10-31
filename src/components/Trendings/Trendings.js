import { getTrandingsApi } from '../TrendingsApi';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import s from './Trendings.module.css';
import { Outlet } from 'react-router-dom';

export const Trendings = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    getTrandingsApi().then(setTrendingMovies);
  }, []);

  return (
    <>
      <ul className={s.trending__list}>
        {trendingMovies.map(trend => (
          <li key={trend.id} className={s.trending__item}>
            <Link
              key={trend.id}
              className={s.trending__link}
              to={`${trend.id}`}
            >
              <p className={s.trending__text}>{trend.title}</p>
              <img
                className={s.trending__img}
                alt={trend.title}
                src={`https://image.tmdb.org/t/p/w500/${trend.poster_path}`}
              ></img>
            </Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </>
  );
};
