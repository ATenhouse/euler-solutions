// Problem 5
// =========
//
// 2520 is the smallest number that can be divided by each of the numbers
// from 1 to 10 without any remainder.
//
// What is the smallest number that is evenly divisible by all of the numbers
// from 1 to 20?

function gcd(a, b) {
    var [x, y] = [a, b];
    while (y !== 0) {
        [x, y] = [y, x % y];
    }
    return x;
}

const lcm = (a, b) => (a * b) / gcd(a, b);

function main(min, max) {
    var n = min;
    while (min <= max) {
        n = lcm(n, min);
        min++;
    }
    return n;
}

// TODO: return your answer for this prompt.
return main(1, 20);