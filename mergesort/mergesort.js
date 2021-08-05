function merge(sortedArr, sortedArr2) {
  let mark1 = 0;
  let mark2 = 0;
  let newArr = [];
  while (mark1 < sortedArr.length && mark2 < sortedArr2.length) {
    if (sortedArr[mark1] <= sortedArr2[mark2]) {
      newArr.push(sortedArr[mark1]);
      mark1++;
    } else if (sortedArr[mark1] > sortedArr2[mark2]) {
      newArr.push(sortedArr2[mark2]);
      mark2++;
    }
  }

  while (mark1 < sortedArr.length) {
    newArr.push(sortedArr[mark1]);
    mark1++;
  }
  while (mark2 < sortedArr2.length) {
    newArr.push(sortedArr2[mark2]);
    mark2++;
  }

  return newArr;
}

function mergesort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let midPoint = Math.floor(arr.length / 2);
  return merge(
    mergesort(arr.slice(0, midPoint)),
    mergesort(arr.slice(midPoint))
  );
}

module.exports = { merge, mergesort };
