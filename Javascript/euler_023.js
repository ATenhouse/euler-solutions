// Problem 23
// ==========
// 
// A perfect number is a number for which the sum of its proper divisors is
// exactly equal to the number. For example, the sum of the proper divisors
// of 28 would be 1 + 2 + 4 + 7 + 14 = 28, which means that 28 is a perfect
// number.
// 
// A number whose proper divisors are less than the number is called
// deficient and a number whose proper divisors exceed the number is called
// abundant.
// 
// As 12 is the smallest abundant number, 1 + 2 + 3 + 4 + 6 = 16, the
// smallest number that can be written as the sum of two abundant numbers is
// 24. By mathematical analysis, it can be shown that all integers greater
// than 28123 can be written as the sum of two abundant numbers. However,
// this upper limit cannot be reduced any further by analysis even though it
// is known that the greatest number that cannot be expressed as the sum of
// two abundant numbers is less than this limit.
// 
// Find the sum of all the positive integers which cannot be written as the
// sum of two abundant numbers.

var isAbundant = function(number) {
    var sum = 0;
    var half = number / 2;
    for (var i = 0; i <= half; i++) {
        if (number % i === 0) {
            sum += i;
            if (sum > number) {
                return true;
            }
        }
    }
    return false;
};

function run() {
    var limit = 28124;
    var sum = 0;
    var i, j;
    var list = {};
    var second_list = {}
    var sumList = new Set();
    for (i = 1; i < limit; i++) {
        list[i] = isAbundant(i);
    }
    for (i = 16; i <= limit - 1; i++)
    {
        for (j = 0; j <= limit; j++)
        {
            var tempNum = i + j;
            if (tempNum in second_list)
            {
                continue;
            }
            else
            {
                if (tempNum < limit)
                {
                    if (list[i] === false || list[j] === false)
                    {
                        sumList.add(tempNum);
                    }
                }
                second_list[tempNum] = true;
            }
        }
    }
    var final = Array.from(sumList);
    return final.reduce((p, v) => p + v);
}

return run();