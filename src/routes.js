import React from "react";
import { Route , BrowserRouter } from "react-router-dom";
import Cart from "./page/Cart";

import Login from "./page/Login";
import Register from "./page/Register";
import Home from "./page/Home";

const routes = () => {
    return (
        <BrowserRouter>
            <Route component={Login} path="/" exact />
            <Route component={Register} path="/register" />
            <Route component={Cart} path="/cart" />
            <Route component={Home} path="/home" />
        </BrowserRouter>
    );
}

export default routes;
