function moveZeroes(nums) {
  let nonZeroPointer = 0;

  // Iterate through the array
  for (let i = 0; i < nums.length; i++) {
    // If the current element is non-zero
    if (nums[i] !== 0) {
      // Swap the current element with the element at the non-zero pointer
      let temp = nums[i];
      nums[i] = nums[nonZeroPointer];
      nums[nonZeroPointer] = temp;
      nonZeroPointer++;
    }
  }
}

// Test the function
let nums = [0, 1, 0, 3, 12];
moveZeroes(nums);
console.log("Output:", nums);
