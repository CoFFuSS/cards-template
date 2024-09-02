import { Outlet } from 'react-router-dom';

import { Header } from '../header/header.component';

export const BasicLayout = () => (
  <main>
    <Header />
    <Outlet />
    <footer>Footer</footer>
  </main>
);
