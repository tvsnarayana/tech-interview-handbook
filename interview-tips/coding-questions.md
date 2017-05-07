Coding Questions
==

These are questions you can think in your head or clarify with the interviewer. They may lead you to
discover corner cases you might have missed out or even point you to the optimal approach!

### General

- Clarify about the question upon hearing it.
  - How is the dictionary stored?
- Input validation:
  - How big is the range of input values?
  - What kind of input is there? Are there negative numbers? Floating points?
  - Are there duplicates within the input?
  - Extreme cases of the input?
  - Always validate input first. Check if the input is empty, positive, etc. Never assume you are given the valid params. Alternatively, ask interviewers for clarification, which can save you from unnecessary checkings.
- Can the input be preprocessed to reduce lookup time?
- Are there any time/space complexity requirements/constraints?
- Check corner cases:
  - Check for off-by-1 errors.
  - Check that concatenation of values are of same type: int/str/list.
  - After finishing your code, use a few example inputs to test your solution.

### Numbers

- If code involves division, remember to check for division by 0 case.
- Check for and handle overflow/underflow.
- Handle negative numbers.

### Arrays

- Corner cases:
  - Empty array
  - Array with 2 elements
- Are there duplicate values?
- Check for array out of bounds.
- Is the array sorted or partially sorted? If it is, some form of binary search should be possible.
- Having two indices to traverse/compare two string/arrays is quite common. For example, we use the same approach to merging two sorted arrays.
- Sorting the array first may significantly simplify the problem.
- Sometimes you can traverse from the right rather than from the left.

### Strings

- Ask about character set and case sensitivity.
- Can I use some common data structure that can deal with strings efficiently?
  - [Trie / Prefix Tree](https://www.wikiwand.com/en/Trie)
  - [Suffix Tree](https://www.wikiwand.com/en/Suffix_tree)
- Common string algorithms:
  - [KMP](https://www.wikiwand.com/en/Knuth%E2%80%93Morris%E2%80%93Pratt_algorithm) for efficient searching of substring
  - [Rabin Karp](https://www.wikiwand.com/en/Rabin%E2%80%93Karp_algorithm) rolling hash

**Anagrams**

- Determine if two strings are anagrams:
  - Sorting both strings should produce the same resulting string.
  - If we map each character to a prime number and the whole string is mapped to the multiples of all the prime numbers of its characters, anagrams should have the same multiple.
  - Frequency counting of characters will help to determine if two strings are anagrams.
- When question is about anagrams, usually can use hash map.
- When you need to compare things regardless of order (like anagram), you may consider hash, hash map.

**Palindromes**

- TBD

**Dictionary (List of words)**

- Preprocess into a trie.
- Two typical ways:
  - Traverse through the whole dictionary.
  - Traverse through the word.
- Having two indices to traverse/compare two string/arrays is quite common. For example, we use the same approach to merging two sorted arrays.

### Trees

- Traverse tree by level -> DFS
- Recursion is common for trees. When you notice the subtree problem can be used to solve the whole problem, you should try recursion.
- It's possible that your recursive function needs to return two values.
- If the question involves summation of paths, be sure to check whether nodes can be negative.

### Binary Trees

- In-order traversal of a binary tree is insufficient to uniquely serialize a tree. Pre-order/post-order traversal is also required.

### Binary Search Trees

- In-order traversal will give you all elements in order.

### Linked List

- Linked list problem sometimes can be solved without external storage. Try to borrow ideas from reverse a linked link problem.
