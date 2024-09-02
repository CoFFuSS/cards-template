import { Outlet } from 'react-router-dom';

export const BasicLayout = () => (
  <main>
    <header>Header</header>
    <Outlet />
    <footer>Footer</footer>
  </main>
);
