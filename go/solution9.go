// A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

// a^2 + b^2 = c^2
// For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.

// There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// Find the product abc.
package main

import (
	"fmt"
)

func main() {
	result := -1
	for i := 1; i <= 497; i++ {
		for j := i; j <= 498; j++ {
			for k := j; k <= 499; k++ {
				sum := i + j + k
				truth := (i*i)+(j*j) == (k * k)
				if (sum == 1000) && truth {
					result = i * j * k
				}
			}
		}
	}
	fmt.Println(result)
}
