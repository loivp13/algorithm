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
      }
    }
  }
  return arr;
}
