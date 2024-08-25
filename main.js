var lengthOfLongestSubstring = function (s) {
  let current = "";
  let maxLength = 0;
  let start = 0;

  for (let end = 0; end < s.length; end++) {
    // s[end]
    while (current.includes(s[end])) {
      current = current.slice(1);
      start++;
    }

    current += s[end];

    if (current.length > maxLength) {
      maxLength = current.length;
    }
  }
  return maxLength;
};

console.log(lengthOfLongestSubstring("dvdf"));
