import React, { useState, useEffect } from "react";

const Todoitem = ({ item, onDelete }) => {
  const [isChecked, setIchecked] = useState(false);

  useEffect(() => {
    const storedChecked = localStorage.getItem(`isChecked-${item}`);
    setIchecked(storedChecked === "true");
  }, [item]);

  const handleToggle = () => {
    setIchecked(!isChecked);
    localStorage.setItem(`isChecked-${item}`, !isChecked);
  };

  const handleDestroy = () => {
    localStorage.removeItem(`isChecked-${item}`);
    onDelete(item);
  };

  return (
    <li className={isChecked ? "completed" : ""}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={isChecked}
          onChange={handleToggle}
        />
        <label>{item}</label>
        <button className="destroy" onClick={handleDestroy} />
      </div>
      <input className="edit" defaultValue="Create a TodoMVC template" />
    </li>
  );
};

export default Todoitem;
