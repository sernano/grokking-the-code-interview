/* In problems where we deal with *sorted* arrays or linked lists and need to find a set of elements that
   fulfill certain constraints, the two pointers approach is useful. Take a look at the following problem:

   Given an array of sorted numbers and a target sum, find a pair in the array whose sum is equal to the
   given target.

   A naive approach to solving this problem would involve a nested for loop with two pointers, i and j.
   We could consider each element one by one (pointed to with i) and compare it to the rest of the elements
   with the second pointer (pointed to with j). The time complexity of this algorithm would be O(N2), where
   N is the number of elements in the input array.

   Considering that the array is sorted, it would be much more efficient to start with one pointer at the
   beginning and another pointer at the end. At every step, we check if the numbers pointed to add up to
   the target sum. If they don't, we will do one of two things:

   1. If the sum of the two numbers pointed by the two pointers is greater than the target sum, we know that
   we need a pair with a smaller sum. So to try to more pairs, we can decrement the end pointer.

   2. If the sum of the two numbers pointed two is smaller than the target sum, this means that we need a pair
   with a larger sum. So, to try more pairs, we can increment the start pointer.

   Here's a visual representation of the algorithm. Our target sum is six, and our array is [1, 2, 3, 4, 6].

   pointer1    pointer2
      |           |
     [1, 2, 3, 4, 6] // Since 1 + 6 > 6, we decrement pointer2 to put us closer to the target sum.

   pointer1
      |
     [1, 2, 3, 4, 6] // Since 1 + 4 < 6, we increment pointer1 to put us closer to the target sum.
               |
            pointer2

      pointer1
         |
     [1, 2, 3, 4, 6] // 4 + 2 === 6. Woohoo!
               |
            pointer2

   The time complexity of the above algorithm is O(N). Way better than O(N2)! */
