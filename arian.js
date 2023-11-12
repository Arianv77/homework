function create2DArray(rows, cols) {
  const defaultValues = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];

  const newArray = [];

  for (let i = 0; i < rows; i++) {
    newArray[i] = [];
    for (let j = 0; j < cols; j++) {
      newArray[i][j] = (defaultValues[i] && defaultValues[i][j]) || 0;
    }
  }

  return newArray;
}

function display2DArray(array, row, col) {
  if (row < array.length) {
    if (col < array[row].length) {
      console.log(array[row][col]);
      display2DArray(array, row, col + 1);
    } else {
      display2DArray(array, row + 1, 0);
    }
  }
}

const my2DArray = create2DArray(3, 3);

console.log("نمایش آرایه دوبعدی:");
display2DArray(my2DArray, 0, 0);
