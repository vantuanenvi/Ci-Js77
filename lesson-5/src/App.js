import logo from './logo.svg';
import './App.css'; 
import Counter from './components/Count'
import Student from './components/Student';
import CountClass from './components/CountClass';
import StudentClass from './components/StudentClass';
function App() {
  
  return (
    <div className="App">
      <div><Counter /></div>
      <div><Student /> </div>
      <div><CountClass /></div>
      <div><StudentClass /></div>
    </div>
  );
}

export default App;
