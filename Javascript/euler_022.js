// Problem 22
// ==========
// 
// Using names.txt, a 46K text file containing over five-thousand first names,
// begin by sorting it into alphabetical order. Then working out the
// alphabetical value for each name, multiply this value by its alphabetical
// position in the list to obtain a name score.
// 
// For example, when the list is sorted into alphabetical order, COLIN, which
// is worth 3 + 15 + 12 + 9 + 14 = 53, is the 938th name in the list. So,
// COLIN would obtain a score of 938 * 53 = 49714.
// 
// What is the total of all the name scores in the file?

function name_value(s) {
    for (var i = s.length - 1, total = 0; i >= 0; i--) {
        total += s.charCodeAt(i) - 96;
    }
    return total;
}

var fs = require('fs');
var array = fs.readFileSync('names.txt').toString().split(",");
array = array.sort();

var end = 0;
for (var i in array) {
    var position = Number(i) + 1;
    var name = array[i].split('"').join('').toLowerCase();
    end += name_value(name) * position;
    console.log("END:", end);
}

// TODO: return your answer for this prompt.
return end;