/* Problem Statement:
   Given an array of characters where each character represents a fruit tree, you are given two baskets and your
   goal is to put a maximum number of fruits in each basket. The only restriction is that each basket can have only
   one type of fruit.

   You can start with any tree, but you can't skip a tree once you have started. You will pick one fruit from each
   tree until you cannot, i.e., you will stop when you have to pick from a third fruit type.

   Write a function to return the maximum number of fruits in both baskets. Simply, return the length of the longest
   subarray that can be found in 'fruits' that holds no more than two unique characters.

   Example:
   Input: Fruit = ['A', 'B', 'C', 'A', 'C']
   Output: 3
   Explanation: We can put 2 'C' in one basket and one 'A' in the other from the subarray ['C', 'A', 'C'] */

function fruitsIntoBaskets(fruits) {
  const chars = {}; // Hashmap that holds characters currently in the window
  let fruitCount = 0, // Holds the length of the longest subarray
    currentCount = 0, // Holds the length of the current subarray/window
    start = 0; // Index of the window start
  // Initialize a for loop with a variable that holds the index of the window end
  for (let end = 0; end < fruits.length; end++) {
    const rightChar = fruits[end]; // The character at the end of the window
    // Add the character at the end of the window to the hash map
    rightChar in chars ? chars[rightChar]++ : chars[rightChar] = 1;
    /* If the window holds 2 or less unique characters, find the current length of the window, aka fruit count. If it's
       greater than the current value of fruitCount, replace the value of fruit count with the current length */
    if (Object.keys(chars).length <= 2) {
      currentCount = end - start + 1;
      fruitCount = Math.max(currentCount, fruitCount);
      /* If the window holds more than 2 unique characters, we need to shrink the window from the left side until it only
         holds two unique characters, aka baskets. */
    } else if (Object.keys(chars).length > 2) {
      while (Object.keys(chars).length > 2) {
        const leftChar = fruits[start];
        chars[leftChar] === 1 ? delete chars[leftChar] : chars[leftChar]--;
        start++;
      }
    }
  }
  return fruitCount;
}

fruitsIntoBaskets(['A', 'B', 'C', 'A', 'C']); // returns 3
