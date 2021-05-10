import React from "react";
import "./style.css";

function CardBtn(props) {
  return (
    <button 
      onClick={props.handleBtnClick} 
      className={`card-btn ${props["data-value"]}`} 
      data-value={props["data-value"]} 
    />
  );
}

export default CardBtn;
