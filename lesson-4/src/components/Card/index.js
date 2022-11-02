import "./style.css";
import React, { Component } from "react";
import podcasts from "../../data/podcasts";
import { FaBookmark, FaPlay } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
function Card({}) {
  return (
    <div className="card">
      <div className="left">

        {podcasts.slice(0, 3).map((podcast) => (
          <div className="item">
            <div className="box">
              <span className="rank">{podcast.id}</span>
              <div className="play-btn">
                <button className="hidden">
                  <FaPlay />
                </button>
              </div>
              <img className="cover" src={podcast.cover}></img>
      <div className="sum">

              <div className="content">
                <div className="name">{podcast.name}</div>
                <h3 className="chanel">{podcast.chanel}</h3>
             
                  <div className="date">
                    <span className="date">{podcast.date}</span>
                    <span className="update">{podcast.update}</span>
                  </div>
                  </div>
              </div>
                  <div className="mark-more">
                  <span className="right-item">
                    {" "}
                    <FaBookmark className="icon" />{" "}
                    <BsThreeDots className="icon" />
                  </span>
                  </div>
                  </div>

              
            </div>
        ))}
      </div>
   

      <div className="right">

        {podcasts.slice(3, 6).map((podcast) => (

          <div className="item">
            <div className="box">
              <span className="rank">{podcast.id}</span>
              <div className="play-btn">
                <button className="hidden">
                  <FaPlay />
                </button>
              </div>
              <img className="cover" src={podcast.cover}></img>
        <div className="sum">

              <div className="content">
                <div className="name">{podcast.name}</div>
                <div className="chanel">{podcast.chanel}</div>
                <div className="date">
                  <span className="date">
                    {podcast.date}
                  </span>
                  <span className="update">{podcast.update}</span>
                  </div>
                  </div>
              </div>
            </div>

                  <div className="mark-more">
                  <span className="right-item">
                    {" "}
                    <FaBookmark className="icon" />{" "}
                    <BsThreeDots className="icon" />
                  </span>
                  </div>
           
    </div>

        ))}
      </div>
    </div>

  );
}
export default Card;
