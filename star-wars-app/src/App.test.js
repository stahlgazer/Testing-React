import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import StarWarsCharacters from "./components/StarWarsCharacters";
import App from "./App";
// import { getData as mockGetData } from "./api";

test("App is rendering properly", () => {
  render(<App />);
});

test("character component and buttons working properly", async () => {
  const { getByText } = render(<StarWarsCharacters />);
  const previous = getByText(/previous/i);
  const next = getByText(/next/i);

  expect(previous).toBeDisabled();
  fireEvent.click(previous);
  fireEvent.click(next);
  fireEvent.click(previous);
});