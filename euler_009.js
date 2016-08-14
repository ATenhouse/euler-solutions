// Problem 9
// =========
// 
// A Pythagorean triplet is a set of three natural numbers, a < b < c, for
// which,
//                              a^2 + b^2 = c^2
// 
// For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.
// 
// There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// Find the product abc.

var result = -1
for (var i = 1; i <= 497; i++) {
	for (var j = i; j <= 498; j++) {
		for (var k = j; k <= 499; k++) {
			var sum = i + j + k
			var truth = (Math.pow(i, 2) + Math.pow(j, 2) == Math.pow(k,2))
			if(sum === 1000 && truth) {
				result = i * j * k
			}
		}
	}
}

// TODO: return your answer for this prompt.
return result;
