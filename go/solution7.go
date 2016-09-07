/*
By listing the first six prime numbers:
2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
What is the 10 001st prime number?
*/

package main

import (
	"fmt"
	"math"
)

func main() {
	fmt.Println(getNthPrimeNumber(10001)) // 104743
}

func getNthPrimeNumber(cap int) int {
	bucket := []int{}

	for i := 2; len(bucket) < cap; i++ {
		if isPrimeNumber(i) {
			bucket = append(bucket, i)
		}
	}

	return bucket[len(bucket)-1]
}

func isPrimeNumber(num int) bool {
	numa := float64(num)
	numsq := math.Sqrt(numa)
	for i := 2.0; i <= numsq; i = i + 1.0 {
		if math.Mod(numa, i) == 0 {
			return false
		}
	}
	return true
}
