import { z } from "zod";

export const addInputSchema = z.object({
    aValue: z
      .string()
      .nonempty({ message: "First number is required" })
      .refine((val) => !isNaN(Number(val)), { message: "Must be a valid number" }),
    bValue: z
      .string()
      .nonempty({ message: "Second number is required" })
      .refine((val) => !isNaN(Number(val)), { message: "Must be a valid number" }),
  });
  
  export type AddInput = z.infer<typeof addInputSchema>;