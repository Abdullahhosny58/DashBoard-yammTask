import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import Sidebar from "./Sidebar";



describe("Sidebar Component", () => {
  test("renders Sidebar with menu items", () => {
    render(<Sidebar />);

    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Dashboard")).toBeInTheDocument();
    expect(screen.getByText("Settings")).toBeInTheDocument();
  });


});
