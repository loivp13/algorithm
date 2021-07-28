const { getDigit, digitCount, mostDigits, radixSort } = require("./radixsort");

describe("testing getDigits", () => {
  test("return an int", () => {
    expect(getDigit(90, 1)).toBe(9);
  });

  test("return place is 0", () => {
    expect(getDigit(10101, 0)).toBe(1);
  });
  test("return place is 3", () => {
    expect(getDigit(10101, 3)).toBe(0);
  });
});

describe("testing digitCount", () => {
  test("return coutn", () => {
    expect(digitCount(1999)).toBe(4);
  });
  test("return coutn", () => {
    expect(digitCount(1)).toBe(1);
  });
  test("return coutn", () => {
    expect(digitCount(12)).toBe(2);
  });
});

describe("testing mostDigits", () => {
  test("return 4", () => {
    expect(mostDigits([1, 23, 456, 4444])).toBe(4);
  });
  test("return 3", () => {
    expect(mostDigits([1, 23, 456])).toBe(3);
  });
  test("return 2", () => {
    expect(mostDigits([1, 23])).toBe(2);
  });
});

describe("testing radixSort", () => {
  test("return ordered", () => {
    expect(radixSort([1, 23, 456, 4444])).toEqual([1, 23, 456, 4444]);
  });
  test("return ordered", () => {
    expect(radixSort([1, 2, 3, 1, 23, 456])).toEqual([1, 1, 2, 3, 23, 456]);
  });
  test("return ordered", () => {
    expect(radixSort([23, 21, 20, 17])).toEqual([17, 20, 21, 23]);
  });
});
