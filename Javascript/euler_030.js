// Problem 30
// ==========
// 
// Surprisingly there are only three numbers that can be written as the sum
// of fourth powers of their digits:
// 
//   1634 = 1^4 + 6^4 + 3^4 + 4^4
//   8208 = 8^4 + 2^4 + 0^4 + 8^4
//   9474 = 9^4 + 4^4 + 7^4 + 4^4
// 
// As 1 = 1^4 is not a sum it is not included.
// 
// The sum of these numbers is 1634 + 8208 + 9474 = 19316.
// 
// Find the sum of all the numbers that can be written as the sum of fifth
// powers of their digits.

function sum_of_fifth(n) {
    var sum = 0;
    while (n > 0) {
        var r = n % 10;
        sum += (r ** 5);
        n = ~~(n / 10);
    }
    return sum;
}

var list = []
for (var i = 200000; i >= 2; i--) {
    if (i === sum_of_fifth(i)) {
        list.push(i);
    }
}

// TODO: return your answer for this prompt.
return list.reduce((p, v) => p + v);
