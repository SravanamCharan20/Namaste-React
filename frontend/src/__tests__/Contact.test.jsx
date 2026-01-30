import { render, screen } from "@testing-library/react";
import Contact from "../pages/Contact";
import { expect } from "vitest";

test("testing contact", () => {
  render(<Contact />);

  const heading = screen.getByRole("heading");

  expect(heading).toBeInTheDocument();
});

test("testing contact", () => {
  render(<Contact />);

  const button = screen.getByText("Submit");

  expect(button).toBeInTheDocument();
});

test("testing contact", () => {
  render(<Contact />);

  const AllInputs = screen.getAllByRole("textbox"); // basically this Allinputs is []
  console.log(AllInputs[0])

  expect(AllInputs.length).toBe(2);
});