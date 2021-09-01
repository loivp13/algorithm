function mergeOverlappingIntervals(array) {
  // Write your code here.
  //O(nlogn) time
  //0n space
  array.sort((a, b) => {
    return a[0] - b[0];
  });
  console.log(array);
  let result = [array[0]];
  //0n
  for (let i = 1; i < array.length; i++) {
    let startInterval = array[i][0];
    let endInterval = result[result.length - 1][1];
    if (endInterval >= startInterval) {
      result[result.length - 1][1] = Math.max(
        array[i][1],
        result[result.length - 1][1]
      );
    } else {
      result.push([array[i][0], array[i][1]]);
    }
  }
  return result;
}

// Do not edit the line below.
exports.mergeOverlappingIntervals = mergeOverlappingIntervals;
