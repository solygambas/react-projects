import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import FollowersList from "../FollowersList";

const MockFollowersList = () => {
  return (
    <BrowserRouter>
      <FollowersList />
    </BrowserRouter>
  );
};

// it's better to test the frontend in complete isolation
// mocking requests to avoid testing external backend (expensive and slow)

describe("FollowersList", () => {
  beforeEach(() => {
    console.log("running before each test");
  });

  beforeAll(() => {
    console.log("running once before tests");
  });

  afterEach(() => {
    console.log("running after each test");
  });

  afterAll(() => {
    console.log("running once after tests");
  });

  it("should render at least 1 user card", async () => {
    render(<MockFollowersList />);
    const cardElement = await screen.findByTestId("follower-item-0");
    // screen.debug()
    expect(cardElement).toBeInTheDocument();
  });

  // it("should render multiple user cards", async () => {
  //   render(<MockFollowersList />);
  //   const cardElements = await screen.findAllByTestId(/follower-item/i);
  //   expect(cardElements.length).toBe(5);
  // });
});
