// Problem 15
// ==========
// 
// Starting in the top left corner of a 2 * 2 grid, there are 6 routes
// (without backtracking) to the bottom right corner.
// 
// How many routes are there through a 20 * 20 grid?

var width = 20, paths = 1;
 
for (var i = 0; i < width; i++) {
    paths *= (2 * width) - i;
    paths /= i + 1;
}

// TODO: return your answer for this prompt.
return paths;