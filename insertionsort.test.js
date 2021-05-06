const insertionsort = require("./insertionsort");

describe.skip("testing insertionsort function", () => {
  test("worst case", () => {
    expect(insertionsort([4, 3, 2, 1])).toEqual([1, 2, 3, 4]);
  });
  test("best case", () => {
    expect(insertionsort([1, 3, 2, 4])).toEqual([1, 2, 3, 4]);
  });
  test("empty arr", () => {
    expect(insertionsort([])).toEqual([]);
  });
});
