function construct2DArray(original, m, n) {
  if (original.length !== m * n) {
    return [];
  }
  
  let result = new Array(m);
  for (let i = 0; i < m; i++) {
    result[i] = new Array(n);
  }
  
  for (let i = 0; i < m * n; i++) {
    let row = Math.floor(i / n);
    let col = i % n;
    result[row][col] = original[i];
  }
  
  return result;
}

// test case
let original = [1, 2, 3, 4];
let m = 2;
let n = 2;
console.log(construct2DArray(original, m, n));
