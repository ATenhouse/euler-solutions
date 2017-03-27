// Problem 4
// =========
// 
// A palindromic number reads the same both ways. The largest palindrome made
// from the product of two 2-digit numbers is 9009 = 91 * 99.
// 
// Find the largest palindrome made from the product of two 3-digit numbers.

function run() {
    var s = new Set();
    for (var x = 1000; x > 100; x--) {
        for (var y = 1000; y > 100; y--) {
            var prod = x * y;
            if (is_palindrome(prod)) {
                s.add(prod);
            }
        }
    }
    var t = Array.from(s);
    return Math.max(...t);
}

const is_palindrome = n => String(n) === reverse(String(n));

function reverse(s) {
    for (var i = s.length - 1, o = ''; i >= 0; o += s[i--]) {}
    return o;
}

// TODO: return your answer for this prompt.
return run();