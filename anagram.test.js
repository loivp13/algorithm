const anagram = require("./anagram");

describe.skip("testing anagram function", () => {
  test.only("test for truthy", () => {
    expect(anagram("string", "stgrin")).toBeTruthy();
  });
  test.only("test for truthy", () => {
    expect(anagram("", "")).toBeTruthy();
  });

  test.only("test for truthy2", () => {
    expect(anagram("str", "trs")).toBeTruthy();
  });

  test.only("test for falsy1", () => {
    expect(anagram("l", "aa")).toBeFalsy();
  });
  test.only("test for falsy2", () => {
    expect(anagram("lal", "lll")).toBeFalsy();
  });
});
