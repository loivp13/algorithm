import findThreeLargestNum from "./findThreeLargestNum";

describe("should return a sorted array with largest numbers", () => {
  it("should return length of 3", () => {
    expect(findThreeLargestNum([1, 2, 3])).toEqual([1, 2, 3]);
  });
  it("should 3 largest numbers", () => {
    expect(findThreeLargestNum([1, 23, 2, 91, 3, 25])).toEqual([23, 25, 91]);
  });
});
