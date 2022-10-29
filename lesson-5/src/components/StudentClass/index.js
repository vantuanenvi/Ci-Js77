import React from "react";
import { useState } from "react";
class StudentClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      students: {
        name: "Mindxer",
        age: 8,
      },
    };
  }
  ClickIncreaseAge = (state) => {
    this.setState((state) => ({
      students: { age: this.state.students.age + 1 },
    }));
  };
  render() {
    return (
      <div>
        <p>
          Hello I am {this.state.students.name} and i am{" "}
          {this.state.students.age} years old
        </p>
        <button onClick={this.ClickIncreaseAge}>
          Click to Increase age of me
        </button>
      </div>
    );
  }
}
export default StudentClass;
