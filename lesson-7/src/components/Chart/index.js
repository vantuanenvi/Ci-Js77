import React from "react";
import "./style.css" 

function Chart({expenseData,year}){
let monthSpend = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let maxMonthSpend = 0;
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
parseInt(data.date.year) === parseInt(year)).map((data)=>{
    return monthSpend[data.date.monthId -1] += parseInt(data.spend);
});


monthSpend.map((data)=>{
    return((maxMonthSpend < data) ? maxMonthSpend = data : 0)
})


    return(
        <div className="chart">
            {monthSpend.map((month, index)=>{
              return(
        <div key={index}>
            <div  className="bar-container">
            <div className="bar-percent "
                style={{height :`${maxMonthSpend === 0 ? 0: month/maxMonthSpend * 100}%`}}></div>
                </div>
                <div className="month-chart">{monthArr[index]}</div>
            </div>
              )
            })}
        </div>
    )
}
export default Chart