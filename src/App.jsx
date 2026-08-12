import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/projects";
import TechStack from "./components/TechStack";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="min-h-screen w-full bg-background text-foreground">
      <div className="mx-auto min-h-screen bg-background px-6 py-6">
        <Navbar />

        <main>
          <Hero />
          <About />
          <TechStack />
          <Projects />
          <Contact />
        </main>
      </div>
    </div>
  );
};

export default App;