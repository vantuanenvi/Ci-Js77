import "../Card/style.css";
import React from "react";
import loveSongs from "../../data/lovesongs";
function Title() {
  return (
    <div>
      <div className="love-title">
        <div className="love-songs">
          {loveSongs.map((loveSong) => (
            <div className="love-card">
              <img className="picture-title"></img>
              <div className="love-tittle">{loveSong.title}</div>
              <div className="love-des">{loveSong.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Title;
