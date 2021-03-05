/* Problem Statement:
   Given an array of positive numbers and a positive number ‘k,’ find the maximum
   sum of any contiguous subarray of size ‘k’.

   Example:
   Input: [2, 1, 5, 1, 3, 2], k=3
   Output: 9
   Explanation: Subarray with maximum sum is [5, 1, 3]. */

function maxSubArrayOfSizeK(arr, k) {
  let sum = 0, // Holds the most recent sum
    result = 0, // Holds the return value
    start = 0; // Holds the index of the window start
  /* Initialize a for loop with a variable holding the index of the window end that
     iterates for the entire length of the array */
  for (let end = 0; end < arr.length; end++) {
    sum += arr[end]; // Continually adds the number at the end index to the current sum
    /* Once the window reaches the length of size k, compare the current sum to the value
       of the return value. If the return value/previous sum is less than the current sum,
       replace it with the current sum. */
    if (end >= k - 1) {
      result = Math.max(sum, result);
      sum -= arr[start]; // Remove the previous element from the sum
      start++; // Move start to the right
    }
  }
  return result;
}

maxSubArrayOfSizeK([2, 1, 5, 1, 3, 2], 3);
