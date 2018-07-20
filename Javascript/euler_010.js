// Problem 10
// ==========
//
// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
//
// Find the sum of all the primes below two million.

function main(n) {
    var s = sieve(n);
    var arr = onlyTrue(s);
    return arr.reduce((p, v) => p + v);
}

function generateBoolArray(n) {
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
    var a = generateBoolArray(n);
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

// TODO: return your answer for this prompt.
return main(2000000);