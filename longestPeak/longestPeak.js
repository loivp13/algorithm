function longestPeak(arr) {
  //find peaks
  let peakPosition = [];
  for (let i = 1; i < arr.length - 1; i++) {
    let curNum = arr[i];
    let nextNum = arr[i + 1];
    let prevNum = arr[i - 1];
    if (curNum < prevNum && curNum > nextNum) {
      peakPosition.push(i);
    }
  }

  //find lengths of each peak;
  let longestPeak = 0;
  for (let i = 0; i < peakPosition.length; i++) {
    let count = 1;
    let position = peakPosition[i];
    while (position > 0 && arr[position] - arr[position - 1] > 0) {
      count++;
      position--;
    }
    // reset position
    position = peakPosition[i];
    while (position < arr.length - 1 && arr[position] - arr[position + 1] > 0) {
      count++;
      position++;
    }
    if (longestPeak < count) {
      longestPeak = count;
    }
  }
  return longestPeak;
}
