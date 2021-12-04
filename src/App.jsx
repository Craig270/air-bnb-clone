import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";

export default function App() {
  console.log(data);
  let arr = data.map((e) => {
    return <Card key={e.id} {...e} />;
  });
  console.log(arr);
  return (
    <div>
      <Navbar />
      <Hero />
      <section className="card-list">{arr}</section>
    </div>
  );
}
