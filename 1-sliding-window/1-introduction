/* The following example will calculate the average of all contiguous subarrays of size 'K' found within arr.
   The time complexity of this brute-force algorithm will be O(N*K), where N is the number of elements in the
   input array. */

function findAvgOfSubArrays(K, arr) {
  const result = [];
  for (let i = 0; i < arr.length - K + 1; i++) {
    // Finds the sum of next K elements:
    let sum = 0;
    for (let j = i; j < i + K; j++) {
      sum += arr[j];
    }
    result.push(sum / K); // Calculate average and push to result array
  }
  return result;
}

findAvgOfSubArrays(5, [1, 3, 2, 6, -1, 4, 1, 8, 2]); // returns [2.2, 2.8, 2.4, 3.6, 2.8]

/* When considering the above example where K = 5, we can see that the above algorithm is inefficient.  For any
   two consecutive subarrays of size 5, the overlapping part, which will contain four elements, will be
   evaluated twice. For example, when examining the input in the example above:

   {subarray (0-4)}
    |            |
   [1, 3, 2, 6, -1, 4, 1, 8, 2]
       |            |
      {subarray (1-5)}

   Elements 3, 2, 6, 1 are overlapping. Ideally, our algorithm would reuse the sum we have calculated for
   overlapping elements.

   A more efficient way to solve this problem would involve visualizing each contiguous subarray as a sliding
   window of K elements. Meaning, we will 'slide' the window by one element when we move to the next subarray.
   
   To reuse the sum from the previous subarray, we will subtract the element leaving the window and add the
   the element being introducted to the window. Because we don't have to iterate through the whole subarray
   to find the sum, the algorithm complexity will reduce to O(N). */

function efficientAvgOfSubArrays(K, arr) {
  const result = [];
  let sum = 0;
  let windowStart = 0;
  // Initialize a for loop with a variable that holds the index of the window end and runs the entire array length.
  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    sum += arr[windowEnd]; // Add the element at windowEnd to the sum
    // Calculate average, push, and slide windowStart only if we've hit the required window of size K
    if (windowEnd >= K - 1) {
      result.push(sum / K); // Calculate the average and push to results array
      sum -= arr[windowStart]; // Remove the previous element from the sum
      windowStart++; // Move windowStart to the right
    }
  }
  return result;
}

efficientAvgOfSubArrays(5, [1, 3, 2, 6, -1, 4, 1, 8, 2]);
