import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import StarWarsCharacters from "./components/StarWarsCharacters";
import App from "./App";

test("App is rendering properly", () => {
  render(<App />);
});

test("StarWarsCharacters component is rendering properly", () => {
  render(<StarWarsCharacters />);
})

test("renders the Previous button", () => {
  const {queryByText} = render(<StarWarsCharacters />);
  const previous = queryByText(/previous/i);
})

test("renders the Next button", () => {
  const {queryByText} = render(<StarWarsCharacters />);
  const next = queryByText(/next/i);
})

test("Previous button can be clicked", () => {
  const {queryByText} = render(<StarWarsCharacters />);
  const previous = queryByText(/previous/i);
  fireEvent.click(previous);
})

test("Next button can be clicked", () => {
  const {queryByText} = render(<StarWarsCharacters />);
  const next = queryByText(/next/i);
  fireEvent.click(next);
})