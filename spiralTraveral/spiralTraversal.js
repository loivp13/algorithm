function spiralTraveral(arr) {
  let row = 0;
  let col = 0;
  let rowEnd = arr.length - 1;
  let colEnd = arr[0].length - 1;
  let result = [];
  while (row <= col) {
    for (let i = col; i <= colEnd; i++) {
      result.push(arr[row][i]);
    }
    for (let i = row + 1; i <= rowEnd; i++) {
      result.push(arr[i][colEnd]);
    }
    for (let i = colEnd - 1; i >= col; i--) {
      result.push(arr[rowEnd][i]);
    }
    for (let i = rowEnd - 1; i > row; i--) {
      result.push(arr[i][col]);
    }
    row++;
    col++;
    rowEnd--;
    colEnd--;
  }
}
