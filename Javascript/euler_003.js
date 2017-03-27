// Problem 3
// =========
// 
// The prime factors of 13195 are 5, 7, 13 and 29.
// 
// What is the largest prime factor of the number 600851475143?

function run(n) {
    while (true) {
        var p = smallestFactor(n);
        if (p < n) {
            n /= p;
        } else {
            return n;
        }
    }
}

function smallestFactor(n) {
    // Starting FROM 2, which should be the smallest possible divisor ...
    for (var i = 2, end = Math.sqrt(n); i <= end; i++) {
        if ((n % i) === 0) {
            return i;
        }
    }
    return n;
}

return run(600851475143);