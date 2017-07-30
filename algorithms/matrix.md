Matrix
==

## Airbnb

- You're given a 3 x 3 board of a tile puzzle, with 8 tiles numbered 1 to 8, and an empty spot. You can move any tile adjacent to the empty spot, to the empty spot, creating an empty spot where the tile originally was. The goal is to find a series of moves that will solve the board, i.e. get `[[1, 2, 3], [4, 5, 6], [7, 8, - ]]` where - is the empty tile.
- Boggle implementation. Given a dictionary, and a matrix of letters, find all the words in the matrix that are in the dictionary. You can go across, down or diagonally.

## Dropbox

- In the Game of life, calculate how to compute the next state of the board. Follow up was to do it if there were memory constraints (board represented by a 1 TB file).
- Grid Illumination: Given an NxN grid with an array of lamp coordinates. Each lamp provides illumination to every square on their x axis, every square on their y axis, and every square that lies in their diagonal (think of a Queen in chess). Given an array of query coordinates, determine whether that point is illuminated or not. The catch is when checking a query all lamps adjacent to, or on, that query get turned off. The ranges for the variables/arrays were about: 10^3 < N < 10^9, 10^3 < lamps < 10^9, 10^3 < queries < 10^9.

## Facebook

- You are given a matrix of integers. Modify the matrix such that if a row or column contains a 0, make the values in the entire row or column 0.
- Given an N x N matrix filled randomly with different colors (no limit on what the colors are), find the total number of groups of each color - a group consists of adjacent cells of the same color touching each other.
- You have a 4 x 4 board with characters. You need to write a function that finds if a certain word exists in the board. You can only jump to neighboring characters (including diagonally adjacent).

## Lyft

- Count the number of islands in a binary matrix of 0's and 1's.

## Palantir

- Check a 6 x 7 Connect 4 board for a winning condition.
- Given a fully-filled Sudoku board, check whether fulfills the Sudoku condition.
- Implement a function that checks if a player has won tic-tac-toe.
- Given an N x N matrix of 1's and 0's, figure out if all of the 1's are connected.
