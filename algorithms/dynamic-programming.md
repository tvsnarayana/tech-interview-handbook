Dynamic Programming
==

### Airbnb

- Given a flight itinerary consisting of starting city, destination city, and ticket price (2d list) - find the optimal price flight path to get from start to destination. (A variation of Dynamic Programming Shortest Path)
- Return the coins combination with the minimum number of coins. Time complexity O(MN), where M is the target value and N is the number of distinct coins. Space complexity O(M).

- Given a set of numbers in an array which represent number of consecutive days of AirBnB reservation requested, as a host, pick the sequence which maximizes the number of days of occupancy, at the same time, leaving atleast 1 day gap in between bookings for cleaning. Problem reduces to finding max-sum of non-consecutive array elements.

~~~
// [5, 1, 1, 5] => 10
The above array would represent an example booking period as follows -
// Dec 1 - 5
// Dec 5 - 6
// Dec 6 - 7
// Dec 7 - 12

The answer would be to pick dec 1-5 (5 days) and then pick dec 7-12 for a total of 10 days of occupancy, at the same time, leaving at least 1 day gap for cleaning between reservations.

Similarly,
// [3, 6, 4] => 7
// [4, 10, 3, 1, 5] => 15
~~~

### Facebook

- How many string representations are there for an int (ex. 12432) where a->1, b->2, ... z->26.
- Given a list of denominations (e.g., [ 1, 2, 5 ] means you have coins worth $1, $2, and $5) and a number k, find all possible combinations, if any, of coins in the given denominations that add up to k, including repeats.
