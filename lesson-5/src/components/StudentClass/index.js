import React from "react";
import{useState} from 'react'
class StudentClass extends React.Component{
    constructor(props){
    super(props);
    this.state = {
        students : {
            name: 'Mindxer',
            age: 8,
        },    
    };     
}
    ClickIncreaseAge = (prev)=>
    {
     function setStudent(prev){
        console.log(prev)
            return {... prev, age: prev.age + 1  }
        }
        setStudent(this.state.students)
    }
  

    render(){
        return(
            <div>
                <p> Hello I am {this.state.students.name} and i am {this.state.students.age} years old</p>
                <button onClick={this.ClickIncreaseAge}>
                Click to Increase age of me </button>
            </div>
        )
    }
    }
export default StudentClass
