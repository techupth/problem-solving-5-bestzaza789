function runningSum(nums) {
  let runningSumArray = [];
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    runningSumArray.push(sum);
  }

  return runningSumArray;
}

// Test the function
let nums = [1, 2, 3, 4];
console.log("Output:", runningSum(nums));
