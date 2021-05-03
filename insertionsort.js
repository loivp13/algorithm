module.exports = function insertionsort(arr) {
  // if (arr.length <= 1) {
  //   return arr;
  // }

  // if (arr[0] > arr[1]) {
  //   [arr[1], arr[0]] = [arr[0], arr[1]];
  // }
  // for (let i = 2; i < arr.length; i++) {
  //   let currentIndex = i;
  //   for (let j = i - 1; j >= 0; j--) {
  //     if (arr[j] > arr[i]) {
  //       currentIndex = j;
  //     } else {
  //       break;
  //     }
  //   }
  //   if (currentIndex !== i) {
  //     let value = arr.splice(i, 1);
  //     arr.splice(currentIndex, 0, value[0]);
  //   }
  // }
  // return arr;

  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    let index = i;
    for (let j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
      index = j;
    }
    arr[index] = currentVal;
  }
  return arr;
};
