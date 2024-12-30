import React from "react";
import Home from "./home/Home";
import Courses from "./Courses/Courses";
import { Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
// import Contactus from "./components/Contactus";
import Contacts from "./Contact/Contacts";

function App() {
  return (
    <>
      {/* <Home />
      <Course /> */}
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Course" element={<Courses />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Contactus" element={<Contacts />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
