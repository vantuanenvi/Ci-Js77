import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
function Header(props) {
  const [toggleForm, setToggleForm] = useState(false);
  const showFormExpense = () => {
    setToggleForm(!toggleForm);
  };
  const [name, setName] = useState("");
  const [spend, setSpend] = useState("");
  const [date, setDate] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAmountChange = (e) => {
    setSpend(e.target.value);
  };

  const handleDateChange = (e) => {
    const date = new Date(e.target.value);
    setDate(date);
  };

  const handleAddItem = () => {
    let arr = props.arrItem;
    const newObject = {
      id: uuidv4(),
      name: name,
      date: {
        month: date.toLocaleString("default", { month: "long" }),
        year: date.getFullYear(),
        day: date.getDate(),
      },
      spend: spend,
    };
    arr.push(newObject);
    props.updateForm(arr);
    setName("");
    setSpend("");
    // setDate('default')
    console.log(newObject.date.year);
  };
  return (
    <div className="App-header">
      {!toggleForm && (
        <button onClick={showFormExpense} className="btn">
          ADD NEW EXPENSE
        </button>
      )}
      {toggleForm && (
        <div className="form">
          <div className="input-container">
            <div className="input-form">
              <span>Name</span>
              <input
              value={name}
                onChange={handleNameChange}
                placeholder="Enter name here"
              ></input>
            </div>
            <div className="input-form amount">
              <span className="amount">Amount</span>
              <input
              value={spend}
                onChange={handleAmountChange}
                placeholder="Enter amount here"
              ></input>
            </div>
            <div className="input-form">
              <span>Date</span>
              <input
                type="date"
                onChange={handleDateChange}
                placeholder="dd/mm/yyyy"
              ></input>
            </div>
          </div>
          <div className="form-button">
            <button onClick={handleAddItem} className="add-expense">
              ADD
            </button>
            <button onClick={showFormExpense} className="cancel-btn">
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
export default Header;
