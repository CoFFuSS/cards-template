import { Outlet } from 'react-router-dom';

import styles from './basicLayout.module.scss';

import { Header } from '../header/header.component';

export const BasicLayout = () => (
  <main>
    <Header />
    <div className={styles.container}>
      <Outlet />
    </div>
  </main>
);
