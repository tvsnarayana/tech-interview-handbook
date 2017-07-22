Algorithm Questions
==

Here are some tips and questions you can think in your head or clarify with the interviewer. They may lead you to
discover corner cases you might have missed out or even lead you towards the optimal approach!

## Contents

- [Array](array.md)
- [Dynamic Programming and Memoization](dynamic-programming.md)
- [Geometry](geometry.md)
- [Graph](graph.md)
- [Hash Table](hash-table.md)
- [Heap](heap.md)
- [Interval](interval.md)
- [Linked List](linked-list.md)
- [Math](math.md)
- [Matrix](matrix.md)
- [Permutation](permutation.md)
- [Queue](queue.md)
- [Sorting and Searching](sorting-searching.md)
- [Stack](stack.md)
- [String](string.md)
- [Tree](tree.md)

## Algorithm Coding Steps

- For phone screens/remote interviews, prepare paper and pen to jot down and visualize stuff.
- Repeat the question back at the interviewer.
  - Make sure you understand exactly what he is asking.
  - If you misunderstood and when you repeat back the question, he'll clarify.
- Clarify about the question upon hearing it (where relevant).
  - How is the dictionary stored?
  - How big is the input?
  - How big is the range of input values?
  - What kind of input is there? Are there negative numbers? Floating points?
  - Are there duplicates within the input?
  - Extreme cases of the input?
- Explain your high level approach to the interviewer.
  - Consider various approaches and explain out loud why it will/will not work.
  - Start with a brute force approach, even though it is unlikely the one you will be coding.
  - Only start coding after the interviewer has given you the green light.
- Start coding.
  - Always be explaining what you are currently writing/typing to the interviewer.
  - Use clear variable names, avoid single letter names unless they are for iteration.
- Review your code.
  - Come up with small test cases.
  - Step through the code (not your algorithm!) with those sample input.
  - You should emulate a debugger when stepping through.
  - Is there duplicated code? Perhaps you can refactor them.
  - Is there repeated work done? Can the time complexity be improved by reusing previously computed values?
- Analyze your code.
  - Give the time/space complexity.
  - Explain trade-offs made in the code possibly in terms of time/space.

## Must Do

- http://www.geeksforgeeks.org/must-do-coding-questions-for-companies-like-amazon-microsoft-adobe/

## General

- Input validation:
  - Always validate input first. Check if the input is empty, positive, etc. Never assume you are given the valid parameters. Alternatively, ask interviewers for clarification, which can save you time from writing code that does input validation.
- Can the input be preprocessed to reduce lookup time?
- Are there any time/space complexity requirements/constraints?
- Check corner cases:
  - Check for off-by-1 errors.
  - In languages where there are no automatic type coercion, check that concatenation of values are of same type: `int`/`str`/`list`.
  - After finishing your code, use a few example inputs to test your solution.
- Use a mix of functional and imperative programming paradigms:
  - Write pure functions as much as possible.
  - Pure functions are easy to reason about and can help to reduce bugs in your implementation.
  - Avoid mutating the parameters passed into your function, especially if they are passed by reference.
  - However, functional programming is usually expensive in terms of space complexity because of non-mutation. On the other hand, imperative code is faster because of mutation. Hence you will need to achieve a balance between accuracy vs efficiency, by using the right amount of functional and imperative code.
  - Avoid relying and mutating global variables.
  - If you have to rely on global variables, make sure that you do not accidentally mutate it.
- Generally, to improve the speed, we can either choose a better data structure/algorithm or use more memory.
- When you copy and paste code, firstly consider whether it is necessary. Sometimes it is, sometimes it is not. If you find yourself copying and pasting multiple lines, it's probably better to refactor it into a function. But if it is just a single line, usually it is fine. But remember to change the respective variables. It's a common source of bugs!

## Array

- Corner cases:
  - Empty array.
  - Array with 1 or 2 elements.
- Are there duplicate values? Does it affect the answer?
- Check for array out of bounds.
- Is the array sorted or partially sorted? If it is, some form of binary search should be possible.
- Having two indices to traverse/compare two strings/arrays is quite common. For example, we use the same approach to merging two sorted arrays.
- Sorting the array first may significantly simplify the problem. Be sure that the order of elements do not matter or else sorting will mess up the order.
- Sometimes you can traverse from the right rather than from the left.
- Be mindful about slicing or concatenating arrays in your code. Typically, slicing and concatenating sequences require O(n) time. Use start and end indices to demarcate a subarray where possible.
- Sliding window is a common technique used for sequence-based data, such as arrays and strings.
  - TODO: Explain what a sliding window is.
- For questions where summation or multiplication of a subarray is involved, pre-computation using hashing or a prefix/suffix sum/product might be useful.
- If question asks for O(1) space, perhaps using the array itself as a hash table might be useful. If array only has positive values from 1 to N, negate the value at that index to indicate presence of that number.

## Binary

- To check if a number is a power of 2, `n & n-1 == 0`.
- Use the XOR operator `^` to flip bits. Usually combined with `1 << k` to shift the k-th bit: `num ^ (1 << k)`.

## Dynamic Programming

TODO

## Geometry

- When comparing euclidean distance between two points, use dx<sup>2</sup> + dy<sup>2</sup>. It is unnecessary to square root the value.
- To find out if two circles overlap, check that the distance between the two centers of the circles is less than the sum of their radii.

## Graph

TODO

## Linked List

- Corner cases:
  - Single node.
  - Two nodes.
  - Cycle in linked list - Clarify where there can be a cycle in the list? Usually the answer is no.
- Adding a dummy node at the head and/or tail might help to handle many edge cases where operations have to be performed at the head or the tail. The presence of dummy nodes essentially ensures that operations will never have be done on the head or the tail, thereby removing a lot of headache in dealing with corner cases. Be sure to remember to remove them at the end of your code.
- Sometimes linked lists problem can be solved without external storage. Try to borrow ideas from reverse a linked list problem.
- For deletion in linked lists, you can either modify the node values or change the node pointers. You might need to keep a reference to the previous element.
- For partitioning linked lists, create two separate linked lists and join them back together.
- Linked lists problems share similarity with array problems, think about how you would do it for an array and try to apply it to a linked list.
- Two pointer approaches are common:
  - Getting the k<sup>th</sup> from last node - Have two pointers, where one is k nodes ahead of the other. When the node ahead reaches the end, the other node is k nodes behind.
  - Detecting cycles - Have two pointers, where one pointer increments twice as much as the other, if the two pointers meet, means that there is a cycle.
  - Getting the middle node - Have two pointers, where one pointer increments twice as much as the other. When the faster node reaches the end of the list, the slower node will be at the middle.

## Math

- If code involves division, remember to check for division by 0 case.
- Check for and handle overflow/underflow.
- Do account for negative numbers and floating point numbers. This may sound obvious, but under interview pressure, many obvious cases go unnoticed.
- Sum of 1 to N = (n+1) * n/2
- Sum of GP = 2^0 + 2^1 + 2^2 + 2^3 + ... 2^n = 2^(n+1) - 1
- Permutations of N = N! / (N-K)!
- Combinations of N = N! / (K! * (N-K)!)
- When a question involves "a multiple of a number", perhaps modulo might be useful.

## Matrix

- A matrix is a 2-dimensional array.
- When recursively traversing the matrix, always ensure that your next position is within the boundary of the matrix.
- Many grid-based games can be modeled as a matrix, such as Tic-Tac-Toe, Sudoku, Crossword, Connect 4, Battleship, etc. It is not uncommon to be asked to verify the winning condition of the game. For games like Tic-Tac-Toe, Connect 4 and Crosswords, where verification has to be done vertically and horizontally, one trick is to write code to verify the matrix for the horizontal cells, and transpose the matrix and reuse the logic for verifying horizontally to verify originally vertical cells.
- https://leetcode.com/problems/pacific-atlantic-water-flow/#/solutions

## String

- Corner cases:
  - Empty string.
  - String with one or two characters.
  - Strings with only one distinct character.
- Ask about input character set and case sensitivity. Usually the characters are limited to lower case latin characters, i.e. a-z.
- When you need to compare strings where the order isn't important (like anagram), you may consider using a hash map as a counter.
- If you need to keep a counter of characters, a common mistake to make is to say that the space complexity required for the counter is O(n). The space required for a counter is O(1) not O(n), because the upper bound is the range of characters, which is usually a fixed constant.
- Sliding window is a common technique used for strings, as it is also a sequence-based data type.
  - Sliding window template can be found [here](https://discuss.leetcode.com/topic/30941/here-is-a-10-line-template-that-can-solve-most-substring-problems).
- Be mindful about slicing strings in your code. Typically, slicing and concatenating sequences require O(n) time. Use start and end indices to demarcate a substring where possible.
- Can I use some common data structure that can look up strings efficiently?
  - [Trie / Prefix Tree](https://www.wikiwand.com/en/Trie)
  - [Suffix Tree](https://www.wikiwand.com/en/Suffix_tree)
- Common string algorithms:
  - [KMP](https://www.wikiwand.com/en/Knuth%E2%80%93Morris%E2%80%93Pratt_algorithm) for efficient searching of substring. Quite complicated.
  - [Rabin Karp](https://www.wikiwand.com/en/Rabin%E2%80%93Karp_algorithm) for efficient searching of substring using a rolling hash.

#### Non-repeating Characters

- Use a 26-bit bitmask to indicate which lower case latin characters are inside the string.

~~~
mask = 0
for c in set(word):
  mask |= (1 << (ord(c) - ord('a')))
~~~

- To determine if two strings have common characters, perform `&` on the two bitmasks and if the result is non-zero, the two strings do have common characters. `mask_a & mask_b > 0`

#### Anagram

- Determine if two strings are anagrams:
  - Sorting both strings should produce the same resulting string.
  - If we map each character to a prime number and the whole string is mapped to the multiples of all the prime numbers of its characters, anagrams should have the same multiple.
  - Frequency counting of characters will help to determine if two strings are anagrams.
- When the question is about anagrams, you can usually use a hash map as the order does not matter.

#### Palindrome

- The order within the string matters, so hash maps are usually not helpful.
- Ways to determine if a string is a palindrome:
  - Reverse the string and it should be equal to itself.
  - Have two pointers at the start and end of the string, move inwards till they meet. All the characters should be the same.
- When a question is about counting the number of palindromes, a common trick is to have two pointer that move outwards, away from the middle. Note that palindromes can be even/odd length, and that for each middle pivot character, you would need to check twice, once including the character, and once without.
  - For substrings, you can terminate early once there is no match.
  - For subsequences, use dynamic programming as there are overlapping subproblems. Check out [here](https://leetcode.com/problems/longest-palindromic-subsequence/).

#### Dictionary (List of words)

- Preprocess into a trie.
- Two typical ways:
  - Traverse through the whole dictionary.
  - Traverse through the word.
- Having two indices to traverse/compare two string/arrays is quite common. For example, we use the same approach to merging two sorted arrays.

## Recursion

- Always must define a base case.
- Useful for permutation and tree questions.
- Recursions implicitly use a stack. Hence all recursive approaches can be rewritten by using a stack.
- Beware of cases where the recursion level goes too deep (in Python the default limit is 1000).
- Recursion will never be O(1) space complexity because a stack is involved. [Tail-call optimization](https://stackoverflow.com/questions/310974/what-is-tail-call-optimization) can be used to save on the space needed.

## Tree

- Corner cases:
  - Empty tree.
  - Single node.
  - Two nodes.
  - Very skewed tree (like a linked list).
- Recursion is a common approach for trees. When you notice the subtree problem can be used to solve the whole problem, you should try recursion.
- When using recursion, always remember to check for the base case, usually where the node is `null`.
- When you are asked to traverse a tree by level, use depth-first search.
- Sometimes it is possible that your recursive function needs to return two values.
- If the question involves summation of nodes along the way, be sure to check whether nodes can be negative.
- You should be very familiar with writing pre-order, in-order and post-order traversal recursively. As an extension, challenge yourself by writing them iteratively. Sometimes interviews do ask candidates for the iterative approach, especially if they finish writing the recursive approach too fast. 😂

**Binary Tree**

- In-order traversal of a binary tree is insufficient to uniquely serialize a tree. Pre-order/post-order traversal is also required.

**Binary Search Tree**

- In-order traversal will give you all elements in order.

###### References

- http://blog.triplebyte.com/how-to-pass-a-programming-interview
- https://quip.com/q41AA3OmoZbC
