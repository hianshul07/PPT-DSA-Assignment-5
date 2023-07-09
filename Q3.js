function sortedSquares(nums) {
  const squared = [];
  
  for (let i = 0; i < nums.length; i++) {
    squared.push(nums[i] * nums[i]);
  }
  
  squared.sort((a, b) => a - b);
  
  return squared;
}

// test case
const nums = [-4, -1, 0, 3, 10];
console.log(sortedSquares(nums));
