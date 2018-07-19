// Problem 7
// =========
//
// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see
// that the 6th prime is 13.
//
// What is the 10001st prime number?

function find_prime(n) {
    var out = 0;
    for (var i = 2, count = 0; count < n; i++) {
        if (isPrime(i)) {
            count++;
            out = i;
        }
    }
    return out;
}

var m = {};

function isPrime(n) {
    if (n % 2 == 0) {
        return (n == 2);
    }
    if (n % 3 == 0) {
        return (n == 3);
    }
    var x = Math.sqrt(n);
    if (m[x] = false) {
        m[n] = false;
        return false;
    }
    for (var i = 5; i <= x; i += 6) {
        if (n % i == 0) {
            m[i] = false;
            return false;
        } else if (n % (i + 2) == 0) {
            m[i] = false;
            return false;
        }
    }
    m[n] = true;
    return true;
}

// TODO: return your answer for this prompt.
return find_prime(10001);