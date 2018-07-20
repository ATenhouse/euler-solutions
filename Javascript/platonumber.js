// As seen on a recent episode of
// Who Wants To Be a Millionare (Kid's Edition):
// "Which of the following numbers was considered by Plato
// to be an ideal number, as it's equally visible by the first ten
// natural numbers?"
var arr = [1880, 3450, 5040, 770];

function divis(n) {
    var i = 10;
    while (i) {
        if (n % i > 0) {
            return false;
        }
        i--;
    }
    return true;
}

for (var i = arr.length - 1; i >= 0; i--) {
    var num = arr[i];
    var b = divis(num);
    if (b) {
        console.log("Plato's Number:", num);
        return b;
    }
}