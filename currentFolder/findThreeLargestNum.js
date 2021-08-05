export default function findThreeLargestNum(array) {
  // Write your code here.
  let arr = [];
  let currentMinOfArr = Infinity;

  for (let i of array) {
    let arrLength = arr.length;

    if (arrLength < 3) {
      arr.push(i);
      if (i < currentMinOfArr) {
        currentMinOfArr = i;
      }
    } else if (i > currentMinOfArr) {
      for (let j = 0; j <= arr.length; j++) {
        if (arr[j] === currentMinOfArr) {
          arr[j] = i;
          currentMinOfArr = Math.min(...arr);
          break;
        }
      }
    }
  }
  return arr.sort();
}
