module.exports = function bubblesort(arr) {
  // let swapped;
  // do {
  //   swapped = false;
  //   let largestIndex = 0;
  //   for (let i = 1; i < arr.length; i++) {
  //     if (arr[largestIndex] > arr[i]) {
  //       [arr[i], arr[largestIndex]] = [arr[largestIndex], arr[i]];
  //       swapped = true;
  //     }

  //     largestIndex = i;
  //   }
  // } while (swapped);
  // return arr;
  let swapped = true;
  for (let i = 0; i < arr.length; i++) {
    if (swapped) {
      swapped = false;
      let largestNumIndex = 0;
      for (let j = i + 1; j < arr.length - i; j++) {
        if (arr[largestNumIndex] > arr[j]) {
          [arr[j], arr[largestNumIndex]] = [arr[largestNumIndex], arr[j]];
          swapped = true;
        }

        largestNumIndex = j;
      }
    }
  }
  return arr;
};
