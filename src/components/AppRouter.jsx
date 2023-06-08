import React from 'react';
import { Route, Routes } from "react-router-dom";
import Login from "./../pages/Login";
import { privateRoutes, publicRoutes } from '../routes';

const AppRouter = () => {
    const isAuth = false;

    return (
        isAuth
            ? <Routes>
                {privateRoutes.map(route =>
                    <Route path={route.path} element={route.element} exact={route.exact} />
                )}
              </Routes>
            : <Routes>
                {publicRoutes.map(route =>
                    <Route path={route.path} element={route.element} exact={route.exact} />
                )}
                <Route path="/*" element={<Login />} />
              </Routes>
    );
};

export default AppRouter;