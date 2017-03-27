// Problem 4
// =========
// 
// A palindromic number reads the same both ways. The largest palindrome made
// from the product of two 2-digit numbers is 9009 = 91 * 99.
// 
// Find the largest palindrome made from the product of two 3-digit numbers.

function run() {
    var max_pal = -1
    for (var x = 1000; x > 0; x--) {
        for (var y = 1000; y > 0; y--) {
            var prod = x * y
            if (is_palindrome(prod) && (prod > max_pal)) {
                max_pal = prod
            }
        }
    }
    return max_pal
}

function is_palindrome(n) {
    return n == reverse(String(n))
}

function reverse(s) {
    for (var i = s.length - 1, o = ''; i >= 0; o += s[i--]) {}
    return o;
}

// TODO: return your answer for this prompt.
return run();