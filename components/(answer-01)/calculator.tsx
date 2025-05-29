"use client";

import { useCalculator } from "@/hooks/useCalculator";
import {
  ADD_BUTTON,
  ADD_INPUT_FIRST_PLACEHOLDER,
  ADD_INPUT_SECOND_PLACEHOLDER,
  TOTAL,
} from "../../lib/constant";

export const Calculator = () => {
  const { formData, errors, total, handleChange, handleAdd } = useCalculator();

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-full max-w-md space-y-4">
        <div>
          <input
            type="number"
            value={formData.aValue}
            onChange={(e) => handleChange("aValue")(e.target.value)}
            className="p-2 border rounded w-full"
            placeholder={ADD_INPUT_FIRST_PLACEHOLDER}
          />
          {errors.aValue && (
            <p className="text-amber-500 mt-1 text-xs">{errors.aValue}</p>
          )}
        </div>

        <div>
          <input
            type="number"
            value={formData.bValue}
            onChange={(e) => handleChange("bValue")(e.target.value)}
            className="p-2 border rounded w-full"
            placeholder={ADD_INPUT_SECOND_PLACEHOLDER}
          />
          {errors.bValue && (
            <p className="text-amber-500 mt-1 text-xs">{errors.bValue}</p>
          )}
        </div>

        <button
          onClick={handleAdd}
          className="w-full bg-blue-500 text-white py-2 rounded"
        >
          {ADD_BUTTON}
        </button>

        {total !== null && (
          <p className="mt-2 text-2xl" data-testid={TOTAL}>
            {TOTAL} : <span className="font-semibold">{total}</span>
          </p>
        )}
      </div>
    </div>
  );
};
