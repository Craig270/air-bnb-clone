import React from "react";
import { MdLocationOn } from "react-icons/md";

export default function TravelCard(props) {
  return (
    <div className="travel_card_container">
      <img className="travel_img" src={props.imageUrl}></img>

      <div className="travel_info">
        <div className="travel_header">
          <div className="travel_logo">
            <MdLocationOn />
          </div>
          {props.location}
          <a
            className="google_link"
            href="http://www.google.com"
            target="_blank"
          >
            View on Google Maps
          </a>
          <h3>{props.title}</h3>
        </div>

        <div className="travel_dates">
          {props.startDate}-{props.endDate}
        </div>
        <div className="travel_para">
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
}
