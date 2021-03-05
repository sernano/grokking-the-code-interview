/* Problem Statement:
   Given an array of positive numbers and a positive number ‘S,’ find the length of the
   smallest contiguous subarray whose sum is greater than or equal to ‘S’. Return 0 if
   no such subarray exists.

   Input: [2, 1, 5, 2, 3, 2], S=7
   Output: 2
   Explanation: The smallest subarray with a sum greater than or equal to 7 is [5, 2]. */

function smallestSubArrayWithGivenSum(s, arr) {
  let sum = 0, // Holds the most recent sum
    result = Infinity, // Initialize the return value with Infinity
    start = 0; // Holds the index of the window start
  // Initialize a for loop with the index of the window end. Iterate to the end of the array.
  for (let end = 0; end < arr.length; end++) {
    sum += arr[end];
    // Shrink the window as small as possible while sum is still >= s.
    while (sum >= s) {
      result = Math.min(result, end - start + 1);
      sum -= arr[start];
      start++;
    }
  }
  /* If result === Infinity, return 0 because the functions condition cannot be met. Otherwise
     return the result. */
  return result === Infinity ? 0 : result;
}

smallestSubArrayWithGivenSum(7, [2, 1, 5, 2, 3, 2]);
