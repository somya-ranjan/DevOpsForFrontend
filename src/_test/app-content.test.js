import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "@jest/globals";
import App from "../App";

describe("App content", () => {
  it("shows the getting started and documentation sections", () => {
    render(<App />);

    expect(
      screen.getByRole("heading", { name: "Hello, Get started" }),
    ).toBeTruthy();
    expect(screen.getByRole("heading", { name: "Documentation" })).toBeTruthy();
    expect(screen.getByRole("link", { name: "Explore Vite" })).toBeTruthy();
    expect(screen.getByRole("link", { name: "Learn more" })).toBeTruthy();
  });
});
