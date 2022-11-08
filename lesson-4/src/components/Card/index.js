import "./style.css";
import React, { Component } from "react";
import podcasts from "../../data/podcasts";
import Item from "../Item";
function Card() {
  return (
    <div className="card">
      <div className="left">
        {podcasts.slice(0, 3).map((podcast) => (
          <Item
          id = {podcast.id}
          src = {podcast.cover}
          name = {podcast.name}
          date = {podcast.date}
          update = {podcast.update}
          />
        ))}
      </div>
      <div className="right">
        {podcasts.slice(3, 6).map((podcast) => (  
    <Item
    id = {podcast.id}
    src = {podcast.cover}
    name = {podcast.name}
    date = {podcast.date}
    update = {podcast.update}
    />
        ))}
      </div>
    </div>
  );
}
export default Card;
