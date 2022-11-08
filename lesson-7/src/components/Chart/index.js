import React from "react";
import "./style.css" 
import { v4 as uuidv4 } from "uuid";
import Bar from "../../Bar";
function Chart(props){
const monthArr = [
  {
  id: uuidv4(),
  month : "Jan",
  height: "100"
},
{
  id: uuidv4(),
  month : "Feb",
  height: "100"
}, 
 {
  id: uuidv4(),
  month : "Mar",
  height: "100"
},
{
  id: uuidv4(),
  month : "Apr",
  height: "100"
},
{
  id: uuidv4(),
  month : "May",
  height: "100"
},
{
  id: uuidv4(),
  month : "Jun",
  height: "100"
},
{
  id: uuidv4(),
  month : "July",
  height: "100"
},
{
  id: uuidv4(),
  month : "Aug",
  height: "100"
},
{
  id: uuidv4(),
  month : "Sep",
  height: "100"
},
{
  id: uuidv4(),
  month : "Oct",
  height: "100"
},
{
  id: uuidv4(),
  month : "Nov",
  height: "100"
},
{
  id: uuidv4(),
  month : "Dec",
  height: "100"
},
]

    return(
        <div className="chart">
            {monthArr.map((item)=>{
              return(
                <Bar
                id ={item.id}
                month={item.month}
                height={item.height}
                
                />
              )
            })}
        </div>
    )
}
export default Chart