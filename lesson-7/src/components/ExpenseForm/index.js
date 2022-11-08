import React from "react";
import {useState} from "react"
import { v4 as uuidv4 } from "uuid";

function ExpenseForm(props){
    const [name,setName] = useState('');
    const [spend,setSpend] = useState('');
    const [date,setDate] = useState('')
    // get value 3 input
    const handleNameChange = (e) =>{
        setName(e.target.value)
       
    }

    const handleAmountChange = (e) => {
        setSpend(e.target.value)
    }
    
    const handleDateChange = (e) => {
       const date = new Date(e.target.value)
        setDate(date)
    }
    // click add to add value to array
    const handleAddItem = () =>{
        let arr = props.arrItem;
        const newObject = {
                id: uuidv4(),
                name: name,
                month: date.toLocaleString('default', { month: 'long' }),
                year: date.getFullYear(),
                date: date.getDate(),
                spend: "$" + spend ,
              
        };
        arr.push(newObject);
        props.addItem(arr);
        console.log(arr)

    }
    


    return (
        <div className="form">
            <div className="input-container">
            <div className="input-form">
            <span>Name</span><input onChange={handleNameChange} placeholder="Enter name here"></input>
            </div>
            <div className="input-form amount">
            <span className="amount">Amount</span><input onChange={handleAmountChange} placeholder="Enter amount here"></input>
            </div>
            <div  className="input-form">
           <span>Date </span><input type="date" onChange={handleDateChange} placeholder="dd/mm/yyyy"></input>
            </div>
            </div>
            <div className="form-button">
                <button onClick={props.handleOnCancel && handleAddItem}   className="add-expense">ADD</button>
                <button onClick={props.handleOnCancel} className="cancel-btn">Cancel</button>
            </div>
        </div>
    )
}
export default ExpenseForm