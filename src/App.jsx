import { useState } from "react";
import "./App.css";
import Room from "./components/Room";
import Home from "./page/Home";
import { Route, Routes } from "react-router";

function App() {
  return (
    <>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/room" element={<Room />} />
      </Routes>
    </>
  );
}

export default App;
