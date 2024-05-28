import React from 'react';
import { Route, Routes, Redirect } from "react-router-dom";


// pages
import HomePage from './HomePage';
import MenuPage from './MenuPage'

// error
// import NotFoundPage from "./error/NotFound";
// import ServerError from "./error/ServerError";

const Router = () => {
    // const dispatch = useDispatch()

    return(
        <Routes>
        {/* error */}
        {/* <Route exact path={Routes.NotFound.path} component={NotFoundPage} />
        <Route exact path={Routes.ServerError.path} component={ServerError} /> */}

        {/* pages */}
            <Route path="/" element={<HomePage />} />
            <Route path="/menu" element={<MenuPage />} />

        {/* <Redirect to={Routes.NotFound.path} />  */}
        </Routes>
    )
};

export default Router;