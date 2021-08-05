const { pivot, quicksort } = require("./quicksort");

describe.skip("tetsting pivot", () => {
  test("return correct pivot", () => {
    expect(pivot([3, 2, 1])).toEqual(2);
    expect(pivot([2, 1, 3])).toEqual(1);
  });
});

describe.skip("testing quicksort", () => {
  test("return sorted array worst case", () => {
    expect(quicksort([1, 2, 3])).toEqual([1, 2, 3]);
  });
  test("return sorted array best case", () => {
    expect(quicksort([3, 2, 1])).toEqual([1, 2, 3]);
  });
  test("return empty array", () => {
    expect(quicksort([])).toEqual([]);
  });
});
