import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateTaskState } from "../lib/store";
import Task from "./Task";
// import PropTypes from "prop-types";

// export default function TaskList({ loading, tasks, onPinTask, onArchiveTask }) {
export default function TaskList() {
  // const events = {
  //   onPinTask,
  //   onArchiveTask,
  // };

  const tasks = useSelector((state) => {
    const tasksInOrder = [
      ...state.taskBox.tasks.filter((t) => t.state === "TASK_PINNED"),
      ...state.taskBox.tasks.filter((t) => t.state !== "TASK_PINNED"),
    ];
    const filteredTasks = tasksInOrder.filter(
      (t) => t.state === "TASK_INBOX" || t.state === "TASK_PINNED"
    );
    return filteredTasks;
  });

  const { status } = useSelector((state) => state.taskBox);

  const dispatch = useDispatch();

  const pinTask = (value) => {
    dispatch(updateTaskState({ id: value, newTaskState: "TASK_PINNED" }));
  };

  const archiveTask = (value) => {
    dispatch(updateTaskState({ id: value, newTaskState: "TASK_ARCHIVED" }));
  };

  const LoadingRow = (
    <div className="loading-item">
      <span className="glow-checkbox" />
      <span className="glow-text">
        <span>Loading</span> <span>cool</span> <span>state</span>
      </span>
    </div>
  );

  if (status === "loading") {
    return (
      <div className="list-items" data-testid="loading" key="loading">
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
      </div>
    );
  }

  if (tasks.length === 0) {
    return (
      <div className="list-items" data-testid="empty" key="empty">
        <div className="wrapper-message">
          <span className="icon-check" />
          <p className="title-message">You have no tasks</p>
          <p className="subtitle-message">Sit back and relax</p>
        </div>
      </div>
    );
  }

  // const tasksInOrder = [
  //   ...tasks.filter((t) => t.state === "TASK_PINNED"),
  //   ...tasks.filter((t) => t.state !== "TASK_PINNED"),
  // ];

  return (
    <div className="list-items" data-testid="success" key="success">
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onPinTask={(task) => pinTask(task)}
          onArchiveTask={(task) => archiveTask(task)}
        />
      ))}
    </div>
  );
}

// TaskList.propTypes = {
//   loading: PropTypes.bool,
//   tasks: PropTypes.arrayOf(Task.propTypes.task).isRequired,
//   onPinTask: PropTypes.func,
//   onArchiveTask: PropTypes.func,
// };

// TaskList.defaultProps = {
//   loading: false,
// };
