import "./style.css";
import songs from "../../data/songs";
import React from "react";
function Card({index}) {
  return (
    <div className="card">
      <div className="songs-card">
        {songs.map((song) => (
          <div className="item">
            <img src = {`img-songs/${index+1}.png`}></img>
            <div className="box">{song.name}</div>
            <div className="text-gray box">{song.singer}</div>
            <div className="text-gray box">{song.date}</div>
            </div>
        ))}
      </div>
    </div>
  );
}
export default Card;
