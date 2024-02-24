import React from 'react';
import Home from '../pages/Home/Home';
import Profile from '../pages/Profile/Profile';
import { Route, Routes } from 'react-router-dom';

const MainRoutes = () => {

  const PUBLIC = [
    {path: '/', element: <Home/>, key: 1}
  ]
  const PRIVATE = [
    {path: '/profile', element: <Profile/>, key: 1}
  ]
  return (
    <Routes>
      {
        PUBLIC.map((el) => (
          <Route path={el.path} element={el.element} key={el.key} />
        ))
      }
      {
        PRIVATE.map((el) => (
          <Route path={el.path} element={el.element} key={el.key} />
        ))
      }
    </Routes>
  );
};

export default MainRoutes;