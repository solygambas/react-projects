import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Todo from "../Todo";

const MockTodo = () => {
  return (
    <BrowserRouter>
      <Todo />
    </BrowserRouter>
  );
};

const addTask = (tasks) => {
  const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
  const buttonElement = screen.getByRole("button", { name: /Add/i });
  tasks.forEach((task) => {
    fireEvent.change(inputElement, {
      target: { value: task },
    });
    fireEvent.click(buttonElement);
  });
};

// integration test

describe("Todo", () => {
  it("should render added todo in todolist", () => {
    render(<MockTodo />);
    addTask(["Go Grocery Shopping"]);
    const divElement = screen.getByText(/Go Grocery Shopping/i);
    expect(divElement).toBeInTheDocument();
  });

  it("should render added todos in todolist", () => {
    render(<MockTodo />);
    const tasks = ["Go Grocery Shopping", "Pet Cats", "Learn JS"];
    addTask(tasks);
    const divElements = screen.getAllByTestId("task-container");
    expect(divElements.length).toBe(3);
  });

  it("should render added todos without completed status", () => {
    render(<MockTodo />);
    const tasks = ["Go Grocery Shopping"];
    addTask(tasks);
    const divElement = screen.getByText(/Go Grocery Shopping/i);
    expect(divElement).not.toHaveClass("todo-item-active");
  });

  it("should add completed status when todo is clicked", () => {
    render(<MockTodo />);
    const tasks = ["Go Grocery Shopping"];
    addTask(tasks);
    const divElement = screen.getByText(/Go Grocery Shopping/i);
    fireEvent.click(divElement);
    expect(divElement).toHaveClass("todo-item-active");
  });
});
