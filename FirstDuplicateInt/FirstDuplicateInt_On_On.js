function firstDuplicateValue(array) {
  // Write your code here. 0(n) 0(n)
  let cache = {};
  for (let i = 0; i < array.length; i++) {
    let value = array[i];
    if (cache[value]) {
      return value;
    } else {
      cache[value] = 1;
    }
  }
  return -1;
}
