export default class Calculator {
  static add(num1,num2) { return num1+num2}

  static subtract(num1, num2) { return num1-num2}

  static divide(num1, num2) { return num1/num2}

  static multiply (num1, num2) { return num1*num2}
}

export const stringLength = (string) => {
  const length = string.length;
  return (length >= 1 && length <= 10)? length: 'error';
};

export const  reverseString = (string) => {
  const newString = string.split('').reverse().join('');
  return newString;
};

export const capitalizeString = (string) => {
  let newString = string.charAt(0).toUpperCase() + string.slice(1);
  return newString;
};

console.log(capitalizeString('omar'));
