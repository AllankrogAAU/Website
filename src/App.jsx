import React from "react";
import Home from "./pages/Home";
import ProjectOne from "./pages/ProjectOne";
import ProjectTwo from "./pages/ProjectTwo";
import ProjectThree from "./pages/ProjectThree";
import {Routes, Route} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import ParticleBackground from "./components/ParticleBackground";


const App = () => {
  return (
    <div>
      <ParticleBackground />
      <main className="container mt-5">
        <Routes>
         <Route path="/" element={<Home />}></Route>
         <Route path="/projectOne" element={<ProjectOne />}></Route>
         <Route path="/projectTwo" element={<ProjectTwo />}></Route>
         <Route path="/projectThree" element={<ProjectThree />}></Route>
        </Routes>
      </main>
    </div>
  );
};

export default App;
