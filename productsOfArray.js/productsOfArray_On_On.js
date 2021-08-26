function productsOfArrays(arr) {
  let result = [];
  let productL = 1;
  let productR = 1;
  let leftProducts = new Array(arr.length).fill(1);
  let rightProducts = new Array(arr.length).fill(1);
  for (let i = 0; i < arr.length; i++) {
    leftProducts[i] = productL;
    rightProducts[arr.length - 1 - i] = productR;
    productL *= arr[i];
    productR *= arr[arr.length - 1 - i];
  }
  for (let i = 0; i < arr.length - 1; i++) {
    result[i] = leftProducts[i] * rightProducts[i];
  }
  return result;
}
