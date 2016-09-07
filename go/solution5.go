// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

package main

import "fmt"

func main() {
	fmt.Println(run(1, 20))
}

func gcd(a, b int64) int64 {
	var x, y, result int64 = a, b, 0
	for y != 0 {
		result = x % y
		x = y
		y = result
	}
	return x
}

func lcm(a, b int64) int64 {
	return (a * b) / gcd(a, b)
}

func run(min, max int64) int64 {
	var n = min
	for i := min; i <= max; i++ {
		n = lcm(n, i)
	}
	return n
}
