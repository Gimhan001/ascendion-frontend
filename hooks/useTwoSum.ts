import { useState } from 'react';
import { twoSumAll } from '@/utils/two-sum';
import { TwoSumInput, twoSumInputSchema } from '@/lib/form-schema/two-sum-schema';

export function useTwoSum() {
  const [formData, setFormData] = useState<TwoSumInput>({
    inputValue: '',
    targetValue: '',
  });
  const [errors, setErrors] = useState<Partial<Record<keyof TwoSumInput, string>>>({});
  const [results, setResults] = useState<Array<[number, number]>>([]);

  const handleChange = (field: keyof TwoSumInput) => (value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setErrors(prev => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { [field]: _, ...rest } = prev;
      return rest;
    });
  };

  const handleCompute = () => {
    const parsed = twoSumInputSchema.safeParse(formData);
    if (!parsed.success) {
      const fieldErrors: Partial<Record<keyof TwoSumInput, string>> = {};
      parsed.error.errors.forEach(e => {
        fieldErrors[e.path[0] as keyof TwoSumInput] = e.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    const nums = parsed.data.inputValue
      .split(',')
      .map(n => parseInt(n.trim(), 10));
    const tgt = parseInt(parsed.data.targetValue, 10);
    setResults(twoSumAll(nums, tgt));
  };

  return { formData, errors, results, handleChange, handleCompute };
}
