import React from "react";

import Todoitem from "./Todoitem";

const TodoList = ({ jobs, handleDelete }) => {
  return (
    <section className="main">
    <input id="toggle-all" className="toggle-all" type="checkbox" />
    <label htmlFor="toggle-all"></label>
    <ul className="todo-list">
      {jobs.map((item, index) => (
        <Todoitem key={index} item={item} onDelete ={handleDelete} />
      ))}
    </ul>
  </section>
  );
};

export default TodoList;
