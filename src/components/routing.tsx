import React from "react";
import { Route, Routes } from 'react-router-dom';
import { HomePage, FavoritePage, UserPage, LoginPage } from './pages'

const Routing = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/user/*" element={<UserPage />} />
      <Route path="/favorite/*" element={<FavoritePage />} />
    </Routes>
  )
}

export default Routing; 