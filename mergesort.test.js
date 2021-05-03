const { merge, mergesort } = require("./mergesort");

describe("mergesort", () => {
  test("best case", () => {
    expect(mergesort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });
  test("small", () => {
    expect(mergesort([1, 3, 4])).toEqual([1, 3, 4]);
  });
  test("empty case", () => {
    expect(mergesort([])).toEqual([]);
  });
  test("worst case", () => {
    expect(mergesort([5, 4, 3, 2, 1, 0])).toEqual([0, 1, 2, 3, 4, 5]);
  });
  test("large dataset", () => {
    expect(
      mergesort([50, 23, 17, 19, 123, 43, 53, 23, 1, 3, 4, 5, 878, 7, 4345, 23])
    ).toEqual([1, 3, 4, 5, 7, 17, 19, 23, 23, 23, 43, 50, 53, 123, 878, 4345]);
  });
});

describe("merge", () => {
  test("best case", () => {
    expect(merge([1], [2])).toEqual([1, 2]);
  });

  test("small", () => {
    expect(merge([1, 3, 4], [2, 3, 4])).toEqual([1, 2, 3, 3, 4, 4]);
  });

  test("empty case", () => {
    expect(merge([], [])).toEqual([]);
  });

  test("worst case", () => {
    expect(merge([0, 1, 2, 3, 4, 5], [0, 1, 2, 3, 4, 5])).toEqual([
      0,
      0,
      1,
      1,
      2,
      2,
      3,
      3,
      4,
      4,
      5,
      5,
    ]);
  });
});
