import s from '../../Trendings/Trendings.module.css';
import { Link } from 'react-router-dom';

export const TrendingsItem = ({ onArray }) => {
  return (
    <ul className={s.trending__list}>
      {onArray.map(trend => (
        <li key={trend.id} className={s.trending__item}>
          <Link key={trend.id} className={s.trending__link} to={`${trend.id}`}>
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
  );
};
