import React from "react";
import { Route , BrowserRouter } from "react-router-dom";

import Login from "./page/Login";
import Register from "./page/Register";
import Home from "./page/Home";

const routes = () => {
    return (
        <BrowserRouter>
            <Route component={Login} path="/" exact />
            <Route component={Register} path="/register" />
            <Route component={Home} path="/home" />
        </BrowserRouter>
    );
}

export default routes;
