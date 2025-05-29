import { act, renderHook } from "@testing-library/react";
import { useTwoSum } from "../useTwoSum";

describe("useTwoSum", () => {
  it("handles input changes", () => {
    const { result } = renderHook(() => useTwoSum());

    act(() => {
      result.current.handleChange("inputValue")("1,2,3");
    });
    expect(result.current.formData.inputValue).toBe("1,2,3");

    act(() => {
      result.current.handleChange("targetValue")("5");
    });
    expect(result.current.formData.targetValue).toBe("5");
  });

  it("validates inputs and shows errors", () => {
    const { result } = renderHook(() => useTwoSum());

    // Test empty values
    act(() => {
      result.current.handleCompute();
    });
    expect(result.current.errors.inputValue).toMatch(
      /Need at least two comma-separated numbers/i
    );
    expect(result.current.errors.targetValue).toMatch(/Target is required/i);

    // Test invalid numbers
    act(() => {
      result.current.handleChange("inputValue")("1,a,3");
    });
    act(() => {
      result.current.handleCompute();
    });
    expect(result.current.errors.inputValue).toMatch(
      /All entries must be valid numbers/i
    );
  });

  it("computes single result correctly", () => {
    const { result } = renderHook(() => useTwoSum());

    act(() => {
      result.current.handleChange("inputValue")("2,7,11,15");
    });
    act(() => {
      result.current.handleChange("targetValue")("9");
    });
    act(() => {
      result.current.handleCompute();
    });

    expect(result.current.errors).toEqual({});
    expect(result.current.results).toEqual([[1, 2]]);
  });

  it("computes multiple results correctly", () => {
    const { result } = renderHook(() => useTwoSum());

    act(() => {
      result.current.handleChange("inputValue")("1,2,3,4");
    });
    act(() => {
      result.current.handleChange("targetValue")("5");
    });
    act(() => {
      result.current.handleCompute();
    });

    expect(result.current.errors).toEqual({});
    expect(result.current.results).toEqual([
      [1, 4],
      [2, 3],
    ]);
  });

  it("returns empty array when no solution exists", () => {
    const { result } = renderHook(() => useTwoSum());

    act(() => {
      result.current.handleChange("inputValue")("1,2,3,4");
    });
    act(() => {
      result.current.handleChange("targetValue")("10");
    });
    act(() => {
      result.current.handleCompute();
    });

    expect(result.current.results).toEqual([]);
  });
});
