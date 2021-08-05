const selectionsort = require("./selectionsort");

describe.skip("selectionsort", () => {
  test("worst case", () => {
    expect(selectionsort([4, 3, 2, 1])).toEqual([1, 2, 3, 4]);
  });
  test("best case", () => {
    expect(selectionsort([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
  });
  test("average case", () => {
    expect(selectionsort([1, 2, 3, 4, 1])).toEqual([1, 1, 2, 3, 4]);
  });
  test("edge case", () => {
    expect(selectionsort([4, 1, 2, 3])).toEqual([1, 2, 3, 4]);
  });
});
