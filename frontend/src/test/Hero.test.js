import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Hero from "../landing_page/home/Hero";

describe("Hero Component", () => {
  test("renders hero image", () => {
    // render Hero (arrow function render)
    render(<Hero />);

    // get hero image by alt text
    const heroImage = screen.getByAltText("Hero image1");

    // expect hero image to be in the document
    expect(heroImage).toBeInTheDocument();

    // expect hero image to have src attribute containing media
    expect(heroImage).toHaveAttribute("src",'media/images/homeHero.png');
  });

  test("renders signup button", () => {
    // arrow function render hero
    render(<Hero />);

    // get signup button by role and name
    const signUpButton = screen.getByRole("button", {
      name: /signup Now/i,
    });

    // expect signup button to be in the document
    expect(signUpButton).toBeInTheDocument();

    // expect signup button to have class btn primary
    expect(signUpButton).toHaveClass("btn");
    expect(signUpButton).toHaveClass("btn-primary");
  });
});