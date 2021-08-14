// methods
// getBy, findBy and queryBy: 1 result only (error otherwise)
// getAllBy, findAllBy, queryAllBy: array of result(s)
// findBy and findAllBy to use async/await
// queryBy null when no result, queryAllBy array if no match

// attributes
// accessible by users: getByRole, getByLabelText, getByPlaceholderText, getByText
// semantic queries for screen readers: getByAltText, getByTitle
// test id in last resort: getByTestId

import { render, screen } from "@testing-library/react";
import Header from "../Header";

// GET BY

it("should render title passed into props", () => {
  render(<Header title="My Header" />);
  const headingElement = screen.getByText(/my header/i);
  expect(headingElement).toBeInTheDocument();
});

// it("should render heading", () => {
//   render(<Header title="My Header" />);
//   const headingElement = screen.getByRole("heading");
//   expect(headingElement).toBeInTheDocument();
// });

// with multiple titles
it("should render heading", () => {
  render(<Header title="My Header" />);
  const headingElement = screen.getByRole("heading", { name: "My Header" });
  expect(headingElement).toBeInTheDocument();
});

it("should get H3 title", () => {
  render(<Header title="My Header" />);
  const headingElement = screen.getByTitle("Header");
  expect(headingElement).toBeInTheDocument();
});

it("should get h1 with data-testid", () => {
  render(<Header title="My Header" />);
  const headingElement = screen.getByTestId("header-1");
  expect(headingElement).toBeInTheDocument();
});

// GET ALL BY

it("should render 2 headers", () => {
  render(<Header title="My Header" />);
  const headingElements = screen.getAllByRole("heading");
  expect(headingElements.length).toBe(2);
});

// FIND BY

it("should render title passed into props", async () => {
  render(<Header title="My Header" />);
  const headingElement = await screen.findByText(/my header/i);
  expect(headingElement).toBeInTheDocument();
});

// QUERY BY

it("should not be rendered as title", () => {
  render(<Header title="My Header" />);
  const headingElement = screen.queryByText(/false header/i);
  expect(headingElement).not.toBeInTheDocument();
});
