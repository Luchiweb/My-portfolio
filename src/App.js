import React from "react";
import "./styles/main.css";
import { Footer } from "./components/footer/Footer";
import { Navbar } from "./components/navbar/Navbar";
import { Home } from "./pages/home/Home";
import { Projects } from "./pages/projects/Projects";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Project } from "./pages/project/Project";
import ScrollToTop from "./utils/scrollToTop";
import { Contacts } from "./pages/contacts/Contacts";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="My-portfolio/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<Project />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
