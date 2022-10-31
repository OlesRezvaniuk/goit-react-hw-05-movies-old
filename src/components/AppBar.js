// import { NavLink } from 'react-router-dom';
import { NavItem } from './Appbar/AppBar.styled';

const navItems = [
  { href: 'home', text: 'Home' },
  { href: 'movies', text: 'Movies' },
];

export const AppBar = () => {
  return (
    <ul style={{ padding: '0px' }}>
      {navItems.map(item => (
        <NavItem to={item.href} key={item.href}>
          {item.text}
        </NavItem>
      ))}
    </ul>
  );
};
