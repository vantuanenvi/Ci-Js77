import React from "react";
import "./style.css" 

function Chart({expenseData,year}){
let monthData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let maxMonthData = 0;
const monthArr = [    
"Jan",
"Feb",
"Mar",
"Apr",
"May",
"Jun",
"Jul",
"Aug",
"Sep",
"Oct",
"Nov",
"Dec"
];
expenseData.filter((data)=>
data.date.year === parseInt(year)).map((data)=>{
    return monthData[data.date.monthId -1] += parseInt(data.spend);
});
console.log(expenseData)

monthData.map((data)=>{
    return((maxMonthData < data)? maxMonthData = data : 0)
})
    return(
        <div className="chart">
            {monthArr.map((month, index)=>{
              return(
        <div key={index}>
            <div  className="bar-container">
            <div className="bar-percent"
                 style={{height : `${parseInt(maxMonthData) === 0 ? 0 : month/parseInt(maxMonthData)*100}%`}}>

                 </div>
                </div>
                <div>{monthArr[index]}</div>
            </div>
              )
            })}
        </div>
    )
}
export default Chart