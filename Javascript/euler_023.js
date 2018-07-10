// Problem 23
// ==========
//
// A perfect number is a number for which the sum of its proper divisors is
// exactly equal to the number. For example, the sum of the proper divisors
// of 28 would be 1 + 2 + 4 + 7 + 14 = 28, which means that 28 is a perfect
// number.
//
// A number whose proper divisors are less than the number is called
// deficient and a number whose proper divisors exceed the number is called
// abundant.
//
// As 12 is the smallest abundant number, 1 + 2 + 3 + 4 + 6 = 16, the
// smallest number that can be written as the sum of two abundant numbers is
// 24. By mathematical analysis, it can be shown that all integers greater
// than 28123 can be written as the sum of two abundant numbers. However,
// this upper limit cannot be reduced any further by analysis even though it
// is known that the greatest number that cannot be expressed as the sum of
// two abundant numbers is less than this limit.
//
// Find the sum of all the positive integers which cannot be written as the
// sum of two abundant numbers.
var abArr = {};

function isAbundant(n) {
    var sum = 0;
    var half = n / 2;
    for (var i = 1; i <= half; i++) {
        if (n % i === 0) {
            sum += i;
        }
    }
    return sum > n;
}

function isSumOf2Abundants(n) {
    for (var i = 1; i <= n; i++) {
        if (abArr[i] == true && abArr[n - i] === true) {
            return true;
        }
    }
    return false;
}

function run(n) {
    var sum = 0;
    // Compute look-up table
    for (var i = 1; i <= n; i++) {
        abArr[i] = isAbundant(i);
    }
    for (var i = 1; i <= n; i++) {
        if (isSumOf2Abundants(i) == false) {
            sum += i;
        }
    }
    return String(sum);
}

// TODO: return your answer for this prompt.
return run(28123);
