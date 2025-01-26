import React from "react";
import Header from "../components/Header";
import About from "../components/About";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Links from "../components/Links";

const Home = () => {
  return (
    <div className="container mt-5">
      {/* Header Section */}
      <Header />
      {/* About Section */}
      <About />
      {/* Projects Section */}
      <Projects />

      {/* Skills Section */}
      <Skills />

      {/* Links Section */}
      <Links />
    </div>
  );
};

export default Home;