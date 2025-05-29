import { act, renderHook } from '@testing-library/react';
import { useCalculator } from '../useCalculator';

describe('useCalculator', () => {
  it('handles input changes', () => {
    const { result } = renderHook(() => useCalculator());
    
    act(() => {
      result.current.handleChange('aValue')('5');
    });
    expect(result.current.formData.aValue).toBe('5');
    
    act(() => {
      result.current.handleChange('bValue')('10');
    });
    expect(result.current.formData.bValue).toBe('10');
  });

  it('validates inputs and shows errors', () => {
    const { result } = renderHook(() => useCalculator());
    
    // Test empty values
    act(() => {
      result.current.handleAdd();
    });
    expect(result.current.errors.aValue).toBeDefined();
    expect(result.current.errors.bValue).toBeDefined();
    
    // Test invalid numbers
    act(() => {
      result.current.handleChange('aValue')('abc');
    });
    act(() => {
      result.current.handleChange('bValue')('!@#');
    });
    act(() => {
      result.current.handleAdd();
    });
    expect(result.current.errors.aValue).toBeDefined();
    expect(result.current.errors.bValue).toBeDefined();
  });

  it('calculates total correctly', () => {
    const { result } = renderHook(() => useCalculator());
    
    act(() => {
      result.current.handleChange('aValue')('7');
    });
    act(() => {
      result.current.handleChange('bValue')('3');
    });
    act(() => {
      result.current.handleAdd();
    });
    
    expect(result.current.errors).toEqual({});
    expect(result.current.total).toBe(10);
  });
});