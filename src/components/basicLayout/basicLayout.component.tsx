import { Outlet } from 'react-router-dom';

import { Header } from '@/components/header/header.component';

import styles from './basicLayout.module.scss';

export const BasicLayout = () => (
  <main>
    <Header />
    <div className={styles.container}>
      <Outlet />
    </div>
  </main>
);
