export default function bubblesort(arr) {
  if (arr.length < 1) {
    return arr;
  }

  for (let j = 0; j < arr.length - 1; j++) {
    let largest = arr[0];
    for (let i = 1; i < arr.length - j; i++) {
      if (arr[i] > largest) {
        largest = arr[i];
      } else {
        let temp = arr[i];
        arr[i] = arr[i - 1];
        arr[i - 1] = temp;
        console.log(arr, "round", i);
      }
    }
  }
  return arr;
}
// [8, 5, 2, 9, 5, 6, 3]
//  L  i

// 1 [5, 2, 8, 5, 6, 3, 9]
//                   L  i
// 2
//                     e
//     [5, 2, 8, 5, 6, 3, 9]

// 3
// 4
// 5
// 6
// 7

// [
//     [1,2],
//     [3,4]
// ]
