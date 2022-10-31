import { getTrandingsApi } from '../MoviesApi/MoviesApi';
import { useState } from 'react';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { TrendingsItem } from './TrendingsItem/TrendingsItem';

export const Trendings = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    getTrandingsApi().then(setTrendingMovies);
  }, []);

  return (
    <>
      <TrendingsItem onArray={trendingMovies} />
      <Outlet />
    </>
  );
};
