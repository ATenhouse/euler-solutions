// Problem 6
// =========
// 
// The sum of the squares of the first ten natural numbers is,
//                        1^2 + 2^2 + ... + 10^2 = 385
// 
// The square of the sum of the first ten natural numbers is,
//                     (1 + 2 + ... + 10)^2 = 55^2 = 3025
// 
// Hence the difference between the sum of the squares of the first ten
// natural numbers and the square of the sum is 3025 - 385 = 2640.
// 
// Find the difference between the sum of the squares of the first one
// hundred natural numbers and the square of the sum.

const partialSum = n => (n * (n + 1)) / 2;

function main(max) {
    var sum = partialSum(100);
    var sum_of_squares = 0;
    for (var i = max; i >= 0; i--) {
        sum_of_squares += i * i;
    }
    return (sum * sum) - sum_of_squares;
}

return main(100);