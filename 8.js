function invertedPyramid(rows) {
  console.log("Enter number of rows :" + rows);
  for (let i = 0; i < rows; i++) {
    const spaces = "  ".repeat(i);
    const stars = "* ".repeat(2 * (rows - i) - 1);

    console.log(spaces + stars.trim());
  }
}

invertedPyramid(7);
