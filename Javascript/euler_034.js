// Problem 34
// ==========
// 
// 145 is a curious number, as 1! + 4! + 5! = 1 + 24 + 120 = 145.
// 
// Find the sum of all numbers which are equal to the sum of the factorial of
// their digits.
// 
// Note: as 1! = 1 and 2! = 2 are not sums they are not included.

function factorial(n) {
    var out = 1,
        x = n;
    while (x >= 2) {
        out *= x;
        x--;
    }
    return out;
}

const get = (x) => String(x).split("").map(factorial).reduce((a, b) => a + b);

function main() {
    var sum = 0;
    for (var i = 50000; i >= 3; i--) {
        var y = get(i);
        if (i == y) {
            sum += y;
        }
    }
    return sum;
}

// TODO: return your answer for this prompt.
return main();