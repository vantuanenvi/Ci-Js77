import {useState} from 'react';

function Counter(){
    const [count,setCount] = useState(0);

  const ClickedCount = () => {
    setCount(count +1);
  }

  return (
    <div className='Counter'>
        <h3>{count} Clicked</h3>
        <button onClick={ClickedCount}> Click</button>
    </div>
  )
}
export default Counter