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

function main(max) {
    for (var i = max, base = 0, sum_of_squares = 0; i >= 0; i--) {
        base += i;
        sum_of_squares += i * i;
    }
    return (base * base) - sum_of_squares;
}

return main(100)