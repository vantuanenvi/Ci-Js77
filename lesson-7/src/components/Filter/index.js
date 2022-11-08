import React from "react";

function Filter(){
    return(
        <div className="filler-bar">
        <p className="add-name"> Filler by year</p>
        <input className="date-filler" type="date" 
        placeholder="2022"
        min = "2019-01-01" max = "2022-12-31" ></input>
        </div>
    )
}
export default Filter