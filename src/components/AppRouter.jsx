import React, { useContext } from 'react';
import { Route, Routes } from "react-router-dom";
import Login from "./../pages/Login";
import { privateRoutes, publicRoutes } from '../routes';
import { AuthContext } from '../context';
import MyLoader from '../components/UI/loader/MyLoader';

const AppRouter = () => {
    const { isAuth, isLoading } = useContext(AuthContext);

    if (isLoading) {
        return <MyLoader />;
    }

    return (
        isAuth
            ? <Routes>
                {privateRoutes.map(route =>
                    <Route path={route.path} element={route.element} exact={route.exact} key={route.path} />
                )}
              </Routes>
            : <Routes>
                {publicRoutes.map(route =>
                    <Route path={route.path} element={route.element} exact={route.exact} key={route.path} />
                )}
                <Route path="/*" element={<Login />} />
              </Routes>
    );
};

export default AppRouter;