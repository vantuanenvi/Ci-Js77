import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Header from "../Header";
import Filter from "../Filter";
import Chart from "../Chart";

function Expenses(props) {
  const [expenseList, setExpenseList] = useState([
    {
      id: uuidv4(),
      date :{
        year: "2022",
        day: " 16",
        month: "January",
        monthId: 1,
      },
      name: "Some Book",
      spend: "50",
      
    },
    {
      id: uuidv4(),
      date :{
        year: "2022",
        day: " 16",
        month: "March",
        monthId: 3,

      },
      name: "New Phone",
      spend: "200",
      
    },
    {
      id: uuidv4(),
      date :{
        year: "2022",
        day: " 16",
        month: "February",
        monthId: 2,

      },
      name: "Drink",
      spend: "100",
      
    },
    
  ]);
  const [year, setYear] = useState(2022)
  const [test,setTest] = useState(false)
  const updateItem = (arr) => {
    setExpenseList(arr);
    setTest(!test);
  }
  return (
    <div className="App">
      <Header updateForm={updateItem} arrItem={expenseList}/>
      <div className="expense-container">
        <Filter  setYear={setYear} year={year}/>
        <Chart expenseData={expenseList} year={year}/>
        <div className="content">
          {expenseList.map((item) => {
            return (
              <div className="item">
              <div className="date-container"> 
              <span className="month">{item.date.month}</span>
              <span className="year">{item.date.year}</span>
              <span className="day">{item.date.day}</span>
              </div>
              <p className="name">{item.name}</p>
              <span className="spend">${item.spend}</span>
            </div>
            
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default Expenses;
