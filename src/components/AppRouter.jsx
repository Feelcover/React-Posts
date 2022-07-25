import React from "react";
import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { AuthContext } from "../context";
import Login from "../pages/Login";
import Posts from "../pages/Posts";
import { privateRoutes, publicRoutes } from "../router";


const AppRouter = () => {
  const {isAuth, setIsAuth} = useContext(AuthContext);
  const {isLoading, setLoading} = useContext(AuthContext);

  if (isLoading) {
    return <Loader/>
  }

  return (
    isAuth
    ?
    <Routes>
      {privateRoutes.map((route) => (
        <Route
          element={route.element}
          path={route.path}
          exact={route.exact}
          key={route.path}
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
          key={route.path}
        />
      ))}
      <Route path="*" element={<Login />} />
    </Routes>
  );
};

export default AppRouter;
