import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App, { strike } from "../App";
import Display from "./Display";
import Dashboard from "./Dashboard";
import { testNameToKey } from "jest-snapshot/build/utils";

test("renders dashboard component", () => {
  const wrapper = render(<Dashboard />);
  const element = wrapper.getByText(/hit/i);
  expect(element).toBeInTheDocument();
});
test("App renders without crashing", () => {
  render(<App />);
});
test("App renders without crashing", () => {
  render(<Display />);
});
test("App renders without crashing", () => {
  render(<Dashboard />);
  // console.log(component);
});

// test("strike adds 1 to strike", () => {
//   expect(strike(1)).toBe(2);
// });
