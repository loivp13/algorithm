import bubblesort from "./bubblesort";
import bubblesortOptimize from "./bubblesortOptimize";

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

describe("test bublesortOptimize", () => {
  it("to return arr if length of arg is < 1", () => {
    expect(bubblesortOptimize([])).toEqual([]);
    expect(bubblesortOptimize([1])).toEqual([1]);
  });

  it("return arr with sorted num", () => {
    expect(bubblesortOptimize([2, 1])).toEqual([1, 2]);
  });

  it("return arr with sorted num", () => {
    expect(bubblesortOptimize([3, 6, 2, 1, -1])).toEqual([-1, 1, 2, 3, 6]);
  });
  it("return arr with sorted num", () => {
    expect(bubblesortOptimize([8, 5, 2, 9, 5, 6, 3])).toEqual([
      2, 3, 5, 5, 6, 8, 9,
    ]);
  });
});
