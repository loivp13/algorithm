const anagram = require("./anagram");

describe.skip("testing anagram function", () => {
  test("test for truthy", () => {
    expect(anagram("string", "stgrin")).toBeTruthy();
  });
  test("test for truthy", () => {
    expect(anagram("", "")).toBeTruthy();
  });

  test("test for truthy2", () => {
    expect(anagram("str", "trs")).toBeTruthy();
  });

  test("test for falsy1", () => {
    expect(anagram("l", "aa")).toBeFalsy();
  });
  test("test for falsy2", () => {
    expect(anagram("lal", "lll")).toBeFalsy();
  });
});
