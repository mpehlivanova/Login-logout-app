import React from "react";
import { Route, Routes } from 'react-router-dom';
import { HomePage, FavoritePage, UserPage, LoginPage, PageNotFound } from './pages'
import RequireAuth from './api/require-auth'

const Routing = () => {
  return (
    <Routes>
      <Route path="*" element={<PageNotFound />} />
      <Route path="/" element={<LoginPage />} />
      <Route path="/home" element={<RequireAuth><HomePage /></RequireAuth>} />
      <Route path="/user" element={<RequireAuth><UserPage /></RequireAuth>} />
      <Route path="/favorite/*" element={<RequireAuth><FavoritePage /></RequireAuth>} />
    </Routes>
  )
}

export default Routing; 