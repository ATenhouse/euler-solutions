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

function find_divisors(n) {
    var out_val = 0;
    for (var i = (n / 2); i >= 1; i--) {
        if (n % i === 0) {
            out_val += i;
        }
    }
    return out_val;
}

var total_out = new Set();
for (var a = 4; a <= 10000; a++) {
    var b = find_divisors(a);
    var c = find_divisors(b);
    if (a == c && a !== b) {
        total_out.add(a);
        total_out.add(b);
    }
}
total_out = Array.from(total_out);

var result = total_out.reduce((p, v) => p + v);

// TODO: return your answer for this prompt.
return result;