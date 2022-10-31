import { AppBarButtons } from './AppBarButtons/AppBarButtons';

const navItems = [
  { href: '/', text: 'Home' },
  { href: 'movies', text: 'Movies' },
];

export const AppBar = () => {
  return <AppBarButtons onNavItems={navItems} />;
};
