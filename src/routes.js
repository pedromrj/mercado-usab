import React from "react";
import { Route , BrowserRouter } from "react-router-dom";

import Login from "./page/Login";
import Register from "./page/Register";
import Home from "./page/Home";
import ListItems from "./page/ListItems"
import Cart from "./page/Cart";

const routes = () => {
    return (
        <BrowserRouter>
            <Route component={Login} path="/" exact />
            <Route component={Register} path="/register" />
            <Route component={Home} path="/home" />
            <Route component={ListItems} path="/supermercado/items" />
            <Route component={Cart} path="/cart" />

        </BrowserRouter>
    );
}

export default routes;
