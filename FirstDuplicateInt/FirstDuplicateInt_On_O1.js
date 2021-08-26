function firstDuplicateValue(arr) {
  //takes 1 -> n ints;
  //can modify arr
  for (let value of arr) {
    let absValue = Math.abs(value);
    if (arr[absValue - 1] < 0) {
      return absValue;
    } else {
      arr[absValue - 1] *= -1;
    }
  }
  return -1;
}
