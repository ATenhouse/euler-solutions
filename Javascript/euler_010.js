// Problem 10
// ==========
// 
// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
// 
// Find the sum of all the primes below two million.

function main(n) {
    var sum = 0
    for (var i = n; i >= 0; i--) {
        if (isPrime(i)) {
            sum += i
        }
    }
    return sum
}


function isPrime(n) {
    if (isNaN(n) || !isFinite(n) || n % 1 || n < 2) {
        return false
    }
    if (n % 2 == 0) {
        return (n == 2)
    }
    if (n % 3 == 0) {
        return (n == 3)
    }
    var m = Math.sqrt(n);
    for (var i = 5; i <= m; i += 6) {
        if (n % i == 0) {
            return false
        } else if (n % (i + 2) == 0) {
            return false
        }
    }
    return true
}

// TODO: return your answer for this prompt.
return main(2000000);