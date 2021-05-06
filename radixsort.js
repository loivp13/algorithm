function getDigit(num, place) {
  if (place > num.length - 1) {
    return;
  }
  let strNum = num.toString();
  return +strNum[strNum.length - 1 - place];

  //return an int
}

function digitCount(num) {
  return num.toString().length;
}
module.exports = {
  getDigit,
  digitCount,
};
