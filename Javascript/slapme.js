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
        console.log("Plato's Number:", num, b);
        return b;
    }
}