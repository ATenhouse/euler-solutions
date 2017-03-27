// Problem 36
// ==========
// 
// The decimal number, 585 = 1001001001[2] (binary), is palindromic in both
// bases.
// 
// Find the sum of all numbers, less than one million, which are palindromic
// in base 10 and base 2.
// 
// (Please note that the palindromic number, in either base, may not include
// leading zeros.)

const checkReverse = (s) => String(s) == reverse(String(s));

const isBinRev = (n) => checkReverse((n >>> 0).toString(2));

function main() {
    var out = 0;
    for (var i = 1000000; i >= 0; i--) {
        if (checkReverse(i) && isBinRev(i)) {
            out += i;
        }
    }
    return out;
}

function reverse(s) {
    for (var i = s.length - 1, o = ''; i >= 0; o += s[i--]) {}
    return o;
}

// TODO: return your answer for this prompt.
return main();