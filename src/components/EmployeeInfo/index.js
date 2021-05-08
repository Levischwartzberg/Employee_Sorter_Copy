import React from "react";
// import CardBtn from "../CardBtn";
import "./style.css";

function EmployeeInfo(props) {
  return (
    <div>
      <div className="employee">
        <div
          className="image"
          style={{
            backgroundImage: props.image ? `url(${props.image})` : "none"
          }}
          >
          {!props.image && <i className="fa fa-spinner fa-spin" aria-hidden="true" />}
          {/* <CardBtn
            onClick={props.handleBtnClick}
            data-value="pass"
          />
          <CardBtn
            onClick={props.handleBtnClick}
            data-value="pick"
          /> */}
          </div>
          <div className="first-name">
            {props.firstName}
          </div>
          <div className="last-name">
            {props.lastName}
          </div>
          <div className="email">
            {props.email}
          </div>
          <div className="phone">
            {props.phone}
          </div>
      </div>
    </div>
    
  );
}

export default EmployeeInfo;
