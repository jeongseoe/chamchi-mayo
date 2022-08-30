import React from "react";
import { Route, Routes } from 'react-router-dom';

import Home from "../src/pages/index";
import Detail from "../src/pages/detail";
import Write from "../src/pages/write";
import Posts from "./pages/posts";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/:id" element={<Detail />} />
        <Route path="/write" element={<Write />} />
      </Routes>
    </div>
  );
}

export default App;
