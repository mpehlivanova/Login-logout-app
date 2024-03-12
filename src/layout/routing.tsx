import React from "react";
import { Route, Routes } from 'react-router-dom';
import { routeConfiguration } from './constants';

const Routing = () => {
  return (
    <Routes>
      {routeConfiguration.map(({ id, require, url, component }: any) =>
        require ? <Route key={id} path={`/${url}`} element={component} /> :
          <Route key={id} path={`/${url}`} element={component} />
      )}
    </Routes>
  )
}

export default Routing; 