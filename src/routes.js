import React from "react";
import { Route , BrowserRouter } from "react-router-dom";

import Login from "./page/Login";
import Register from "./page/Register";
import Home from "./page/Home";
import ListItems from "./page/ListItems"

const routes = () => {
    return (
        <BrowserRouter>
            <Route component={Login} path="/" exact />
            <Route component={Register} path="/register" />
            <Route component={Home} path="/home" />
            <Route component={ListItems} path="/supermercado/items" />
        </BrowserRouter>
    );
}

export default routes;
