import { Outlet, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { MovieInfo } from './MovieInfo/MovieInfo';
import { MovieAdditionalInfo } from './MovieAdditionlInfo/MovieAdditionalInfo';
import { getDetailsApi } from 'components/MoviesApi/MoviesApi';
// eslint-disable-next-line no-unused-vars
import { useLocation } from 'react-router-dom';
import { Box, ToBackBtn } from './MovieDetails.styled';

const AdditionalInfo = [
  { name: 'cast', href: 'cast' },
  { name: 'reviews', href: 'reviews' },
];

export const MovieDetailsSearch = () => {
  const { id } = useParams();

  const location = useLocation();

  const search = location?.state?.from?.search || '';
  const pathname = location?.state?.from?.pathname || '/';

  console.log(search, pathname);

  const [details, setDetails] = useState({});
  const [genres, setGenres] = useState([]);
  const [year, setYear] = useState([]);

  const onArrayItems = async () => {
    const movieDetails = await getDetailsApi(id);
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
      <ToBackBtn to={search + pathname}>Go back</ToBackBtn>
      <MovieInfo
        onDetails={details}
        onYear={year}
        onScore={score}
        onGenres={genres}
      />
      <MovieAdditionalInfo
        location={location}
        onAdditionlInfo={AdditionalInfo}
      />
      <Outlet />
    </Box>
  );
};
