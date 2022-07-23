import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Posts from "../pages/Posts";
import { privateRoutes, publicRoutes } from "../router";


const AppRouter = () => {
  const isAuth = true;
  return (
    isAuth
    ?
    <Routes>
      {privateRoutes.map((route) => (
        <Route
          element={route.element}
          path={route.path}
          exact={route.exact}
          key={route.indexOf + 1}
        />
      ))}
      <Route path="*" element={<Posts />} />
    </Routes>
    :
    <Routes>
      {publicRoutes.map((route) => (
        <Route
          element={route.element}
          path={route.path}
          exact={route.exact}
          key={route.indexOf + 1}
        />
      ))}
      <Route path="*" element={<Login />} />
    </Routes>
  );
};

export default AppRouter;
