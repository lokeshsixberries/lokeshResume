import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Elements/Home";
import About from "./Elements/About";
import Achivements from "./Elements/Achivements";
import Projects from "./Elements/Projects";
import Stacks from "./Elements/Stacks";

export default function NavRouter() {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/achivements" element={<Achivements />} />
        <Route path="/stacks" element={<Stacks />} />
      </Routes>
    </>
  );
}
