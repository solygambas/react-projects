import { render, screen } from "@testing-library/react";
import App from "./App";

// methods
// getBy, findBy and queryBy: 1 result only (error otherwise)
// getAllBy, findAllBy, queryAllBy: array of result(s)
// findBy and findAllBy to use async/await
// queryBy null when no result, queryAllBy array if no match

// attributes
// accessible by users: getByRole, getByLabelText, getByPlaceholderText, getByText
// semantic queries for screen readers: getByAltText, getByTitle
// test id in last resort: getByTestId

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
