// Problem 53
// ==========
// 
// There are exactly ten ways of selecting three from five, 12345:
// 
//            123, 124, 125, 134, 135, 145, 234, 235, 245, and 345
// 
// In combinatorics, we use the notation, nCr(5,3) = 10.
// 
// In general,
// 
// nCr(n,r) = n!/(r!(n-r)!), where r =< n, n! = n * (n1) * ... * 3 * 2 * 1,
// and 0! = 1.
// 
// It is not until n = 23, that a value exceeds one-million: nCr(23,10) =
// 1144066.
// 
// How many values of nCr(n,r), for 1 =< n =< 100, are greater than one-million?

function factorial(num) {
    var rval = 1;
    for (var i = 2; i <= num; i++) {
        rval *= i;
    }
    return rval;
}

const combo = (n, r) => (factorial(n) / (factorial(r) * factorial(n - r)));

var count = 0;
for (var i = 1; i <= 100; i++) {
    var j = i;
    while (j--) {
        (combo(i, j) > 1000000) && count++;
    }
}

// TODO: return your answer for this prompt.
return count;