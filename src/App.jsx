import React from "react";
import Home from "./pages/home/Home";

import { Route, Routes } from "react-router-dom";
import Shop from "./pages/shop/Shop";

const App = () => {
  return (
    <div>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </div>
  );
};

export default App;
