// Problem 14
// ==========
//
// The following iterative sequence is defined for the set of positive
// integers:
//
// n->n/2 (n is even)
// n->3n+1 (n is odd)
//
// Using the rule above and starting with 13, we generate the following
// sequence:
//                   13->40->20->10->5->16->8->4->2->1
//
// It can be seen that this sequence (starting at 13 and finishing at 1)
// contains 10 terms. Although it has not been proved yet (Collatz Problem),
// it is thought that all starting numbers finish at 1.
//
// Which starting number, under one million, produces the longest chain?
//
// NOTE: Once the chain starts the terms are allowed to go above one million.

package main

import "fmt"

func main() {
	var max_length int = 0
	var largest_start int = 0
	for i := 500000; i < 1000000; i++ {
		var inner_length int = 0
		var n int64 = int64(i)
		for n > 1 {
			if (n % 2) == 0 {
				n /= 2
				inner_length++
			} else {
				n = ((3 * n) + 1)
				inner_length++
			}
		}
		if inner_length > max_length {
			max_length = inner_length
			largest_start = i
		}
	}
	fmt.Println(largest_start, max_length)
}
