// Problem 16
// ==========
//
// 2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.
//
// What is the sum of the digits of the number 2^1000?

var bigInt = require("big-integer");
var big_n = bigInt(2).pow(1000).toString();
var sum = bigInt(0);
for (var i = 0; i < big_n.length; i++) {
    sum = sum.add(big_n[i]);
}

// TODO: return your answer for this prompt.
return sum.toJSNumber();