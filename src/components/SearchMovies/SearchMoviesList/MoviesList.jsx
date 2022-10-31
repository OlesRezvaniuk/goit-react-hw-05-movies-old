import { List, Img, Item, MovieLink } from '../SearchMovies.styled';

export const MoviesList = ({ onMoviesArr, onLocation }) => {
  return (
    <section>
      <List>
        {onMoviesArr.map(movie => (
          <Item key={movie.id}>
            <MovieLink to={`${movie.id}`} state={{ from: onLocation }}>
              {movie.original_title}{' '}
              <Img
                alt={movie.title}
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              ></Img>
            </MovieLink>
          </Item>
        ))}
      </List>
    </section>
  );
};
