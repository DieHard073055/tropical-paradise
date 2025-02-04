import React from "react";
import logo from "/src/assets/logo.webp";

const Header = () => (
  <header className="bg-light-yellow p-4 text-center">
    <img src={logo} alt="Logo" className="mx-auto" />
    <h1 className="text-4xl font-bold text-dark-teal">Tropical Treasures</h1>
    <nav className="flex justify-center mt-2">
      <a href="/" className="mx-4 text-dark-teal hover:text-coral-red">
        Home
      </a>
      <a href="/souvenirs" className="mx-4 text-dark-teal hover:text-coral-red">
        Souvenirs
      </a>
      <a href="/about" className="mx-4 text-dark-teal hover:text-coral-red">
        About
      </a>
    </nav>
  </header>
);

export default Header;
