import React, { useState } from "react";

import TodoList from "./Todolist";

const Header = () => {
  const [job, setJob] = useState("");
  const [jobs, setJobs] = useState(() => {
    const storageJob = JSON.parse(localStorage.getItem("jobs"));
    return storageJob ?? [];
  });


  const handleClick = () => {
    if (job.trim() !== "") { 
      setJobs((prev) => {
        const newJobs = [...prev, job];
        const jsonJobs = JSON.stringify(newJobs);
        localStorage.setItem("jobs", jsonJobs);
        return newJobs;
      });
      setJob("");
    }
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };
  const handleDelete = (deletedItem) => {
    const updatedJobs = jobs.filter((item) => item !== deletedItem);
    setJobs(updatedJobs);
    localStorage.setItem("jobs", JSON.stringify(updatedJobs));
  };
  return (
    <>
      <header className="header">
        <h1>Todo List</h1>
        <div className="add-todo">
          <input
            className="new-todo"
            placeholder="Công việc mới..."
            autoFocus=""
            value={job}
            onChange={(e) => setJob(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button className="add" onClick={handleClick}>
            Thêm
          </button>
        </div>
      </header>
     <TodoList
     jobs={jobs}
     handleDelete={handleDelete}
     />
 
    </>
  );
};

export default Header;
