import React from 'react';
import ExpenseForm from '../ExpenseForm';
import { useState } from 'react';

function Header(props){
  const [toggleForm,setToggleForm] = useState(false);
  const showFormExpense = () => {
    setToggleForm(!toggleForm)
  }
    return(
        <div className="App-header">
        {!toggleForm && <button onClick={showFormExpense}  className="btn">
          ADD NEW EXPENSE
        </button>}
       {toggleForm && <ExpenseForm  addItem={props.updateForm} arrItem={props.arrItem} 
       handleOnCancel={showFormExpense} />}
      </div>
    )
}
export default Header