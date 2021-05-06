const bubblesort = require("./bubblesort");
describe.skip("testing anagram function", () => {
  test("worst case", () => {
    expect(bubblesort([4, 3, 2, 1])).toEqual([1, 2, 3, 4]);
  });
  test("best case", () => {
    expect(bubblesort([1, 3, 2, 4])).toEqual([1, 2, 3, 4]);
  });
  test("empty arr", () => {
    expect(bubblesort([])).toEqual([]);
  });
});
