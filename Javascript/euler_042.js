// Problem 42
// ==========
//
// The n-th term of the sequence of triangle numbers is given by, t[n] =
// 1/2n(n+1); so the first ten triangle numbers are:
//
//                  1, 3, 6, 10, 15, 21, 28, 36, 45, 55, ...
//
// By converting each letter in a word to a number corresponding to its
// alphabetical position and adding these values we form a word value. For
// example, the word value for SKY is 19 + 11 + 25 = 55 = t[10]. If the word
// value is a triangle number then we shall call the word a triangle word.
//
// Using words.txt, a 16K text file containing nearly two-thousand common
// English words, how many are triangle words?

function isTriangular(n) {
    var calc_num = 8 * n + 1;
    var square = Math.sqrt(calc_num);
    return ~~(square) == square;
}

function name_value(s) {
    var total = 0;
    for (var i = s.length - 1; i >= 0; i--) {
        total += s.charCodeAt(i) - 64;
    }
    return total;
}

var fs = require('fs');
var array = fs.readFileSync('words.txt').toString().split(",");
array = array.map(x => x.split('"').join(""));

var count = 0;
for (var i in array) {
    var name = array[i];
    var val = name_value(name);
    if (isTriangular(val)) {
        count++;
    }
}

// TODO: return your answer for this prompt.
return count;