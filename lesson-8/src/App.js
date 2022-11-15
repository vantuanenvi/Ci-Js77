import React from 'react';
import { useState } from 'react';


import './App.css';
import NavBar from './components/NavBar';
import Login from './components/Login';
import Footer from './components/Footer';
import UserContext from './components/UserContext';

function App() {
  const [user, setUser] = useState('')  
  const [toggleWelcome,setToggleWelcome] = useState(false);
 

  return (
    <UserContext.Provider value={{user: user, setUser: setUser}}>
    <div className="App">
      <NavBar  />
      <Login >
      </Login>
      <Footer/>

    </div>

    </UserContext.Provider>

  );
}

export default App;
