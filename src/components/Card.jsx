import React from "react";

export default function Card(props) {
  return (
    <div className="card">
      <img src={`../images/${props.img}`} className="card_img" />
      <div className="card_stats">
        <img src="../images/star.png" alt="star" className="card_star" />
        <span>{props.rating}</span>
        <span className="gray">({props.reviewCount})•</span>
        <span className="gray">{props.country} </span>
      </div>
      <p className="title">{props.title}</p>
      <p>
        <span className="bold">From ${props.price}</span> / person
      </p>
    </div>
  );
}
