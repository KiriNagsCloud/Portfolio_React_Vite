import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Hobbies from "./components/Hobbies";
import SocialMedia from "./components/SocialMedia";
import QrCodeSection from "./components/QrCodeSection";

function App() {
  return (
    <div className="app">
      <Header />
      <About />
      <Education />
      <Skills />
      <Hobbies />
      <SocialMedia />
      <QrCodeSection />
    </div>
  );
}

export default App;