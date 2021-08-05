import bubblesort from "./bubblesort";

describe("test bublesort", () => {
  it("to return arr if length of arg is < 1", () => {
    expect(bubblesort([])).toEqual([]);
    expect(bubblesort([1])).toEqual([1]);
  });

  it("return arr with sorted num", () => {
    expect(bubblesort([2, 1])).toEqual([1, 2]);
  });

  it("return arr with sorted num", () => {
    expect(bubblesort([3, 6, 2, 1, -1])).toEqual([-1, 1, 2, 3, 6]);
  });
  it("return arr with sorted num", () => {
    expect(bubblesort([8, 5, 2, 9, 5, 6, 3])).toEqual([2, 3, 5, 5, 6, 8, 9]);
  });
});
