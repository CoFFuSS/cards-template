import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';

import { routes } from '@/constants/routes.constant';
import { ErrorBoundary } from '@/components/errorBoundary/errorBoundary.component';
import { BasicLayout } from '@/components/basicLayout/basicLayout.component';

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
