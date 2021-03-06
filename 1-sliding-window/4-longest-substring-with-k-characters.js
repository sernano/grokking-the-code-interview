/* Problem Statement:
   Given a string, find the length of the longest substring in it with no more than K distinct characters.

   Example:
   Input: string="araaci", k=2
   Output: 4
   Explanation: The longest substring with no more than '2' distinct characters is "araa". */

function longestSubStringWithKDistinctChars(str, k) {
  const chars = {}; // Hashmap for storing characters currently in window
  let length = 0, // Holds the length of the substring
    start = 0; // Index of the window start
  // Initialize a for loop with a variable that holds the index of the window end
  for (let end = 0; end < str.length; end++) {
    const rightChar = str[end];
    // As the window expands to the left, add characters and their counts to the hashmap
    rightChar in chars ? chars[rightChar]++ : chars[rightChar] = 1;
    /* When the substring window length grows larger than k, shrink the window from the right side and remove
       the excluded right side characters from the hash map */
    while (Object.keys(chars).length > k) {
      const leftChar = str[start];
      chars[leftChar] -= 1;
      if (chars[leftChar] === 0) { delete chars[leftChar] };
      start++;
    }
    // If the current window length is less than the previous length, store the new length in the 'length' var
    length = Math.max(length, end - start + 1);
  }
  return length;
}

longestSubStringWithKDistinctChars('araaci', 2); // returns 4
