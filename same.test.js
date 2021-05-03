const same = require("./same");

test.skip("test for doubling", () => {
  expect(same([1, 2, 3], [1, 4, 9])).toBeTruthy();
  expect(same([2, 3, 4], [4, 9, 16])).toBeTruthy();
  expect(same([5, 6, 7], [25, 36, 49])).toBeTruthy();
});

test.skip("frequency test", () => {
  expect(same([1, 2, 3], [1, 4])).toBeFalsy();
  expect(same([5, 7, 9], [1, 4, 12])).toBeFalsy();
  expect(same([4, 6, 9], [1, 4, 11])).toBeFalsy();
});
