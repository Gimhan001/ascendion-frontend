import { useState } from "react";
import { addUtil } from "../utils/calculator";
import { AddInput, addInputSchema } from "../lib/form-schema/calculator-schema";


export function useCalculator() {
  const [formData, setFormData] = useState<AddInput>({ aValue: "", bValue: "" });
  const [errors, setErrors] = useState<Partial<Record<keyof AddInput, string>>>({});
  const [total, setTotal] = useState<number | null>(null);

  const handleChange = (field: keyof AddInput) => (value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setErrors(prev => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { [field]: _removed, ...rest } = prev;
      return rest;
    });
  };

  const handleAdd = () => {
    const parsed = addInputSchema.safeParse(formData);
    if (!parsed.success) {
      const fieldErrors: Partial<Record<keyof AddInput, string>> = {};
      parsed.error.errors.forEach(e => {
        const path = e.path[0] as keyof AddInput;
        fieldErrors[path] = e.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    const a = parseFloat(parsed.data.aValue);
    const b = parseFloat(parsed.data.bValue);
    setTotal(addUtil(a, b));
  };

  return { formData, errors, total, handleChange, handleAdd };
}