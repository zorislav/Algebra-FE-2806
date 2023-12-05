const maxNumber = require("../script.js");
const testArray = [1, 4, 5, 89, 43, 2, -1];

test("Get maxNumber", () => {
  expect(maxNumber(testArray)).toBe(89);
});
