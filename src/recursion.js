/* jshint esversion: 6 */

// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
var factorial = function(n) {

  if (n === 0) {
    return 1;
  } else if (n < 0) {
    return null;
  }

  // Return result of factorial (n - 1)
  return n * factorial(n - 1);

};

// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
var sum = function(array) {
  var copy = array.slice();

  if (array.length === 0) {
    return 0;
  }

  return copy.pop() + sum(copy);

};

// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      sum += arraySum(array[i]);
    } else {
      sum += array[i];
    }
  }
  return sum;
};

// 4. Check if a number is even.
var isEven = function(n) {
  if (n < 0) {
    n = n * - 1;
  }

  if (n === 0) {
    return true;
  } else if (n === 1) {
    return false;
  } else {
    return isEven(n - 2);
  }
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
  var sum = 0;

  if (n === 0) {
    return sum;
  } else if (n > 0) {
    n--;
    return sum + n + sumBelow(n);
  } else if (n < 0) {
    n++;
    return sum + n + sumBelow(n);
  }
  
};

// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
var range = function(x, y) {
  var results = [];

  if (x < y) {
    var t = y - 1;

    if (x >= t) {
      return results;
    }

    x++;
    
    results.push(x);

    return results.concat(range(x, y));
  } else if (x > y) {
    var t = y + 1;

    if (x <= t) {
      return results;
    }

    x--;
    
    results.push(x);

    return results.concat(range(x, y));
  } else if (x === y) {
    return [];
  }

};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
  if (exp === 0) {
    return 1;
  }
  
  if (exp > 0) {
    return base * exponent(base, exp - 1);
  } else if (exp < 0) {
    return (1 / base) * exponent(base, exp + 1);
  }
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {

  if (n === 1) {
    return true;
  } else if (n < 1){
    return false;
  } else {
    return powerOfTwo(n / 2);
  }

};

// 9. Write a function that reverses a string.
var reverse = function(string) {

  if (string.length === 1) {
    return string;
  } else {
    return '' + string.charAt(string.length - 1) + reverse(string.slice(0, string.length - 1));
  }

};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
  string = string.toLowerCase();
  string = string.replace(/\s+/g, '');

  if (string.length === 1 || string.length === 0) {
    return true;
  } else {
    if (string.charAt(0) === string.charAt(string.length - 1)) {
      return palindrome(string.slice(1, string.length - 1));
    } else {
      return false;
    }
  }

};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {

  if (y  === 0) {
    return NaN;
  } else if (x === 0) {
    return 0;
  }

  if (x > 0) {
    if (y > 0) {
      if (x < y) {
        return x;
      }
      return modulo((x-y), y);
    } else {
      if ((x + y) < 0) {
        return x;
      }
      return modulo((x+y), y);
    }

  } else {

    if (y > 0) {
      if ((x + y) > 0) {
        return x;
      }
      return modulo((x+y), y);
    } else {
      if ((x - y) > 0) {
        return x;
      }
      return modulo((x-y), y);
    }
  }


};

// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
var multiply = function(x, y) {
};

// 13. Write a function that divides two numbers without using the / operator or
// Math methods.
var divide = function(x, y) {
};

// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
  if (str1.charAt(0) === str2.charAt(0)) {
    if (str1.length > 0) {
      return compareStr(str1.substr(1), str2.substr(1));
    }
    return true;
  } else {
    return false;
  }
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str) {
  if (str.length === 1) {
    return [str];
  } else {
    return [str.substr(0,1)].concat(createArray(str.substr(1)));
  }
};

// 17. Reverse the order of an array
var reverseArr = function(array) {
  if (array.length === 1) {
    return [array[0]];
  } else {
    return [array[array.length - 1]].concat(reverseArr(array.slice(0, array.length - 1)));
  }
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
  if (length === 1) {
    return [value];
  } else {
    return [value].concat(buildList(value, length - 1));
  }
};

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
var fizzBuzz = function(n) {
  if (n === 1) {
    return ['1'];
  } else if ((n % 3 === 0) && (n % 5 === 0)) {
    return fizzBuzz(n - 1).concat(['FizzBuzz']);
  } else if (n % 3 === 0) {
    return fizzBuzz(n - 1).concat(['Fizz']);
  } else if (n % 5 === 0) {
    return fizzBuzz(n - 1).concat(['Buzz']);
  } else {
    return fizzBuzz(n - 1).concat([n.toString()]);
  }
};

// 20. Count the occurence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
  if (array[0] === value && array.length === 1) {
    return 1;
  } else if (array[0] === value && array.length > 1) {
    return 1 + countOccurrence(array.slice(1), value);
  } else if (array.length > 1) {
    return countOccurrence(array.slice(1), value);
  } else {
    return 0;
  }
};

// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
  if (array.length === 1) {
    return [callback(array[0])];
  } else {
    return [callback(array[0])].concat(rMap(array.slice(1), callback));
  }
};

// 22. Write a function that counts the number of times a key occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
var countKeysInObj = function(obj, key) {
  var total = 0;

  for (keys in obj) {
    if (keys === key) {
      total++;
    }
    if (typeof obj[keys] === 'object') {
      total += countKeysInObj(obj[keys], key);
    }
  }

  return total;
};

// 23. Write a function that counts the number of times a value occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1
var countValuesInObj = function(obj, value) {
  var total = 0;

  for (key in obj) {
    if (obj[key] === value) {
      total++;
    }
    if (typeof obj[key] === 'object') {
      total += countValuesInObj(obj[key], value);
    }
  }

  return total;
};

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, oldKey, newKey) {
  for (key in obj) {
    var newVal;
    if (typeof obj[key] === 'object') {
      if (key === oldKey) {
        obj[newKey] = replaceKeysInObj(obj[key], oldKey, newKey);
        delete obj[oldKey];
      } else {
        obj[key] = replaceKeysInObj(obj[key], oldKey, newKey);
      }
    } else if (key === oldKey) {
      obj[newKey] = obj[oldKey];
      delete obj[oldKey];
    }
  }

  return obj;
};

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
var fibonacci = function(n) {

  if (n <= 0) {
    return null;
  } else if (n === 1) {
    return [0,1];
  } else {
    var nth = [];
    var previous = fibonacci(n - 1)
    nth.push(previous[n - 1] + previous[n - 2])
    
    return previous.concat(nth);
  }

};

// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {

  if (n < 0) {
    return null;
  } else if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    return nthFibo(n - 1) + nthFibo(n - 2);
  }

};

// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(array) {
  if (array.length > 1) {
    return [array[0].toUpperCase()].concat(capitalizeWords(array.slice(1)));
  } else {
    return [array[0].toUpperCase()];
  }
};

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
var capitalizeFirst = function(array) {
  word = [array[0].charAt(0).toUpperCase() + array[0].slice(1)];

  if (array.length > 1) {
    return word.concat(capitalizeFirst(array.slice(1)));
  } else {
    return word;
  }

};

// 29. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
  var sum = 0;
  for (var key in obj) {
    if (typeof obj[key] === 'object') {
      sum += nestedEvenSum(obj[key]);
    } else {
      if (obj[key] % 2 === 0) {
        sum += obj[key];
      }
    }
  }
  return sum;
};

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(array) {
  var results = [];
  for (var i = 0; i < array.length; i++) {
    if (typeof array[i] === 'object') {
      results = results.concat(flatten(array[i]));
    } else {
      results.push(array[i]);
    }
  }
  return results;
};

// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
var letterTally = function(str, obj) {
  var letter = str.charAt(0);
  var count = obj || {};

  if (letter in count) {
    count[letter]++;
  } else {
    count[letter] = 1;
  }

  if (str.length > 1) {
    return letterTally(str.slice(1), count);
  } else {
    return count;
  }

};

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
var compress = function(list) {
  if (list.length === 1) {
    return list;
  }

  var last = 1;

  while (list[0] === list[last]) {
    if (last === list.length - 1) {
      return list.slice(list.length - 1);
    } else {
      last++;
    }
  }

  var results = list.slice(last - 1, last);
  results = results.concat(compress(list.slice(last)));
  return results;

};

// 33. Augument every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
  var results = array.slice();
  if (Array.isArray(results[0])) {
    results[0].push(aug);
  }

  if (results.length === 1) {
    return results;
  } else {
    return [results[0]].concat(augmentElements(results.slice(1), aug));
  }

};

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
  if (array.length === 1) {
    return array;
  }

  if (array[0] === 0) {
    var last = 1;
    while (array[last] === 0) {
      if (last === array.length - 1) {
        return array.slice(array.length - 1);
      } else {
        last++;
      }
    }
    var results = array.slice(last - 1, last);
    results = results.concat(minimizeZeroes(array.slice(last)));
    return results
  } else {
    return [array[0]].concat(minimizeZeroes(array.slice(1)));
  }
};

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
  if (array.length === 1) {
    if (array[0] >= 0) {
      return [array[0]];
    } else {
      return [array[0] * -1];
    }
  }

  if (array.length % 2 === 1) {
    var front = alternateSign(array.slice(0, array.length - 1));
    if (array[array.length - 1] >= 0) {
      return front.concat([array[array.length - 1]]);
    } else {
      return front.concat([array[array.length - 1] * -1]);
    }
  } else {
    var front = alternateSign(array.slice(0, array.length - 1));
    if (array[array.length - 1] <= 0) {
      return front.concat([array[array.length - 1]]);
    } else {
      return front.concat([array[array.length - 1] * -1]);
    }
  }
};

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
};


// *** EXTRA CREDIT ***

// 37. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 38. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
var binarySearch = function(array, target, min, max) {
};

// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
var mergeSort = function(array) {
};

// 40. Deeply clone objects and arrays.
// var obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// var obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
var clone = function(input) {
};
