function pivot(arr, start = 0, end = arr.length - 1) {
  let currentPivot = arr[start];
  let currentIndex = start;
  for (let i = start + 1; i <= end; i++) {
    if (currentPivot > arr[i]) {
      currentIndex++;
      swap(arr, currentIndex, i);
    }
  }
  swap(arr, start, currentIndex);
  return currentIndex;
}

function swap(arr, i, j) {
  [arr[j], arr[i]] = [arr[i], arr[j]];
}

function quicksort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    //left side
    quicksort(arr, left, pivotIndex - 1);
    //right side
    quicksort(arr, pivotIndex + 1, right);
  }
  return arr;
}

module.exports = {
  pivot,
  quicksort,
};
