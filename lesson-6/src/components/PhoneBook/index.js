import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import InputItem from "../InputItem";
import PhoneItem from "../PhoneItem";
import "./style.css";

function PhoneBook(props) {
  const [phoneList, setPhoneList] = useState([
    {
      id: uuidv4(),
      name: "Alice",
      numberPhone: "(816)-403-5456",
      isDeleted: false,
    },
    {
      id: uuidv4(),
      name: "Bob",
      numberPhone: "(572)-566-5456",
      isDeleted: false,
    },
    {
      id: uuidv4(),
      name: "Kaylin",
      numberPhone: "(572)-566-5456",
      isDeleted: false,
    },
  ]);

  const [keyword, setKeyWord] = useState("");

  const handleChangeList = (item) => {
    setPhoneList([...phoneList,item])
  };
  
  const findKeyWord = (e) => {
    setKeyWord(e.target.value)
  } 

    const deleteDuplicate = () =>{
      const newList = phoneList.filter((item)=>{
        const firstElementDuplicate = phoneList.find((element)=>
          element.numberPhone === item.numberPhone
        );
        return firstElementDuplicate === item;
      });
      setPhoneList(newList);
    }
    const handleToggleDelete = (item) => {
      const newList = phoneList.map((element) => {
        if (element.id === item.isDeleted){
          return {
            ...element,
            isDeleted: !element.isDeleted,
          };
        }
        return element;
      });
      setPhoneList(newList);
    };

  return (
    <div className="phone-book-container">
      <InputItem addContact={handleChangeList} />
      <div className="search-bar mt-1">
        <input onChange={findKeyWord} className="mr-1 flex-1" type="text" placeholder="Tìm kiếm" />
        <button className="mr-1">TÌM KIẾM</button>
        <button onClick={deleteDuplicate}>XÓA TRÙNG</button>
      </div>
      <div className="phone-list mt-1">
        {phoneList.filter(item =>{
          return (
          item.name.toUpperCase().includes(keyword.toUpperCase()) || 
          item.numberPhone.toLowerCase().includes(keyword.toLowerCase())
          );
        })
        .map((item) => {
          return (
            <PhoneItem
              key={item.id}
              name={item.name}
              numberPhone={item.numberPhone}
              isDeleted = {item.isDeleted}
              onDelete = {() => handleToggleDelete(item)}
            />
          );
        })}
      </div>
    </div>
  );

}

export default PhoneBook;
