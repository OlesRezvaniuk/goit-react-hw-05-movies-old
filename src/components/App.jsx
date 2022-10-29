import { Route, Routes } from 'react-router-dom';
import { Home } from './Home';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </>
  );
};
