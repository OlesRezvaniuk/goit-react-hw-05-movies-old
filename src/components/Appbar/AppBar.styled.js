import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavItem = styled(NavLink)`
  text-decoration: none;
  padding: 0px 10px;
  &.active {
    background-color: #e5e5ff;
  }
`;
