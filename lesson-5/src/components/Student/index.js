import {useState} from 'react';

function Student(){
    const [student,setStudent] = useState({name:'MindXer',age:7});

    const clickIncreaseAge = () =>{
        setStudent({...student, age: student.age + 1})
    }
    return(
    <div className='Content'>
        <h3> Hello! I'm {student.name}. I'm {student.age} years old!</h3>
        <button onClick={clickIncreaseAge}>Increase Age me</button>
    </div>
    )
}
export default Student