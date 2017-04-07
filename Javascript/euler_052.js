// Problem 52
// ==========
// 
// It can be seen that the number, 125874, and its double, 251748, contain
// exactly the same digits, but in a different order.
// 
// Find the smallest positive integer, x, such that 2x, 3x, 4x, 5x, and 6x,
// contain the same digits.

function allInTheFamily(n) {
    var base = sortDigits(n);
    for (var i = 2; i <= 6; i++) {
        var val = sortDigits(n * i);
        if (base !== val) {
            return false;
        }
    }
    return true;
}

const sortDigits = (n) => String(n).split("").sort().join("");

for (var i = 125874; i <= 1000000; i++) {
    if (allInTheFamily(i)) {
        return i;
    }
}