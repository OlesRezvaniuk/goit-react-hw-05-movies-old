import { NavItem, NavList } from '../AppBar.styled';

export const AppBarButtons = ({ onNavItems }) => {
  return (
    <div style={{ boxShadow: '0px 0px 8px black' }}>
      <NavList>
        {onNavItems.map(({ href, text }) => (
          <NavItem end to={href} key={href}>
            {text}
          </NavItem>
        ))}
      </NavList>
    </div>
  );
};
