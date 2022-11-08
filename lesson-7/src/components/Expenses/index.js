import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ExpenseItem from "../ExpenseItem";
import Header from "../Header";
import Filter from "../Filter";
import Chart from "../Chart";

function Expenses(props) {
  const [expenseList, setExpenseList] = useState([
    {
      id: uuidv4(),
      name: "Some Book",
      month: "January",
      year: "2022",
      date: " 16",
      spend: "$50",
    },
    {
      id: uuidv4(),
      name: "Electric Bill",
      month: "March",
      year: "2022",
      date: " 15",
      spend: "$40",
    },
    {
      id: uuidv4(),
      name: "Food",
      month: "February",
      year: "2022", 
      date: "29",
      spend: "$150",
    },
  ]);
  const [test,setTest] = useState(false)
  const updateItem = (arr) => {
    setExpenseList(arr);
    setTest(!test);
  }
  return (
    <div className="App">
      <Header updateForm={updateItem} arrItem={expenseList}/>
      <div className="expense-container">
        <Filter/>
        <Chart/>
        <div className="content">
          {expenseList.map((item) => {
            return (
              <ExpenseItem
                id={item.id}
                name={item.name}
                date={item.date}
                spend={item.spend}
                year={item.year}
                month={item.month}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default Expenses;
