import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer, Home, Navbar, Place } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/place" exact element={<Place />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
