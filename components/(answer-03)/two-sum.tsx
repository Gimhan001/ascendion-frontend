"use client";

import { useTwoSum } from "@/hooks/useTwoSum";
import {
  TWO_SUM_BUTTON,
  TWO_SUM_INPUT_PLACEHOLDER,
  TWO_SUM_OUTPUT,
  TWO_SUM_TARGET_PLACEHOLDER,
} from "@/lib/constant";

export const TwoSum = () => {
  const { formData, errors, results, handleChange, handleCompute } =
    useTwoSum();

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-full max-w-md space-y-4">
        <div>
          <input
            data-testid="two-sum-input"
            type="text"
            value={formData.inputValue}
            onChange={(e) => handleChange("inputValue")(e.target.value)}
            className="p-2 border rounded w-full"
            placeholder={TWO_SUM_INPUT_PLACEHOLDER}
          />
          {errors.inputValue && (
            <p className="text-amber-500 mt-1 text-xs">{errors.inputValue}</p>
          )}
        </div>
        <div>
          <input
            data-testid="two-sum-target"
            type="number"
            value={formData.targetValue}
            onChange={(e) => handleChange("targetValue")(e.target.value)}
            className="p-2 border rounded w-full"
            placeholder={TWO_SUM_TARGET_PLACEHOLDER}
          />
          {errors.targetValue && (
            <p className="text-amber-500 mt-1 text-xs">{errors.targetValue}</p>
          )}
        </div>
        <button
          onClick={handleCompute}
          className="w-full bg-green-500 text-white py-2 rounded"
        >
          {TWO_SUM_BUTTON}
        </button>

        {results.length > 0 && (
          <div className="mt-4 space-y-1">
            {results.map(([i, j], idx) => (
              <p key={idx} className="text-lg" data-testid="two-sum-output">
                {TWO_SUM_OUTPUT} {results.length > 1 && "#" + (idx + 1)} : [{i},{" "}
                {j}]
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
