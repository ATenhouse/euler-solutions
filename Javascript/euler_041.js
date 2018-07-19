// Problem 41
// ==========
//
// We shall say that an n-digit number is pandigital if it makes use of all
// the digits 1 to n exactly once. For example, 2143 is a 4-digit pandigital
// and is also prime.
//
// What is the largest n-digit pandigital prime that exists?

function isPandigital(n) {
    var num = String(n);
    var sortedNum = num.split("").sort().join("");
    var comparison = "123456789".substr(0, num.length);
    return sortedNum == comparison;
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

var t = sieve(8000000);
t = onlyTrue(t);
for (var i = t.length - 1; i >= 0; i--) {
    var value = t[i];
    if (isPandigital(value)) {
        return value;
    }
}