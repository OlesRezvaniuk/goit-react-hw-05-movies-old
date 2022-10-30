import axios from 'axios';

export const getTrandingsApi = async () => {
  const { data } = await axios.get(
    'https://api.themoviedb.org/3/trending/movie/week?api_key=6f552eb6929f0128999ddb3bd491ac60'
  );
  return data.results;
};
