import {useState} from 'react';

function Counter(){
    const [count,setCount] = useState(0);
    
  const ClickedCount = () => {
    setCount(count +1);
  }

  return (
    <div className='Counter'>
        <h3>{count}</h3>
        <button onClick={ClickedCount}> Click me </button>
    </div>
  )
}
export default Counter