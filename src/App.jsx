import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";

export default function App() {
  console.log(data);
  let arr = data.map((e) => {
    return (
      <Card
        img={e.coverImg}
        rating={e.stats.rating}
        reviewCount={e.stats.reviewCount}
        location={e.location}
        title={e.title}
        price={e.price}
      />
    );
  });
  return (
    <div>
      <Navbar />
      <Hero />
      {arr}
    </div>
  );
}
