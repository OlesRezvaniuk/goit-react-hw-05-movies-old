import { Form, Input, Button } from '../SearchMovies.styled';

export const SearchForm = ({ onHeandleSearch, onValue, onOnChange }) => {
  return (
    <Form onSubmit={onHeandleSearch}>
      <Input value={onValue} onChange={onOnChange} />
      <Button type="submit">Search</Button>
    </Form>
  );
};
