import React from "react";

export default function Card(props) {
  let sticker;
  if (props.openSpots === 0) {
    sticker = "SOLD OUT";
  } else if (props.location === "Online") {
    sticker = "ONLINE";
  }
  return (
    <div className="card">
      {sticker && <div className="card_soldOut">{sticker}</div>}
      <img src={`../images/${props.coverImg}`} className="card_img" />
      <div className="card_stats">
        <img src="../images/star.png" alt="star" className="card_star" />
        <span>{props.stats.rating}</span>
        <span className="gray">({props.stats.reviewCount})•</span>
        <span className="gray">{props.location} </span>
      </div>
      <p className="title">{props.title}</p>
      <p>
        <span className="bold">From ${props.price}</span> / person
      </p>
    </div>
  );
}
