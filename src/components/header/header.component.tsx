import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { RoutesEnum } from '@/constants/routesEnum.constant';
import { Button } from '@/ui/button/button.component';
import { currentUserName } from '@/store/selectors';
import { useAppSelector } from '@/hooks/redux';
import { clearUser } from '@/store/slices/userSlice';

import styles from './header.module.scss';

export const Header = () => {
  const navigate = useNavigate();
  const userName = useAppSelector(currentUserName);
  const logInButtonText = userName ? 'LogOut' : 'Login';
  const dispatch = useDispatch();

  const handleAuthButton = () => {
    if (!userName) {
      navigate(RoutesEnum.Auth);
    }

    dispatch(clearUser());
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1>Just Test</h1>
        <div className={styles.content_container}>
          <h6>{userName}</h6>
          <Button
            text={logInButtonText}
            onClick={handleAuthButton}
          />
        </div>
      </div>
    </header>
  );
};
