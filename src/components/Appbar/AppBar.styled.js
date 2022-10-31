import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavList = styled('ul')`
  padding: 15px;
  margin: 0;

  display: flex;
  gap: 15px;
  width: 1200px;
  margin: auto;
`;

export const NavItem = styled(NavLink)`
  text-decoration: none;
  padding: 0px 10px;
  color: black;
  font-weight: 600;
  padding: 5px;
  border-radius: 4px;
  transition: 250ms;
  &.active {
    border-radius: 4px;
    font-weight: 700;
    color: black;
    box-shadow: 0px 0px 2px black;
  }

  &:hover,
  &:focus {
    border-radius: 4px;
    box-shadow: 0px 0px 4px black;
  }
`;
