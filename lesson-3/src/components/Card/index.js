import "./style.css";
import songs from "../../data/songs";
import React from "react";
function Card() {
  return (
    <div className="card">
      <div className="songs-card">
        {songs.map((song) => (
          <div className="item">
            <img className="cover" src = {song.imgUrl}></img>
            <div className="content">
            <div className="box">{song.name}</div>
            <div className="text-gray box mg-t8">{song.singer}</div>
            <div className="text-gray box">{song.date}</div>
            </div>
            </div>
        ))}
      </div>
    </div>
  );
}
export default Card;
