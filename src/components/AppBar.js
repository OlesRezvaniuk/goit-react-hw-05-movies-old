import { Link } from 'react-router-dom';

const navItems = [
  { href: 'home', text: 'Home' },
  { href: 'movies', text: 'Movies' },
];

export const AppBar = () => {
  return (
    <ul>
      {navItems.map(item => (
        <Link to={item.href} key={item.href}>
          {item.text}
        </Link>
      ))}
    </ul>
  );
};
