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
    var end = Math.sqrt(n);
    for (var i = 2; i <= end; i++) {
        if ((n % i) === 0) {
            return i;
        }
    }
    return n;
}

var x = run(600851475143);
return x;