import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function ExpenseItem(props) {
  return (
    <div className="item">
      <div className="date"> 
      <span className="month">{props.month}</span>
      <span className="year">{props.year}</span>
      <span className="boil">{props.date}</span>
      </div>
      <p className="name">{props.name}</p>
      <span className="spend">{props.spend}</span>
    </div>
  );
}
export default ExpenseItem;
