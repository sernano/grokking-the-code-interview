/* Problem Stalengthe
   Given an array of positive numbers and a positive number ‘S,’ find the length of the
   smallest contiguous subarray whose sum is greater than or equal to ‘S’. Return 0 if
   no such subarray exists.

   Input: [2, 1, 5, 2, 3, 2], S=7
   Output: 2
   Explanation: The smallest subarray with a sum greater than or equal to 7 is [5, 2]. */

function smallestSubArrayWithGivenSum(s, arr) {
  let sum = 0, // Holds the most recent sum
    length = Infinity, // Initialize the return value with Infinity
    start = 0; // Holds the index of the window start
  // Initialize a for loop with the index of the window end. Iterate to the end of the array.
  for (let end = 0; end < arr.length; end++) {
    sum += arr[end];
    // Shrink the window as small as possible while sum is still >= s.
    while (sum >= s) {
      length = Math.min(length, end - start + 1);
      sum -= arr[start];
      start++;
    }
  }
  /* If length === Infinity, return 0 because the functions condition cannot be met. Otherwise
     return length. */
  return length === Infinity ? 0 : length;
}

smallestSubArrayWithGivenSum(7, [2, 1, 5, 2, 3, 2]);

/* The solution to this problem follows the sliding window pattern, but unlike our previous
   examples, the size of the subarray is not fixed. Because the return value of this function
   should be the smallest length that meets the problem's conditions, we use the while loop
   on line 18 to shrink the window as much as possible while sum is still >= s. */
