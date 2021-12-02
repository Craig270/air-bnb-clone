import React from "react";

export default function Card() {
  return (
    <div className="card">
      <img src="../images/katie-zaferes.png" className="card_img" />
      <div className="card_stats">
        <img src="../images/star.png" alt="star" className="card_star" />
        <span>5.0</span>
        <span className="gray">(6)•</span>
        <span className="gray">USA </span>
      </div>
      <p>Life Lessons with Katie Zaferes</p>
      <p>
        <span className="bold">From $136</span> / person
      </p>
    </div>
  );
}
