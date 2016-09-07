// The sum of the squares of the first ten natural numbers is,

// 1^2 + 2^2 + ... + 10^2 = 385
// The square of the sum of the first ten natural numbers is,

// (1 + 2 + ... + 10)2 = 552 = 3025
// Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

package main

import "fmt"

func main() {
	var a, b int64 = 1, 100
	fmt.Println(square_of_sums(a, b) - sum_of_squares(a, b))
}

func square_of_sums(a, b int64) int64 {
	var out int64 = 0
	for ; a <= b; a++ {
		out += a
	}
	return out * out
}

func sum_of_squares(a, b int64) int64 {
	var out int64 = 0
	for ; a <= b; a++ {
		out += a * a
	}
	return out
}
