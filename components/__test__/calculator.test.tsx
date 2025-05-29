import { render, screen, fireEvent } from "@testing-library/react";
import { Calculator } from "@/components/(answer-01)/calculator";
import {
  ADD_TITLE,
  ADD_BUTTON,
  TOTAL,
  ADD_INPUT_FIRST_PLACEHOLDER,
  ADD_INPUT_SECOND_PLACEHOLDER,
} from "@/lib/constant";

describe("Calculator", () => {
  it("renders correctly", () => {
    render(<Calculator />);
    expect(screen.getByText(ADD_TITLE)).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(ADD_INPUT_FIRST_PLACEHOLDER)
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(ADD_INPUT_SECOND_PLACEHOLDER)
    ).toBeInTheDocument();
    expect(screen.getByText(ADD_BUTTON)).toBeInTheDocument();
  });

  it("handles user interactions", () => {
    render(<Calculator />);

    const firstInput = screen.getByPlaceholderText(ADD_INPUT_FIRST_PLACEHOLDER);
    const secondInput = screen.getByPlaceholderText(
      ADD_INPUT_SECOND_PLACEHOLDER
    );
    const button = screen.getByText(ADD_BUTTON);

    // Enter valid values
    fireEvent.change(firstInput, { target: { value: "8" } });
    fireEvent.change(secondInput, { target: { value: "2" } });
    fireEvent.click(button);

    // Check result - use more specific queries
    expect(screen.getByTestId(TOTAL)).toBeInTheDocument();
    expect(screen.getByText("10")).toBeInTheDocument();
  });

  it("shows validation errors", () => {
    render(<Calculator />);

    const button = screen.getByText(ADD_BUTTON);
    fireEvent.click(button);

    // Match actual error messages
    expect(screen.getAllByText(/is required$/i)).toHaveLength(2);
  });
});
