var convert = function (s, numRows) {
  if (s.length <= numRows) return s;

  let result = new Array(Math.min(numRows, s.length)).fill("");
  let row = 0;
  let node = true;
  for (let i = 0; i < s.length; i++) {
    result[row] += s[i];

    if (numRows !== 1) {
      if (node) {
        row++;
      } else {
        row--;
      }
    }
    if (row === 0 || row === numRows - 1) {
      node = !node;
    }
  }
  return result.join("");
};

console.log(convert("AB", 1));
