import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Souvenirs from "./components/Souvenirs";
import About from "./components/About";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/tropical-paradise/" element={<Home />} />
        <Route path="/tropical-paradise/souvenirs" element={<Souvenirs />} />
        <Route path="/tropical-paradise/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
