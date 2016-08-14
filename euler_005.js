// Problem 5
// =========
//
// 2520 is the smallest number that can be divided by each of the numbers
// from 1 to 10 without any remainder.
//
// What is the smallest number that is evenly divisible by all of the numbers
// from 1 to 20?
function gcd(a, b) {
    var x = a, y = b, result
    while (y != 0) {
        result = x % y
        x = y
        y = result
    }
    return x
}

function lcm(a, b) {
    return (a * b) / gcd(a, b)
}

function main(min, max){
	var n = min
	for (var i = min; i <= max; i++) {
    	n = lcm(n, i)
	}
	return n
}

// TODO: return your answer for this prompt.
return main(1, 20)