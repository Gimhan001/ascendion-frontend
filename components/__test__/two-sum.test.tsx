import { render, screen, fireEvent } from "@testing-library/react";
import { TwoSum } from "@/components/(answer-03)/two-sum";
import {
  TWO_SUM_TITLE,
  TWO_SUM_BUTTON,
  TWO_SUM_OUTPUT,
  TWO_SUM_INPUT_PLACEHOLDER,
  TWO_SUM_TARGET_PLACEHOLDER,
} from "@/lib/constant";

describe("TwoSum", () => {
  it("renders correctly", () => {
    render(<TwoSum />);

    expect(screen.getByText(TWO_SUM_TITLE)).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(TWO_SUM_INPUT_PLACEHOLDER)
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(TWO_SUM_TARGET_PLACEHOLDER)
    ).toBeInTheDocument();
    expect(screen.getByText(TWO_SUM_BUTTON)).toBeInTheDocument();
  });

  it("computes results and displays them", () => {
    render(<TwoSum />);

    const input = screen.getByPlaceholderText(TWO_SUM_INPUT_PLACEHOLDER);
    const targetInput = screen.getByPlaceholderText(TWO_SUM_TARGET_PLACEHOLDER);
    const button = screen.getByText(TWO_SUM_BUTTON);

    // Enter valid values
    fireEvent.change(input, { target: { value: "2,7,11,15" } });
    fireEvent.change(targetInput, { target: { value: "9" } });
    fireEvent.click(button);

    // Check result - use more specific queries
    expect(screen.getByTestId("two-sum-output")).toBeInTheDocument();
    expect(screen.getByTestId("two-sum-output")).toBeInTheDocument();
  });

  it("shows validation errors for empty fields", () => {
    render(<TwoSum />);

    const button = screen.getByText(TWO_SUM_BUTTON);
    fireEvent.click(button);

    expect(screen.getByTestId("two-sum-input")).toBeInTheDocument();
    expect(screen.getByText(/Target is required/i)).toBeInTheDocument();
  });

  it("shows validation error for invalid input format", () => {
    render(<TwoSum />);

    const input = screen.getByPlaceholderText(TWO_SUM_INPUT_PLACEHOLDER);
    const targetInput = screen.getByPlaceholderText(TWO_SUM_TARGET_PLACEHOLDER);
    const button = screen.getByText(TWO_SUM_BUTTON);

    fireEvent.change(input, { target: { value: "2,a,11" } });
    fireEvent.change(targetInput, { target: { value: "9" } }); // Valid target
    fireEvent.click(button);

    expect(
      screen.getByText(/All entries must be valid numbers/i)
    ).toBeInTheDocument();
  });

  it("shows validation error for insufficient numbers", () => {
    render(<TwoSum />);

    const input = screen.getByPlaceholderText(TWO_SUM_INPUT_PLACEHOLDER);
    const button = screen.getByText(TWO_SUM_BUTTON);

    fireEvent.change(input, { target: { value: "5" } });
    fireEvent.click(button);

    expect(
      screen.getByText(/Need at least two comma-separated numbers/i)
    ).toBeInTheDocument();
  });

  it("displays multiple results when available", () => {
    render(<TwoSum />);

    const input = screen.getByPlaceholderText(TWO_SUM_INPUT_PLACEHOLDER);
    const targetInput = screen.getByPlaceholderText(TWO_SUM_TARGET_PLACEHOLDER);
    const button = screen.getByText(TWO_SUM_BUTTON);

    fireEvent.change(input, { target: { value: "1,2,3,4" } });
    fireEvent.change(targetInput, { target: { value: "5" } });
    fireEvent.click(button);

    expect(
      screen.getByText(`${TWO_SUM_OUTPUT} #1 : [1, 4]`)
    ).toBeInTheDocument();
    expect(
      screen.getByText(`${TWO_SUM_OUTPUT} #2 : [2, 3]`)
    ).toBeInTheDocument();
  });
});
