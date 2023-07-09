function distanceValue(arr1, arr2, d) {
  let distance = 0;
  
  for (let num1 of arr1) {
    let satisfied = true;
    
    for (let num2 of arr2) {
      if (Math.abs(num1 - num2) <= d) {
        satisfied = false;
        break;
      }
    }
    
    if (satisfied) {
      distance++;
    }
  }
  
  return distance;
}

const arr1 = [4, 5, 8];
const arr2 = [10, 9, 1, 8];
const d = 2;
console.log(distanceValue(arr1, arr2, d));
