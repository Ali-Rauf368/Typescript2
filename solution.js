function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString('hello'));
console.log("-/-/-/ (Task - 2) /*/*/*/");
/*CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex:
isPalindrome('racecar') === true;
isPalindrome('hello') == false;*/
function isPalindrome(str) {
    var reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}
console.log(isPalindrome('racecar'));
console.log(isPalindrome('hello'));
console.log("-/-/-/ (Task - 3) /*/*/*/");
/**HALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex:
reverseInt(521) === 125; */
function reverseInt(num) {
    var text = num.toString();
    return text.split('').reverse().join('');
}
console.log(reverseInt(521));
console.log("-/-/-/ (Task - 4) /*/*/*/");
/**CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
//  ex:
capitalizeLetters('i love javascript') === 'I Love Javascript'; */
function capitalizeLetters(str) {
    return str.split(' ').map(function (word) { return word.charAt(0).toUpperCase() + word.slice(1); }).join(' ');
}
console.log(capitalizeLetters('i love javascript'));
console.log("-/-/-/ (Task - 5) /*/*/*/");
/**CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
// ex:
maxCharacter('javascript') == 'a'; */
function maxCharacter(str) {
    var charMap = {};
    var maxChar = '';
    var maxCount = 0;
    for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
        var char = str_1[_i];
        charMap[char] = (charMap[char] || 0) + 1;
    }
    for (var char in charMap) {
        if (charMap[char] > maxCount) {
            maxCount = charMap[char];
            maxChar = char;
        }
    }
    return maxChar;
}
console.log(maxCharacter('javascript'));
console.log("-/-/-/ (Task - 6) /*/*/*/");
/*
task 6 // Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz",
 for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".*/
function fizzBuzz() {
    for (var i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        }
        else if (i % 3 === 0) {
            console.log("Fizz");
        }
        else if (i % 5 === 0) {
            console.log("Buzz");
        }
        else {
            console.log(i);
        }
    }
}
fizzBuzz();
console.log("-/-/-/ (Task - 7) /*/*/*/");
/**CHALLENGE 7: LONGEST WORD
// Return the longest word of a string
// SOLUTION 1 - Return a single longest word
// SOLUTION 2 - Return an array and include multiple words if they have the same length
// SOLUTION 3 - Only return an array if multiple words, otherwise return a string
// ex:
longestWord('Hi there, my name is Brad') === 'there,';
longestWord('My name is Brad') === ['name', 'brad'];
longestWord('Brad') === 'brad'; */
function longestWord(str) {
    var words = str.split(" ");
    var longestWord = words[0];
    for (var i = 1; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }
    var longestWords = words.filter(function (word) { return word.length === longestWord.length; });
    if (longestWords.length === 1) {
        return longestWords[0];
    }
    if (longestWords.length > 1) {
        return longestWords;
    }
    return longestWord;
}
console.log(longestWord('Hi there, my name is Brad')); // Output: 'there,'
console.log(longestWord('My name is Brad')); // Output: ['name', 'Brad']
console.log(longestWord('Brad')); // Output: 'Brad'
console.log("-/-/-/ (Task - 8) /*/*/*/");
/**CHALLENGE 8: ARRAY CHUNKING
// Split an array into chunked arrays of a specific length
// ex:
chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3], [4, 5, 6], [7]];
chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2], [3, 4], [5, 6], [7]]; */
function chunkArray(arr, num) {
    var chunkedArray = [];
    for (var i = 0; i < arr.length; i += num) {
        chunkedArray.push(arr.slice(i, i + num));
    }
    return chunkedArray;
}
console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 3));
console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 2));
console.log("-/-/-/ (Task - 9) /*/*/*/");
/**CHALLENGE 9: FLATTEN ARRAY
// Take an array of arrays and flatten to a single array
// ex:
[[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7] */
function flattenArray(arrays) {
    return [].concat.apply([], arrays);
}
console.log(flattenArray([[1, 2], [3, 4], [5, 6], [7]]));
console.log("-/-/-/ (Task - 10) /*/*/*/");
function isAnagram(str1, str2) {
    var cleanStr1 = str1.toLowerCase().replace(/[^a-z0-9]/g, '');
    var cleanStr2 = str2.toLowerCase().replace(/[^a-z0-9]/g, '');
    var sortedStr1 = cleanStr1.split('').sort().join('');
    var sortedStr2 = cleanStr2.split('').sort().join('');
    return sortedStr1 === sortedStr2;
}
console.log(isAnagram('elbow', 'below'));
console.log(isAnagram('Dormitory', 'dirty room##'));
console.log(isAnagram('Hello', 'World'));
console.log("-/-/-/ (Task - 11) /*/*/*/");
function addAll() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    return nums.reduce(function (acc, curr) { return acc + curr; }, 0);
}
console.log(addAll(2, 5, 6, 7));
console.log("-/-/-/ (Task - 12) /*/*/*/");
function sumAllPrimes(num) {
    function isPrime(n) {
        if (n <= 1)
            return false;
        if (n <= 3)
            return true;
        for (var i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0)
                return false;
        }
        return true;
    }
    var sum = 0;
    for (var i = 2; i <= num; i++) {
        if (isPrime(i)) {
            sum += i;
        }
    }
    return sum;
}
console.log(sumAllPrimes(10));
console.log("-/-/-/ (Task - 13) /*/*/*/");
function seekAndDestroy(arr) {
    var targets = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        targets[_i - 1] = arguments[_i];
    }
    return arr.filter(function (item) { return !targets.includes(item); });
}
console.log(seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6));
console.log("-/-/-/ (Task - 14) /*/*/*/");
function evenOddSums(arr) {
    var evenSum = 0;
    var oddSum = 0;
    arr.forEach(function (num) {
        if (num % 2 === 0) {
            evenSum += num;
        }
        else {
            oddSum += num;
        }
    });
    return [evenSum, oddSum];
}
console.log(evenOddSums([50, 60, 60, 45, 71])); // Output: [170, 116]
