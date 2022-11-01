import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getCastApi } from 'components/MoviesApi/MoviesApi';
import { CastList } from './CastList/CastList';

export const Cast = () => {
  const { id } = useParams();
  const [topCast, setTopCast] = useState([]);

  const onArrayItems = async () => {
    const movieCast = await getCastApi(id);
    const topCast = await movieCast.cast.splice(0, 21);
    setTopCast(topCast);
  };

  useEffect(() => {
    onArrayItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <CastList onTopCast={topCast} />
    </>
  );
};
