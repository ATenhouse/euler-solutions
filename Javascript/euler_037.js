// Problem 37
// ==========
// 
// The number 3797 has an interesting property. Being prime itself, it is
// possible to continuously remove digits from left to right, and remain
// prime at each stage: 3797, 797, 97, and 7. Similarly we can work from
// right to left: 3797, 379, 37, and 3.
// 
// Find the sum of the only eleven primes that are both truncatable from left
// to right and right to left.
// 
// NOTE: 2, 3, 5, and 7 are not considered to be truncatable primes.
function seive(n) {
    var i, j;
    var prime = new Array(n).fill(true);
    for (i = 2; i * i < n; i++) {
        if (prime[i]) {
            for (j = 0; i * i + i * j < n; j++) {
                prime[i * i + i * j] = false;
            }
        }
    }
    var cnt = 0,
        sum = 0;
    // Note: it's 8 because primes from 2 to 7 are not considered valid
    for (i = 8; i < n; i++) {
        if (prime[i]) {
            if (bigCheck(i)) {
                sum += i;
            }
        }
    }
    return sum;
}

function bigCheck(s) {
    s = String(s);
    return checkLeft(s) && checkRight(s);
}

function checkLeft(s) {
    while (s.length >= 1) {
        if (isPrime(s) === false) {
            return false;
        }
        s = s.slice(1);
    }
    return true;
}

function checkRight(s) {
    while (s.length >= 1) {
        if (isPrime(s) === false) {
            return false;
        }
        s = s.substring(0, s.length - 1);
    }
    return true;
}

function isPrime(n) {
    n = Number(n);
    if (isNaN(n) || !isFinite(n) || n % 1 || n < 2) return false;
    if (n % 2 === 0) {
        return (n == 2);
    }
    if (n % 3 === 0) {
        return (n == 3);
    }
    var m = Math.sqrt(n);
    for (var i = 5; i <= m; i += 6) {
        if (n % i === 0) {
            return false;
        } else if (n % (i + 2) === 0) {
            return false;
        }
    }
    return true;
}

// TODO: return your answer for this prompt.
return seive(1000000);