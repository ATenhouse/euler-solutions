// Problem 10
// ==========
//
// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
//
// Find the sum of all the primes below two million.

package main

import (
	"fmt"
	"math"
)

func main() {
	var i int64 = 2000000
	var out int64 = 0
	for ; i >= 2; i-- {
		if isPrimeNumber(i) {
			out += i
		}
	}
	fmt.Println(out)
}

func isPrimeNumber(n int64) bool {
	if n < 2 {
		return false
	}
	if n%2 == 0 {
		return (n == 2)
	}
	if n%3 == 0 {
		return (n == 3)
	}
	if n%5 == 0 {
		return (n == 5)
	}
	nfloat := float64(n)
	var m float64 = math.Sqrt(nfloat)
	for i := 5.0; i <= m; i += 6.0 {
		if math.Mod(nfloat, i) == 0.0 {
			return false
		}
		if math.Mod(nfloat, i+2.0) == 0.0 {
			return false
		}
	}
	return true
}
