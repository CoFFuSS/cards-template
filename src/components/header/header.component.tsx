import { useNavigate } from 'react-router-dom';

import { RoutesEnum } from '@/constants/routesEnum.constant';
import { Button } from '@/ui/button/button.component';

import styles from './header.module.scss';

export const Header = () => {
  const navigate = useNavigate();
  const onClick = () => navigate(RoutesEnum.Auth);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1>Just Test</h1>
        <div className={styles.content_container}>
          <Button
            text='Sign In'
            onClick={onClick}
          />
        </div>
      </div>
    </header>
  );
};
