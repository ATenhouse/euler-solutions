// Problem 21
// ==========
// 
// Let d(n) be defined as the sum of proper divisors of n (numbers less than
// n which divide evenly into n).
// If d(a) = b and d(b) = a, where a =/= b, then a and b are an amicable pair
// and each of a and b are called amicable numbers.
// 
// For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22,
// 44, 55 and 110; therefore d(220) = 284. The proper divisors of 284 are 1,
// 2, 4, 71 and 142; so d(284) = 220.
// 
// Evaluate the sum of all the amicable numbers under 10000.

function list_divisors(n) {
    var sum = 0;
    var i = Math.floor(n / 2);
    while (i >= 1) {
        if (n % i === 0) {
            sum += i;
        }
        i--;
    }
    return sum;
}

var total_out = new Set();
var a = 10000;
while (a--) {
    var b = list_divisors(a);
    var c = list_divisors(b);
    if (a == c && a !== b) {
        total_out.add(a);
        total_out.add(b);
    }
}

// TODO: return your answer for this prompt.
return [...total_out].reduce((p, v) => p + v);