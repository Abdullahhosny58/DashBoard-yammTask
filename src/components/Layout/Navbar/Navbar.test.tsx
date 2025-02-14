import { render, screen } from "@testing-library/react";
import Navbar from "./Navbar";
import { describe, it, expect } from "vitest";

describe("Navbar Component", () => {
  it("renders the dashboard logo", () => {
    render(<Navbar />);
    expect(screen.getByText("Dashboard")).toBeInTheDocument();
  });

  it("renders notification and user buttons", () => {
    render(<Navbar />);
    expect(screen.getByRole("button", { name: /bell/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /user/i })).toBeInTheDocument();
  });
});
