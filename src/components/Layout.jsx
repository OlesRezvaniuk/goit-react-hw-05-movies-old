import { AppBar } from './Appbar/AppBar';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <div>
      <AppBar />
      <Outlet />
    </div>
  );
};
