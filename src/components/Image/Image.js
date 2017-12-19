import React from "react";
import "./Image.css";

const Image = props => (
  <div className="image">
      <img onClick={props.handleOnClick} alt={props.name} src={props.image} />
   </div>
);

export default Image;