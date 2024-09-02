var maxArea = function (height) {
  let result = 0;
  let left = 0;
  let right = height.length - 1;
  while (left < right) {
    let h = height[left] < height[right] ? height[left] : height[right];
    let w = right - left;
    let currentArea = h * w;
    result = currentArea > result ? currentArea : result;
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return result;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
// maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]);
