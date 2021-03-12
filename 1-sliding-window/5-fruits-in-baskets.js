/* Problem Statement:
   Given an array of characters where each character represents a fruit tree, you are given two baskets and your
   goal is to put a maximum number of fruits in each basket. The only restriction is that each basket can have only
   one type of fruit.

   You can start with any tree, but you can't skip a tree once you have started. You will pick one fruit from each
   tree until you cannot, i.e., you will stop when you have to pick from a third fruit type.

   Write a function to return the maximum number of fruits in both baskets.

   Example:
   Input: Fruit = ['A', 'B', 'C', 'A', 'C']
   Output: 3
   Explanation: We can put 2 'C' in one basket and one 'A' in the other from the subarray ['C', 'A', 'C'] */

function fruitsIntoBaskets(fruits) {
  const chars = {};
  let fruitCount = 0,
    currentCount = 0,
    start = 0;
  for (let end = 0; end < fruits.length; end++) {
    const rightChar = fruits[end];
    rightChar in chars ? chars[rightChar]++ : chars[rightChar] = 1;
    if (Object.keys(chars).length <= 2) {
      currentCount = end - start + 1;
      fruitCount = Math.max(currentCount, fruitCount);
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
