function distinctNums(nums1, nums2) {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);
  
  const notInNums2 = [];
  const notInNums1 = [];
  
  for (let num of set1) {
    if (!set2.has(num)) {
      notInNums2.push(num);
    }
  }
  
  for (let num of set2) {
    if (!set1.has(num)) {
      notInNums1.push(num);
    }
  }
  
  return [notInNums2, notInNums1];
}