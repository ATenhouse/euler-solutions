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

function dec2bin(dec) {
    return (dec >>> 0).toString(2);
}

function checkReverse(s) {
    return String(s) == reverse(String(s));
}

function isBinRev(n) {
    return checkReverse(dec2bin(n));
}

function main() {
    var palList = [];
    for (var i = 1000000; i >= 0; i--) {
        if (checkReverse(i)) {
            palList.push(i);
        }
    }
    return palList.filter((x) => isBinRev(x)).reduce((a, b) => a + b);
}

function reverse(s) {
    for (var i = s.length - 1, o = ''; i >= 0; o += s[i--]) {}
    return o;
}

// TODO: return your answer for this prompt.
return main();