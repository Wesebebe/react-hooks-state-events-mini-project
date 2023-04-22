import React from "react";
import Task from "./Task";

function TaskList({taskData}) {
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      <Task key={taskData[0]} text={taskData[0].text} category={taskData[0].category} />
      <Task key={taskData[1]} text={taskData[1].text} category={taskData[1].category} />
      <Task key={taskData[2]} text={taskData[2].text} category={taskData[2].category} />
      <Task key={taskData[3]} text={taskData[3].text} category={taskData[3].category} />
      <Task key={taskData[4]} text={taskData[4].text} category={taskData[4].category} />
      <Task key={taskData[5]} text={taskData[5].text} category={taskData[5].category} />
      <Task key={taskData[6]} text={taskData[6].text} category={taskData[6].category} />
    </div>
  );
}

export default TaskList;
