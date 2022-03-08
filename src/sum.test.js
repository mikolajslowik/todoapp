import React from "react";
import renderer from "react-dom";
import App from "./App";

it("render correctly", () => {
  const baner = document.querySelector(".baner");
  //   const header = renderer.findDOMNode(App).tagName("header");
  expect(baner).toContain("Plan your day!");
});

// test('strawdzamy treść', () => {
//     // expect(<h1></h1>).toContain('Plan your day!')
//     // expect(.baner).stringContaining('Plan your day!')
// expect(baner).toContain('Plan your day!')
// })
