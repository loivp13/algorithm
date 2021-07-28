function getDigit(num, place) {
  if (place > num.toString().length - 1) {
    return 0;
  }
  let strNum = num.toString();
  return +strNum[strNum.length - 1 - place];

  //return an int
}

function digitCount(num) {
  return num.toString().length;
}

function mostDigits(num) {
  let max = 0;
  for (x of num) {
    let length = x.toString().length;
    if (length > max) {
      max = length;
    }
  }
  return max;
}

function radixSort(arr) {
  let maxDigits = mostDigits(arr);
  for (let i = 0; i < maxDigits; i++) {
    let bucket = Array.from({ length: 10 }, () => {
      return [];
    });
    for (let j = 0; j < arr.length; j++) {
      let digit = getDigit(arr[j], i);
      bucket[digit].push(arr[j]);
    }
    arr = [].concat(...bucket);
  }
  return arr;
}
module.exports = {
  getDigit,
  digitCount,
  mostDigits,
  radixSort,
};
