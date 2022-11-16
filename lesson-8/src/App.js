import React from 'react';



import './App.css';
import NavBar from './components/NavBar';
import Login from './components/Login';
import Footer from './components/Footer';
import UserContextProvider from './components/UserContext';

function App() {
  return (
    <UserContextProvider >
    <div className="App">
      <NavBar  />
      <Login >
      </Login>
      <Footer/>
    </div>
    </UserContextProvider>

  );
}

export default App;
