import Calculator, { stringLength, reverseString, capitalizeString } from "./functions.js";

describe('String Length', () => {
  test('"omar" contains 4 characters', () => {
    expect(stringLength('omar')).toBe(4);
  });
  
  test('An empty string should return error', () => {
    expect(stringLength('')).toBe('error');
  });
  
  test('"Omar Muhammad" contains more than 10 characters Should return error', () => {
    expect(stringLength('Omar Muhammad')).toBe('error');
  });
});

describe('Reverse String', () => {
  test('the revesed string of "omar" is "ramo"' , () => {
    expect(reverseString('omar')).toBe('ramo');
  });
});

describe('Captalize String', () => {
  test('the first character capitalized string of "omar" is "Omar"' , () => {
    expect(capitalizeString('omar')).toBe('Omar');
  });
});

describe('Calculator', () => {
  test('4 + 2 should be equal to 6', () => {
    expect(Calculator.add(4, 2)).toBe(6)
  });

  test('4 - 2 should be equal to 2', () => {
    expect(Calculator.subtract(4, 2)).toBe(2)
  });

  test('4 / 2 should be equal to 2', () => {
    expect(Calculator.divide(4, 2)).toBe(2)
  });
  
  test('4 * 2 should be equal to 8', () => {
    expect(Calculator.multiply(4, 2)).toBe(8)
  });
});


