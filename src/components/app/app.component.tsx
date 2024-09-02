import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';

import { ErrorBoundary } from '../errorBoundary/errorBoundary.component';
import { BasicLayout } from '../basicLayout/basicLayout.component';
import { routes } from '../../constants/routes.constant';

export const App = () => {
  useEffect(() => {}, []);

  return (
    <BrowserRouter>
      <ErrorBoundary>
        <Routes>
          <Route element={<BasicLayout />}>
            {routes.map(({ path, element: Element }) => (
              <Route
                key={path}
                path={path}
                element={<Element />}
              />
            ))}
          </Route>
        </Routes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};
