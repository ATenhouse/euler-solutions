// Problem 56
// ==========
// 
// A googol (10^100) is a massive number: one followed by one-hundred zeros;
// 100^100 is almost unimaginably large: one followed by two-hundred zeros.
// Despite their size, the sum of the digits in each number is only 1.
// 
// Considering natural numbers of the form, a^b, where a, b < 100, what is
// the maximum digital sum?

var bigInt = require('big-integer');

const digitalSum = (n) => n.split("").map(Number).reduce((x, y) => x + y);

var max = -1;
for (var i = 100; i >= 1; i--) {
    var big_i = bigInt(i);
    var j = 100;
    while (j--) {
        var val = big_i.pow(j).toString();
        var d = digitalSum(val);
        max = Math.max(d, max);
    }
}

// TODO: return your answer for this prompt.
return max;