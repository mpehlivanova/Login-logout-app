import React from "react";
import { Route, Routes } from 'react-router-dom';
import { HomePage, FavoritePage, UserPage, LoginPage, PageNotFound } from '../pages'
import RequireAuth from '../auth/require-auth'


const Routing = () => {
  return (
    <Routes>
      <Route path="*" element={<PageNotFound />} />
      <Route path="/" element={<LoginPage />} />
      {/* {<RequireAuth> use for all private route or add configuration */}
      <Route path="/home" element={<RequireAuth><HomePage /></RequireAuth>} />
      <Route path="/user" element={<RequireAuth><UserPage /></RequireAuth>} />
      <Route path="/favorite/*" element={<RequireAuth><FavoritePage /></RequireAuth>} />
    </Routes>
  )
}

export default Routing; 