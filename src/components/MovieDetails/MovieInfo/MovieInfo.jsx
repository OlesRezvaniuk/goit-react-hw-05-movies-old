import { BoxInfo, Poster } from '../MovieDetails.styled';

export const MovieInfo = ({ onDetails, onYear, onScore, onGenres }) => {
  return (
    <BoxInfo>
      <Poster
        alt={onDetails.title}
        src={`https://image.tmdb.org/t/p/w500/${onDetails.poster_path}`}
      ></Poster>
      <div style={{ padding: '15px' }}>
        <h1>
          {onDetails.original_title}({onYear})
        </h1>
        <span>User score: {onScore}%</span>
        <h2>Overview</h2>
        <p>{onDetails.overview}</p>
        <h3>Genres</h3>
        <ul
          style={{
            listStyle: 'none',
            padding: '0',
          }}
        >
          {onGenres.map(ganre => (
            <li key={ganre.name}>{ganre.name}</li>
          ))}
        </ul>
      </div>
    </BoxInfo>
  );
};
