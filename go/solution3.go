// What is the largest prime factor of the number 600851475143 ?
package main

import (
	"fmt"
	"math"
)

func main() {
	fmt.Println(slap_me(600851475143))
}

func slap_me(a int64) int64 {
	var out int64 = 0
	for b := sqrt(a); b >= 1; b-- {
		if a%b == 0 && isPrime(b) {
			out = b
			break
		}
	}
	return out
}

func isPrime(a int64) bool {
	if a <= 1 {
		return false
	}
	for b := sqrt(a); b >= 1; b-- {
		if b == 1 {
			return true
		}
		if a%b == 0 {
			return false
		}
	}
	return true
}

func sqrt(a int64) int64 {
	return int64(math.Sqrt(float64(a)))
}
