import { RoutesEnum } from './routesEnum.constant';

import { AuthPage } from '../pages/auth/auth.page';
import { HomePage } from '../pages/home/home.page';
import { MorePage } from '../pages/more/more.page';

export const routes = [
  {
    path: RoutesEnum.Auth,
    element: AuthPage,
  },
  {
    path: RoutesEnum.Home,
    element: HomePage,
  },
  {
    path: RoutesEnum.More,
    element: MorePage,
  },
];
