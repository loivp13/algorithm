import insertionsort from "./insertionsort";
describe("test insertionsort", () => {
  it("to return arr if length of arg is < 1", () => {
    expect(insertionsort([])).toEqual([]);
    expect(insertionsort([1])).toEqual([1]);
  });

  it("return arr with sorted num", () => {
    expect(insertionsort([2, 1])).toEqual([1, 2]);
  });

  it("return arr with sorted num", () => {
    expect(insertionsort([3, 6, 2, 1, -1])).toEqual([-1, 1, 2, 3, 6]);
  });
  it("return arr with sorted num", () => {
    expect(insertionsort([8, 5, 2, 9, 5, 6, 3])).toEqual([2, 3, 5, 5, 6, 8, 9]);
  });
});
