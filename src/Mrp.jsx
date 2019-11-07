import React from "react";

const Mrp = props => {
  return (
    <div className="Mrp-card" key={props.id}>
      <h2>{props.title}</h2>
      <img className="mrp-img" alt="NASA Rover" src={props.url}/>
      <h2>{props._earth_date}</h2>
      <p>{props.full_name}</p>
      <p> Mars Rover Image </p>
    </div>
  );
};

export default Mrp;
