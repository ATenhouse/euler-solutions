// Problem 27
// ==========
// 
// Euler published the remarkable quadratic formula:
// 
//                                n^2 + n + 41
// 
// It turns out that the formula will produce 40 primes for the consecutive
// values n = 0 to 39. However, when n = 40, 40^2 + 40 + 41 = 40(40 + 1) + 41
// is divisible by 41, and certainly when n = 41, 41^2 + 41 + 41 is clearly
// divisible by 41.
// 
// Using computers, the incredible formula  n^2 - 79n + 1601 was discovered,
// which produces 80 primes for the consecutive values n = 0 to 79. The
// product of the coefficients, 79 and 1601, is 126479.
// 
// Considering quadratics of the form:
// 
//   n^2 + an + b, where |a| < 1000 and |b| < 1000
// 
//                               where |n| is the modulus/absolute value of n
//                                                e.g. |11| = 11 and |-4| = 4
// 
// Find the product of the coefficients, a and b, for the quadratic
// expression that produces the maximum number of primes for consecutive
// values of n, starting with n = 0.

function formula(n, a, b) {
    return (n * n) + (a * n) + b;
}

function generateBoolMap(n) {
    var arr = {};
    for (var i = 2; i <= n; i++) {
        arr[i] = true;
    }
    return arr;
}

function onlyTrue(o) {
    var a = o;
    var out = [];
    for (var i in a) {
        if (a[i]) {
            out.push(Number(i));
        }
    }
    return out;
}

function sieve(n) {
    var s = Math.sqrt(n);
    var a = generateBoolMap(n);
    for (var i = 2; i <= s; i++) {
        if (a[i]) {
            var k = 0;
            for (var j = 0; k <= n; j++) {
                k = Math.pow(i, 2) + (i * j);
                a[k] = false;
            }
        }
    }
    return a;
}

function eulerGen() {
    var max_count = 0;
    var max = [0, 0];
    var y_arr = sieve(1000);
    y_arr = onlyTrue(y_arr);
    for (var x = -999; x < 999; x++) {
        for (var i in y_arr) {
            var y = y_arr[i],
                i = 0,
                count = 0;
            var value = formula(i, x, y);
            while (isPrime(value)) {
                value = formula(i, x, y);
                i++;
                count++;
            }
            if (count > max_count) {
                max_count = count;
                max = [x, y];
            }
        }
    }
    return max[0] * max[1];
}

var m = {};

function isPrime(n) {
    if (m[n]) {
        return m[n];
    }
    if (n < 0) {
        m[n] = false;
        return false;
    }
    if (i == 1) {
        return true;
    }
    if (n % 2 == 0) {
        return n == 2;
    }
    if (n % 3 == 0) {
        return n == 3;
    }
    var square = Math.sqrt(n);
    for (var i = 5; i <= square; i += 6) {
        if (n % i === 0) {
            m[n] = false;
            return false;
        }
    }
    m[n] = true;
    return true;
}

// TODO: return your answer for this prompt.
return eulerGen();