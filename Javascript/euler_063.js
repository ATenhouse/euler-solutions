// Problem 63
// ==========
//
// The 5-digit number, 16807=7^5, is also a fifth power. Similarly, the
// 9-digit number, 134217728=8^9, is a ninth power.
//
// How many n-digit positive integers exist which are also an nth power?

var s = 0;
for (var n = 1; n < 10; n++) {
    s += Math.floor(1 / (1 - Math.log10(n)));
}

console.log(s);
// TODO: return your answer for this prompt.
return s;