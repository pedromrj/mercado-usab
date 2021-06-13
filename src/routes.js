import React from "react";
import { Route , BrowserRouter } from "react-router-dom";
import Cart from "./page/Cart";

import Login from "./page/Login";
import Register from "./page/Register";

const routes = () => {
    return (
        <BrowserRouter>
            <Route component={Login} path="/" exact />
            <Route component={Register} path="/register" />
            <Route component={Cart} path="/cart" />
        </BrowserRouter>
    );
}

export default routes;
