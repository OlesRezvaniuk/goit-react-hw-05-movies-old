import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Form = styled('form')`
  width: 290px;
  margin: 15px auto;
  padding: 4px;
  display: flex;
`;

export const Input = styled('input')`
  padding: 6px;
  width: 100%;
  border: none;
  outline: none;
  box-shadow: inset 0px 0px 2px;
  border-bottom-left-radius: 4px;
  border-top-left-radius: 4px;
  cursor: pointer;
  font-weight: bold;
    &:hover,
  &:focus {
      box-shadow: inset 0px 0px 4px;
`;

export const Button = styled('button')`
  border: none;
  box-shadow: inset 0px 0px 2px;
  border-bottom-right-radius: 4px;
  border-top-right-radius: 4px;
  cursor: pointer;
  background-color: transparent;
  
  &:hover,
  &:focus {
      box-shadow: inset 0px 0px 4px;
`;

export const List = styled('ul')`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  @media screen and (max-width: 2000px) {
    grid-template-columns: repeat(8, 1fr);
  }
  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(5, 1fr);
  }
  @media screen and (max-width: 870px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media screen and (max-width: 700px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 527px) {
    grid-template-columns: repeat(2, 1fr);
  }
  padding: 0;
  margin: 15px;
  gap: 15px;
  list-style: none;
`;

export const Img = styled('img')`
  width: 100%;
  object-fit: cover;
  margin-bottom: 10px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;

export const Item = styled('li')`
  box-shadow: 0px 0px 4px;
  border-radius: 4px;
  transition: 250ms;
  &:hover,
  &:focus {
    scale: 1.02;
  }
`;

export const MovieLink = styled(Link)`
  display: flex;
  flex-direction: column-reverse;
  text-align: center;
  height: 100%;
  justify-content: flex-end;
  text-decoration: none;
  font-weight: 500;
  color: black;
  margin-bottom: 10px;
`;
