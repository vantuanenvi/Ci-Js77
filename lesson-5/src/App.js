import logo from './logo.svg';
import './App.css'; 
import Counter from './components/Count'
import Student from './components/Student';
function App() {
  
  return (
    <div className="App">
      <div><Counter/></div>
      <div><Student /> </div>
    </div>
  );
}

export default App;
