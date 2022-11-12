import React from "react";
import "./style.css";

function Chart({ expenseData, year }) {
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
    "Dec",
  ];
  console.log('expenseData',expenseData);


  expenseData
    .filter((data) => data.date.year === parseInt(year))
    .map((data) => {
      return (monthSpend[data.date.monthId - 1] += parseInt(data.spend));
    });


  monthSpend.map((data) => {
    return ((maxMonthSpend < data) ? maxMonthSpend = data : 0);
  });
  console.log('maxMonthSpend',maxMonthSpend);
  
  return (
    <div className="chart">
      {monthSpend.map((month, index) => {
        return (
          <div key={index}>
            <div className="bar-container">
              <div
                className="bar-percent "
                style={{
                  height: `${
                    parseInt(maxMonthSpend) === 0 ? 0 : (month / parseInt(maxMonthSpend)) * 100
                  }%`,
                }}
              ></div>
            </div>
            <div className="month-chart">{monthArr[index]}</div>
          </div>
        );
      })}
    </div>
  );
}
export default Chart;
