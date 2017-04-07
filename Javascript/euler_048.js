// Problem 48
// ==========
// 
// The series, 1^1 + 2^2 + 3^3 + ... + 10^10 = 10405071317.
// 
// Find the last ten digits of the series, 1^1 + 2^2 + 3^3 + ... + 1000^1000.

var bigInt = require('big-integer');

var start = new bigInt(0);
for (var i = 1000; i > 0; i--) {
    var a = bigInt(i).pow(i);
    start = start.add(a);
}
return start.toString().slice(-10);