import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { NavItem } from 'components/Appbar/AppBar.styled';

export const Box = styled('div')`
  width: 1200px;
  margin: auto;
`;

export const ToBackBtn = styled(Link)`
  border-radius: 4px;
  font-weight: 700;
  color: black;
  display: inline-flex;
  padding: 4px;
  margin: 10px 0px;
  text-decoration: none;
  transition: 250ms;
  &:hover,
  &:focus {
    box-shadow: 0px 0px 4px black;
    border-radius: 4px;
  }
`;

export const BoxInfo = styled('div')`
  display: flex;
`;
export const AdditInfo = styled('ul')`
display: flex;
    justify-content: space-around;
    list-style: none;
}`;

export const BoxInfoItem = styled(NavItem)`
  text-transform: uppercase;
  text-decoration: none;
  font-weight: 500;
`;

export const Poster = styled('img')`
  width: 290px;
`;
