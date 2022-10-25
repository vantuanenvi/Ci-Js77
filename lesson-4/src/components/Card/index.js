import "./style.css";
import React from   "react";
import podcasts from "../../data/podcasts"
function Card({}){
    return(
        <div className="card">
        <div className="left">
        {podcasts.slice(0,3).map((podcast) =>(
            <div className="item">
                <div className="box">
                <span className="rank">{podcast.id}</span>
            <img className="cover" src= {podcast.cover}></img>
            <div className="content">
                <div className="name">{podcast.name}</div>
                <h3 className="chanel">{podcast.chanel}</h3>
                <h3 className="date">{podcast.date}</h3>
            </div>
                </div>
            </div>
        )
        )}
         </div>
        <div className="right">
        {podcasts.slice(3,6).map((podcast) =>(
            <div className="item">
                <div className="box">
                <span className="rank">{podcast.id}</span>
            <img className="cover" src= {podcast.cover}></img>
            <div className="content">
                <div className="name">{podcast.name}</div>
                <div className="chanel">{podcast.chanel}</div>
                <div className="date">{podcast.date}</div>
            </div>
                </div>
            </div>
        )
        
        )}
        </div>
       
        </div>
    
    )
}
export default Card