export default function selectionSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let currentPostion = 0;
  let switchPosition = 0;
  let currentMin = arr[currentPostion];

  //
  for (let k = 0; k < arr.length - 1; k++) {
    for (let i = k + 1; i < arr.length; i++) {
      if (arr[i] < currentMin) {
        currentMin = arr[i];
        switchPosition = i;
      }
    }
    [arr[switchPosition], arr[currentPostion]] = [
      arr[currentPostion],
      arr[switchPosition],
    ];
    currentPostion++;
    switchPosition = currentPostion;
    currentMin = arr[currentPostion];
  }
  return arr;
}
