export default function insertionsort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let counter = i;
    while (counter > 0 && arr[counter - 1] > arr[counter]) {
      let temp = arr[counter];
      arr[counter] = arr[counter - 1];
      arr[counter - 1] = temp;
      counter--;
    }
  }
  return arr;
}
