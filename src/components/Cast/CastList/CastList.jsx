import s from '../Cast.module.css';

export const CastList = ({ onTopCast }) => {
  return (
    <ul className={s.cast__list}>
      {onTopCast.map(({ id, cast_id, name, character, profile_path }) => (
        <li className={s.cast__item} key={id}>
          <img
            style={{ width: '100%' }}
            alt={cast_id}
            src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
          ></img>
          <div>
            <p>{name}</p>
            <p>{character}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};
