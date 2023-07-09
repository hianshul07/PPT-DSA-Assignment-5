function findDuplicates(nums) {
  const result = [];
  
  for (let i = 0; i < nums.length; i++) {
    const num = Math.abs(nums[i]) - 1;
    
    if (nums[num] < 0) {
      result.push(num + 1);
    } else {
      nums[num] *= -1;
    }
  }
  
  return result;
}