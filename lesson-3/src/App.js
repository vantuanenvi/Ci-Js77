import "./App.css";
import React from "react";
import Card from "./components/Card/index";
import Title from "./components/Tittle";
function App() {
  return (
    <div className="App">
      <div className="title">
        <h2 className="songs">BÀI HÁT</h2>
        <h2 className="album"> ALBUM</h2>
      </div>
      <br></br>
      <div className="gird-content">
        <Card></Card>
      </div>
      <div className="container">
      <div className="heading"> Giai Điệu Ký Ức</div>
      <br></br>
      <div>
        <Title></Title>
      </div>
      </div>
    </div>
  );
}

export default App;
