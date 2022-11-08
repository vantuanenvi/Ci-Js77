import React from "react";
import { FaBookmark, FaPlay } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";


function Item(props){
    return (
          <div className="item">
            <div className="box">
              <span className="rank">{props.id}</span>
              <div className="play-btn">
                <button className="hidden">
                  <FaPlay />
                </button>
              </div>
              <img className="cover" src={props.src}></img>
              <div className="sum">
                <div className="content">
                  <div className="name">{props.name}</div>
                  <h3 className="chanel">{props.chanel}</h3>
                  <div className="date">
                    <span className="date">{props.date}</span>
                    <span className="update">{props.update}</span>
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
    )
}
export default Item