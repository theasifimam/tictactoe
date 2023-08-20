import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import AddFolder from "./pages/AddFolder/AddFolder";
import Header from "./components/Header";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Header />}>
          <Route path="/" element={<Home />} />
          <Route path="/add-folder" element={<AddFolder />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
