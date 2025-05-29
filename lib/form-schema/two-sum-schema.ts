import { z } from "zod";

export const twoSumInputSchema = z.object({
    inputValue: z
      .string()
      .nonempty({ message: "Enter at least two numbers" })
      .refine(
        (val) => val.split(",").map((n) => n.trim()).length >= 2,
        { message: "Need at least two comma-separated numbers" }
      )
      .refine(
        (val) => val
          .split(",")
          .map((n) => n.trim())
          .every((n) => !isNaN(Number(n))),
        { message: "All entries must be valid numbers" }
      ),
    targetValue: z
      .string()
      .nonempty({ message: "Target is required" })
      .refine((val) => !isNaN(Number(val)), { message: "Target must be a valid number" }),
  });
  
  export type TwoSumInput = z.infer<typeof twoSumInputSchema>;