import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../components/App";

describe("App", () => {
  test("renders App component correctly", () => {
    render(<App />);
    const h1Element = screen.getByText(/Manchester, GB/i);
    expect(h1Element).toBeInTheDocument();
  });
});
