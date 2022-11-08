import React from "react";
function Bar (props){
    return (
        <div className="chart-item">
            <div  
            className="bar-item">
                <div className="bar-percent">
                    
                </div>
            </div>
            <span>{props.month}</span>
        </div>
    )
}
export default Bar;