var productExceptSelf = function (nums) {
  const length = nums.length;
  let result = new Array(length).fill(1);

  // Tich truoc cua vi tri i
  let previous = 1;
  for (let i = 0; i < length; i++) {
    // vi tri i trong result la tich cac phan tu truoc vi tri i trong nums
    result[i] = previous;
    //
    previous *= nums[i];
  }

  let behind = 1;
  for (let i = length - 1; i >= 0; i--) {
    result[i] *= behind;
    behind *= nums[i];
  }
  return result;
};

var nums = [1, 2, 3, 4];
console.log(productExceptSelf(nums));
