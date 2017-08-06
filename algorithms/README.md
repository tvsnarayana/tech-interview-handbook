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

## Picking a Programming Language

Before anything else, you need to pick a programming language to do your interviews in. Most companies will let you code in any language you want, the only exception I know being Google, where they only allow you to pick from Java, C++ or Python for their algorithmic coding interviews. Most of the time, I would recommend that you use a language that you are extremely familiar with, rather than picking up a new language just for doing interviews because the company uses that language heavily.

There are some languages which are more suitable than others for coding interviews and some languages you want to absolutely avoid. From my experience interviewing as an interviewer, most candidates pick Python or Java. Other commonly seen languages include JavaScript, Ruby and C++. I would absolutely avoid lower level languages like C or Go, simply because they lack in many standard library functions and available data structures.

Personally, Python is my de facto choice for coding algorithm during interviews because it is succinct and has a pretty huge library of functions and data structures available. One of my top reasons for recommending Python is that it uses consistent APIs that operate on different data structures, such as `len()`, `for ... in ...` and slicing notation on sequences (strings/lists/tuples). Getting the last element in a sequence is `arr[-1]` and reversing it is simply `arr[::-1]`. You can achieve a lot with minimal syntax in Python.

Java is a decent choice too but having to constantly declare types in your code means extra keystrokes which results in slower coding/typing speed. The reasons for choosing/not choosing C++ are similar to Java. Ultimately, Python, Java and C++ are decent choices of languages. If you have been using Java at work for awhile now and do not have time to be comfortably familiar with another language, I would recommend just sticking to Java instead of picking up Python from scratch just for interviews to avoid having to context switch between languages during work vs interviews.

One exception to the convention of allowing you to "pick any programming language you want" is when you are interviewing for a domain-specific position, such as Front End/iOS/Android Engineer roles, in which you would need to be familiar with coding algorithms in JavaScript, Objective-C/Swift and Java respectively. If you need to use a data structure that the language does not support, such as a Queue or Heap in JavaScript, perhaps try asking the interviewer whether you can assume that you have a data structure that implements certain methods with specified time complexities. If the implementation of that data structure is not crucial to solving the problem, the interviewer will usually allow it. In reality, choosing the right data structures to tackle the right problem is more important than knowing the intricate implementation details.

Next, gain familiarity and mastery of your chosen programming language:

1. Practice coding algorithms using your chosen language. There are various Online Judges such as [LeetCode](https://leetcode.com/), [HackerRank](https://www.hackerrank.com/) and [CodeForces](http://codeforces.com/) for you to practice questions and get used to the language. From experience, LeetCode questions are the most similar to what is being asked in interviews, where as HackerRank and CodeForces questions are more similar to competitive programming questions.
2. Find out the time and space complexities of the common operations in your chosen language. For Python, this [page](https://wiki.python.org/moin/TimeComplexity) will come in handy. Also find out the underlying sorting algorithm that is being used in the language's `sort()` function. After completing a question on LeetCode, I usually add the time and space complexities of the written code as comments above the function as practice for analyzing the algorithm.
3. Find out the recommended coding style for your language and stick to it.
4. Find out and be familiar with the common pitfalls and caveats of the language. If you point out them out during the interview and intelligently avoid falling into it, you will usually impress the interviewer and that results in bonus points in your feedback, regardless of whether the interviewer is familiar with the language or not.

Practice, practice and more practice!

## Algorithmic Coding Interview

Your interviewer is looking out for signals that you fit the requirements of the role and it is up to you to display those signals to them. Initially it may feel weird to be talking when you are coding, as most people do not have the habit of explaining out loud as they are typing code. However, it is hard for the interviewer to know what you are thinking just by looking at the code that you type. If you communicated your approach to the interviewer before you start coding, you can validate your approach with him and both of you can agree upon an approach that he can accept.

**Before the Interview**

For phone screens/remote interviews, prepare paper and pen/pencil to jot down and visualize stuff. If you are given a question on trees and graphs, it will definitely help if you draw out some examples of the data structure given in the question.

Use earphones and make sure you are in a quiet environment. You definitely do not want to be holding a phone in one hand and only be able to type with the other. Try avoiding using speakers as if the echo is bad, communication is harder and repeating of words will just result in loss of valuable time.

**Upon Getting the Question**

Many candidates jump into coding the moment they hear the question. That is usually a big mistake. Take a moment to repeat the question back at the interviewer and make sure that you understand exactly what he is asking. If you misunderstood and when you repeat back the question, he'll clarify.

Always clarify about the question upon hearing it, even if it you think it is clear to you. You might discover something that you might have missed out and it also sends a signal to the interviewer that you are a careful person. Consider asking the following questions:

- How big is the size of the input?
- How big is the range of values?
- What kind of values are there? Are there negative numbers? Floating points?
- Are there duplicates within the input?
- What are some extreme cases of the input?
- How is the input stored? If you are given a dictionary of words, is it a list of strings or a Trie?

After you have sufficiently clarified the scope and intention of the problem, explain your high level approach to the interviewer. If you are stuck, consider various approaches and explain out loud why it will/will not work. Sometimes your interviewer might drop hints and lead you to the right path.

Start with a brute force approach, communicate it to the interviewer, explain the time and space complexity and why it is bad. It is unlikely that the brute force approach will be one that you will be coding. At this point, the interviewer will usually pop the "Can we do better?" question, meaning that he is looking for a more optimal approach. Personally, this is usually the hardest part of the interview. In general, look for repeated work and try to optimize them by potentially caching the calculated result somewhere and reference it later, rather than having to compute it all over again. There are some tips on tackling topic-specific questions that I dive into details below.

Only start coding after you and your interviewer have agreed on an approach, and has given you the green light.

**Starting to Code**

Write your code with good coding style. Reading code written by others is usually not an enjoyable task. Reading horribly formatted code by others makes it worse. Your goal is to make your interviewer understand the code you have written so that he can quickly evaluate if your code does what you say it does and whether it solves the given problem. If you have chose Python, refer to the [PEP 8 Style Guide](https://pep8.org/), or if you have chosen Java, refer to [Google's Java Style Guide](https://google.github.io/styleguide/javaguide.html). Use clear variable names, avoid single letter names unless they are for iteration.

Always be explaining what you are currently writing/typing to the interviewer. This is not about literally reading out what you are typing to the interviewer. Talk about the section of the code you are currently implementing at a higher level, explain why it is written as such and what it is trying to achieve.

When you copy and paste code, consider whether it is necessary. Sometimes it is, sometimes it is not. If you find yourself copying and pasting one whole chunk of code, it is probably an indicator that you can refactor by containing those lines into a function. If it is just a single line you copied, usually it is fine. Do remember to change the respective variables in your copied line of code where relevant. Copy-paste errors are a common source of bugs even in day-to-day coding!

**After Coding**

After you have finished coding, do not immediately announce to the interviewer that you are done. In most cases, your code is usually not perfect and contains some bugs or syntax errors. What you need to do now is to review your code.

Firstly, come up with small test cases and step through the code (not your algorithm!) with those sample input. Interviewers like it when you read their mind, and what they usually do after you have finished coding would be to get you to write tests. It is a huge plus if you write tests for your code even without prompts from them. You should be emulating a debugger when stepping through and jot down the values of certain variables as you step through them or say them out.

If there are huge duplicated chunks of code in your solution, it would be a good chance to refactor it and demonstrate to the interviewer that you are one who values code quality. Look out for places where you can short-circuit the logic.

Lastly, give the time/space complexity of your code and explain why it is such. You can even annotate certain chunks of your code with the various time/space complexities to demonstrate your understanding of your code and the APIs of your chosen programming language. Explain any trade-offs made in the code possibly in terms of time/space.

If your interviewer is happy with the solution, the interview usually ends here. It is also not uncommon that the interviewer asks you extension questions, such as how you would handle the problem if the whole input is too large to fit into memory. This is a common follow-up question at Google where they care a lot about scale. The answer is usually a divide-and-conquer approach - perform distributed processing of the data and only read certain chunks of the input from disk into memory, write the output back to disk and combine them later on.

## Mock Interviews

Interviewing is a skill that you can get better at. The steps mentioned above can be rehearsed over and over again until you have fully internalized them and following those steps become second nature to you. To get more practice for interviews, I would recommend finding a friend to partner with and you two can practice interviewing each other.

A great resource for practicing mock interviews would be [interviewing.io](https://interviewing.io/). interiewing.io is a platform that matches interviewees with interviewers from top companies and provides an environment for interviews to be conducted anonymously. At the end of the interview, both interviewer and interviewees can provide feedback to each other for the purpose of improvement. Doing well in your mock interviews will unlock the jobs page and allow you to book interviews (also anonymously) with top companies like Uber, Lyft, Quora, Asana and more.

I have used interviewing.io both as an interviewer and an interviewee and found the user experience to be really great! [Aline Lerner](https://twitter.com/alinelernerLLC), the CEO and co-founder of interviewing.io is passionate about revolutionizing the technical interview process and helping candidates to improve their skills at interviewing. She has also published a number of technical interview-related articles on the [interviewing.io blog](http://blog.interviewing.io/). interviewing.io is still in beta now but I recommend signing up early to increase the likelihood of getting an invite as soon as possible.

Another platform that allows you to practice coding interviews is [Pramp](https://pramp.com/). Where interviewing.io matches potential job seekers with seasoned technical interviewers, Pramp differs takes a different approach. Pramp pairs you up with another peer who is also a job seeker and both of you take turns to play the role of interviewer and interviewee. Pramp also prepares questions for you, along with suggested solutions and hints. Personally, I do not really like Pramp's approach because if I were to interview someone, I would rather choose a question I am familiar with. Also, many users of the platform do not have the experience of being interviewers and that can result in a horrible interview experience. There was once where my matched peer, as the interviewer, did not have the right understanding of the question and attempted to lead me down the wrong path of solving the question.

The next section dives deep into practical tips for certain topics of each type of algorithmic coding questions. Many algorithm questions involve techniques that can be applied to questions of similar nature. The more techniques you have in your arsenal, the higher the chances of succeeding in your interview.

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
- Data structures are your weapons. Choosing the right weapon for the right battle is the key to victory. You wouldn't want to bring a sniper rifle into a fist fight or a baseball bat into an infiltration mission. You need to be aware about the strengths of each data structure and the time complexities for its various operations like the back of your hand. Hashes/maps are probably the most commonly used data structure for algorithm questions. If you're really stuck on a question, the last resort can be to enumerate through the possible data structures (thankfully there aren't that many of them) and consider how each of them can be applied to the problem. It has worked for me sometimes.

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

- Questions involving binary representations and bitwise operations are asked sometimes, and you must be absolutely be familiar with how to convert a number from decimal form into binary form in your programming language of choice.
- Test k<sup>th</sup> bit is set: `num & (1 << k) != 0`.
- Set k<sup>th</sup> bit: `num |= (1 << k)`.
- Turn off k<sup>th</sup> bit: `num &= ~(1 << k)`.
- Toggle the k<sup>th</sup> bit: `num ^= (1 << k)`.
- To check if a number is a power of 2, `num & num - 1 == 0`.

##### Questions

- [Sum of Two Integers](https://leetcode.com/problems/sum-of-two-integers/)
- [Number of 1 Bits](https://leetcode.com/problems/number-of-1-bits/)
- [Counting Bits](https://leetcode.com/problems/counting-bits/)
- [Missing Number](https://leetcode.com/problems/missing-number/)
- [Reverse Bits](https://leetcode.com/problems/reverse-bits/)

## Dynamic Programming

- Usually used to solve optimization problems.
- Sometimes you do not need to store the whole DP table in memory, the last two values or the last two rows of the matrix will suffice.

##### Questions

- 0/1 Knapsack
- [Climbing Stairs](https://leetcode.com/problems/climbing-stairs/)
- [Coin Change](https://leetcode.com/problems/coin-change/)
- [Longest Increasing Subsequence](https://leetcode.com/problems/longest-increasing-subsequence/)
- [Longest Common Subsequence]()
- [Word Break Problem](https://leetcode.com/problems/word-break/)
- [Combination Sum](https://leetcode.com/problems/combination-sum-iv/)
- [House Robber](https://leetcode.com/problems/house-robber/) and [House Robber II](https://leetcode.com/problems/house-robber-ii/)
- [Decode Ways](https://leetcode.com/problems/decode-ways/)

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
- Be familiar with the following routines because many linked list questions make use of one or more of these routines in the solution.
  - Reversing a linked list in-place.
  - Finding the middle node of the linked list using fast/slow pointers.
  - Merging two lists together.

##### Questions

- [Reverse a Linked List](https://leetcode.com/problems/reverse-linked-list/)
- [Detect Cycle in a Linked List](https://leetcode.com/problems/linked-list-cycle/)
- [Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists/)
- [Merge K Sorted Lists](https://leetcode.com/problems/merge-k-sorted-lists/)
- [Remove Nth Node From End Of List](https://leetcode.com/problems/remove-nth-node-from-end-of-list/)
- [Reorder List](https://leetcode.com/problems/reorder-list/)

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
- For questions involving traversal, you almost always want to make a copy of the matrix with the same dimensions that is initialized to empty values. Check that none of the arrays are 0 length. Be familiar with that routine.
- When recursively traversing the matrix, always ensure that your next position is within the boundary of the matrix.
- Graphs are commonly represented as 2-D matrices where cells are the nodes and each cell can traverse to its adjacent cells (up/down/left/right).
- Many grid-based games can be modeled as a matrix, such as Tic-Tac-Toe, Sudoku, Crossword, Connect 4, Battleship, etc. It is not uncommon to be asked to verify the winning condition of the game. For games like Tic-Tac-Toe, Connect 4 and Crosswords, where verification has to be done vertically and horizontally, one trick is to write code to verify the matrix for the horizontal cells, and transpose the matrix and reuse the logic for verifying horizontally to verify originally vertical cells.
- https://leetcode.com/problems/pacific-atlantic-water-flow/#/solutions

##### Questions

- [Number of Islands](https://leetcode.com/problems/number-of-islands/)

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
- Be mindful about slicing strings in your code. Typically, slicing and concatenating sequences require O(n) time and space because a new string is created. Where possible, use start and end indices to indicate the substring.
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

##### Questions

- [Maximum Depth of Binary Tree](https://leetcode.com/problems/maximum-depth-of-binary-tree/)
- [Invert/Flip Binary Tree](https://leetcode.com/problems/invert-binary-tree/)
- [Lowest Common Ancestor of BST](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/)
- [Binary Tree Maximum Path Sum](https://leetcode.com/problems/binary-tree-maximum-path-sum/)
- [Binary Tree Level Order Traversal](https://leetcode.com/problems/binary-tree-level-order-traversal/)
- [Serialize and Deserialize Binary Tree](https://leetcode.com/problems/serialize-and-deserialize-binary-tree/)
- [Kth Smallest Element in a BST](https://leetcode.com/problems/kth-smallest-element-in-a-bst/)
- [Subtree of Another Tree](https://leetcode.com/problems/subtree-of-another-tree/)
- http://www.geeksforgeeks.org/string-data-structure/

###### References

- http://blog.triplebyte.com/how-to-pass-a-programming-interview
- https://quip.com/q41AA3OmoZbC
- http://www.geeksforgeeks.org/must-do-coding-questions-for-companies-like-amazon-microsoft-adobe/
