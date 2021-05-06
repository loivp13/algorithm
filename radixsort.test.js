const { getDigit, digitCount } = require("./radixsort");

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
});
