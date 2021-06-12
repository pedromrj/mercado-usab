import React from "react";
import { Route , BrowserRouter } from "react-router-dom";

import Login from "./page/Login";
import Register from "./page/Register";

const routes = () => {
    return (
        <BrowserRouter>
            <Route component={Login} path="/" exact />
            <Route component={Register} path="/register" />
        </BrowserRouter>
    );
}

export default routes;
