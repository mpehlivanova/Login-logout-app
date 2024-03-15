import React from 'react';
import { Route, Routes } from 'react-router-dom';
import RequireAuth from '../auth/require-auth';
import { routeConfiguration } from './constants';

const Routing = () => {
  return (
    <Routes>
      {routeConfiguration.map(({ id, isRequireAuth, url, component }) =>
        isRequireAuth ?
          <Route key={id} path={`/${url}`} element={<RequireAuth>{component}</RequireAuth>} />
          :
          <Route key={id} path={url} element={component} />
      )}
    </Routes>
  );
};

export default Routing;
