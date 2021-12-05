import React from "react";
import { SiAirbnb } from "react-icons/si";
import { FaGlobeAmericas } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="travel_nav">
      <h3 className="travel_title">
        <section className="travel_logo">
          {" "}
          <FaGlobeAmericas />{" "}
        </section>
        my travel journal.
      </h3>
    </nav>
  );
}
