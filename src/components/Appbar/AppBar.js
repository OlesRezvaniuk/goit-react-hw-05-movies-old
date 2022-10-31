// import { NavLink } from 'react-router-dom';
import { NavItem, NavList } from './AppBar.styled';
// import { Outlet } from 'react-router-dom';
const navItems = [
  { href: '/', text: 'Home' },
  { href: 'movies', text: 'Movies' },
];

export const AppBar = () => {
  return (
    <div style={{ boxShadow: '0px 0px 8px black' }}>
      <NavList>
        {navItems.map(item => (
          <NavItem end to={item.href} key={item.href}>
            {item.text}
          </NavItem>
        ))}
      </NavList>
    </div>
  );
};
