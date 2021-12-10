import { stringLength } from "./functions.js";

test('omar is string with 4 characters', () => {
  expect(stringLength('omar')).toBe(4);
});