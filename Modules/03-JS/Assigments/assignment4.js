//JS Assignment 4
//find the nth Tetrahedral Number
//create a function that takes an integer n and returns the nth tetrahedral number.

function tetra(n) {
  let result = 0;

  for (let i = 1; i <= n; i++) {
    result += (i * (i + 1)) / 2;
  }
  return result;
}
console.log(tetra(2));
console.log(tetra(5));
console.log(tetra(6));


