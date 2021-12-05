import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import TravelNav from "./components/TravelNav";
import data from "./data";
import dataTravel from "./dataTravel";
import TravelCard from "./components/TravelCard";

export default function App() {
  console.log(data);
  let arr = data.map((e) => {
    return <Card key={e.id} {...e} />;
  });

  let travelData = dataTravel.map((e) => {
    return <TravelCard key={e.id} {...e} />;
  });
  console.log(arr);
  console.log(travelData);
  return (
    <div>
      <Navbar />
      <Hero />
      <section className="card-list">{arr}</section>
      <TravelNav />
      <section className="travel_list">{travelData}</section>
    </div>
  );
}
