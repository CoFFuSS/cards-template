import { Outlet } from 'react-router-dom';

import { Header } from '../header/header.component';
import { Footer } from '../footer/footer.component';

export const BasicLayout = () => (
  <main>
    <Header />
    <Outlet />
    <Footer />
  </main>
);
