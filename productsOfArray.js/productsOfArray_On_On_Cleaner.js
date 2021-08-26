function arrayOfProducts(arr) {
  // Write your code here.
  let result = new Array(arr.length).fill(1);
  let productL = 1;
  let productR = 1;
  let arrLength = arr.length;
  for (let i = 0; i < arrLength; i++) {
    result[i] *= productL;
    result[arrLength - 1 - i] *= productR;

    productL *= arr[i];
    productR *= arr[arrLength - 1 - i];
  }
  return result;
}
