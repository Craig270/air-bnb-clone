import React from "react";
import { SiAirbnb } from "react-icons/si";
import { FaBeer } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="Navbar">
      <h1 className="Navbar_title">
        <SiAirbnb />
        airbnb
      </h1>
    </nav>
  );
}
