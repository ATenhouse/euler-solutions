// Problem 7
// =========
//
// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see
// that the 6th prime is 13.
//
// What is the 10001st prime number?

function find_prime(n) {
    for (var i = 2, count = 0;; i++) {
        if (isPrime(i)) {
            count++;
            if (count == n) {
                return i;
            }
        }
    }
}

function isPrime(n) {
    if (isNaN(n) || !isFinite(n) || n % 1 || n < 2) return false;
    if (n % 2 == 0) {
        return (n == 2);
    }
    if (n % 3 == 0) {
        return (n == 3);
    }
    var m = Math.sqrt(n);
    for (var i = 5; i <= m; i += 6) {
        if (n % i == 0) {
            return false;
        } else if (n % (i + 2) == 0) {
            return false;
        }
    }
    return true;
}

// TODO: return your answer for this prompt.
return find_prime(10001);