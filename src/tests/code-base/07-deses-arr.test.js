import { returnArray, usState } from '../../code-base/07-deses-arr';

describe('07-deses-arr', () => {
  test('should function returnArry return array', () => {
    const [letters, digits] = returnArray();
    expect(letters).toBe('ABC');
    expect(digits).toBe(123);
    expect(typeof letters).toBe('string');
    expect(typeof digits).toBe('number');
    expect(returnArray()).toEqual(['ABC', 123]);
  });

  test('should function usState return array', () => {
     const [value, setValue] = usState('Apple');
     expect(value).toBe('Apple');
     expect(typeof setValue).toBe('function');
  });
});
