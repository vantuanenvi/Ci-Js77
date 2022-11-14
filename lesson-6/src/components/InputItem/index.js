import React from "react";
import "./style.css";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
function InputItem(props) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };
  const handleAddNewItem = () => {
    if (name && phone) {
      const newItem = {
        id: uuidv4(),
        name: name,
        numberPhone: phone,
        isDeleted: false,
        
      };
      props.addContact(newItem);
      //handleChangeList(newItem)
      setName("");
      setPhone("");
    }
  };

  return (
    <div className="header">
      <input
        onChange={handleNameChange}
        className="mr-1 flex-1"
        type="text"
        placeholder="Tên"
        value={name}
      />
      <input
        onChange={handlePhoneChange}
        className="mr-1"
        type="text"
        placeholder="Điện thoại"
        value={phone}
      />
      <button onClick={handleAddNewItem}>THÊM</button>
    </div>
  );
}

export default InputItem;
