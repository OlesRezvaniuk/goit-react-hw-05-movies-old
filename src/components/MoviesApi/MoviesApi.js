import axios from 'axios';

export const getTrandingsApi = async () => {
  const { data } = await axios.get(
    'https://api.themoviedb.org/3/trending/movie/week?api_key=6f552eb6929f0128999ddb3bd491ac60'
  );
  return data.results;
};

export const getSearchMoviesApi = async name => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=6f552eb6929f0128999ddb3bd491ac60&language=en-US&query=${name}&page=1&include_adult=false`
  );
  return data;
};

export const getReviewsApi = async id => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=6f552eb6929f0128999ddb3bd491ac60&language=en-US&page=1`
  );
  return data;
};

export const getDetailsApi = async id => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=6f552eb6929f0128999ddb3bd491ac60&language=en-US`
  );
  return data;
};

export const getCastApi = async id => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=6f552eb6929f0128999ddb3bd491ac60&language=en-US`
  );
  return data;
};
