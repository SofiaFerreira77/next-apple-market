import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../views/Home";
import Param from "../views/Param";
import About from "../views/About";
import NotFound from "../views/NotFound";
import List from "../views/List";

const Content = props => {
    return (
        <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/list" exact element={<List />} />
            <Route path="/about" element={<About />} />
            <Route path="/param/:id" element={<Param />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default Content