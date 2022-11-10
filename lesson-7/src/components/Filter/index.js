import React from "react";

const Filter =({setYear}) => {
    const years =[2022,2021,2023];
    const handleChangeYear = (e) =>{
        setYear(e.target.value);
    }
    return(
        <div className="filler-bar" onChange={handleChangeYear}>
        <p className="add-name"> Filler by year</p>
        <select className="date-filler" 
        >
            {years.map((year)=>{
                return <option value={year}>{year}</option>
            })}
        </select>
        </div>
    )
}
export default Filter