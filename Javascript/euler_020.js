// Problem 20
// ==========
// 
// n! means n * (n - 1) * ... * 3 * 2 * 1
// 
// Find the sum of the digits in the number 100!

var bigInt = require("big-integer")
var full_int = bigInt(1)
var out_int = 0
for (var i = 100; i >= 1; i--) {
	full_int = full_int.times(i)
}
var s = full_int.toString()
for (var i = s.length - 1; i >= 0; i--) {
	out_int += Number(s[i])
}
// TODO: return your answer for this prompt.
return out_int;
