import { render, screen } from "@testing-library/react";
import Contact from "../pages/Contact";
import { describe, expect } from "vitest";


// test as write as "it"
describe("all testcases", () => {
  test("testing contact", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });

  it("testing contact", () => {
    render(<Contact />);

    const button = screen.getByText("Submit");

    expect(button).toBeInTheDocument();
  });

  it("testing contact", () => {
    render(<Contact />);

    const AllInputs = screen.getAllByRole("textbox"); // basically this Allinputs is []
    // console.log(AllInputs[0]);

    expect(AllInputs.length).toBe(2);
  });
});
