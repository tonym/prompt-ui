import { deepMerge } from './deepMerge';

describe('deepMerge', () => {
  it('should merge two flat objects', () => {
    const target = { a: 1 };
    const source = { b: 2 };
    const result = deepMerge(target, source);

    expect(result).toEqual({ a: 1, b: 2 });
  });

  it('should overwrite target values with source values', () => {
    const target = { a: 1 };
    const source = { a: 2 };
    const result = deepMerge(target, source);

    expect(result).toEqual({ a: 2 });
  });

  it('should merge nested objects', () => {
    const target = { a: { b: 1 } };
    const source = { a: { c: 2 } };
    const result = deepMerge(target, source);

    expect(result).toEqual({ a: { b: 1, c: 2 } });
  });

  it('should overwrite nested values', () => {
    const target = { a: { b: 1 } };
    const source = { a: { b: 2 } };
    const result = deepMerge(target, source);

    expect(result).toEqual({ a: { b: 2 } });
  });

  it('should preserve deeply nested structures', () => {
    const target = { a: { b: { c: 1 } } };
    const source = { a: { b: { d: 2 } } };
    const result = deepMerge(target, source);

    expect(result).toEqual({ a: { b: { c: 1, d: 2 } } });
  });
});
