/*
Each new term in the Fibonacci sequence is generated 
by adding the previous two terms. By starting with 1 and 2, 
the first 10 terms will be:
1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
By considering the terms in the Fibonacci sequence 
whose values do not exceed four million, 
find the sum of the even-valued terms.
*/
package main

import "fmt"

func main() {
	out := find_even_sums(fib(4000000))
	fmt.Println(out)
}

func fib(upper_limit int) []int {
	result := []int{1, 2}
	for i := 2 ; ; i++ {
		currentItem := result[i - 1] + result[i - 2]
		if currentItem > upper_limit { break }
		result = append(result, currentItem)
	}
	return result
}

func find_even_sums(input []int) int {
	out := 0
	for _, value := range input {
		if value % 2 == 0 {
			out += value
		}
	}
	return out
}