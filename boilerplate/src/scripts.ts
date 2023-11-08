import $ from 'jquery';
import sum from './utils/sum/sum';

console.log('Ready for coding');

console.log('Body jQuery node:', $('body'));
console.log('Body javascript node:', document.querySelector('body'));
console.log('2 + 6 =', sum(2, 3));


// Write a function that takes two numbers (a and b) as argument
// Sum a and b
// Return the result


const saskaitit = (a:number, b:number) : number => a + b;

console.log("1.uzd")
console.log(saskaitit(1,2));
console.log(saskaitit(1,10));
console.log(saskaitit(99,1));


// Write a function that takes a value as argument
//    Return the type of the value

const whatType = <T>(value: T) : string => {
    return typeof value;
}

console.log("2.uzd")
console.log(whatType(1));
console.log(whatType(false));
console.log(whatType({}));
console.log(whatType(null));
console.log(whatType('string'));
console.log(whatType(['array']));


// Write a function that takes two values, say a and b, as arguments
// Return true if the two values are equal and of the same type

const compareValueType = (a:string | number, b:string | number) : boolean => {
    return a === b;
}

console.log("3.uzd")
console.log(compareValueType(2, 3));
console.log(compareValueType(3, 3));
console.log(compareValueType(1, '1'));
console.log(compareValueType('10', '10'));


// Write a function that takes a string (a) and a number (n) as arguments
// Return the nth character of 'a'

const getNthChar = (a: string, b: number) : string => {
    if (b >= 0 && b < a.length) {
        return a[b];
    } else {
        return "Index out of this strings range"
    }
}

console.log("4.uzd")
console.log(getNthChar('abcd',1));
console.log(getNthChar('zyxbwpl',5));
console.log(getNthChar('gfedcba',3));
console.log(getNthChar('service',9));


// Write a function that takes a string (a) as argument
// Remove the first 3 characters of a
// Return the result

const remChar = (a:string) : string => {
    if (a.length < 3) {
        return '';
    }
    return a.slice(3);
}

console.log("5.uzd")
console.log(remChar('abcdefg'));
console.log(remChar('1234'));
console.log(remChar('fgedcba'));
console.log(remChar('sos'));


// Write a function that takes a string as argument
// Extract the last 3 characters from the string
// Return the result

const remCharEnd = (a:string) : string => {
    if (a.length < 3) {
        return a;
    }
    return a.slice(-3);
}

console.log("6.uzd")
console.log(remCharEnd('abcdefg'));
console.log(remCharEnd('1234'));
console.log(remCharEnd('fgedcba'));


// Write a function that takes a string (a) as argument
// Get the first 3 characters of a
// Return the result

const getStringStart = (a:string) : string => {
    return a.slice(0, 3);
}

console.log("7.uzd")
console.log(getStringStart('abcdefg'));
console.log(getStringStart('1234'));
console.log(getStringStart('fgedcba'));


// Write a function that takes a string (a) as argument
// Extract the first half a
// Return the result

const halfString = (a:string) : string => {
    const half = a.length / 2;
    return a.slice(0, half);
}

console.log("8.uzd")
console.log(halfString('abcdefgh'));
console.log(halfString('1234'));
console.log(halfString('gedcba'));


// Write a function that takes a string (a) as argument
// Remove the last 3 characters of a
// Return the result


const remLastThree = (a:string) : string => {
    return a.slice(0, -3);
}

console.log("9.uzd")
console.log(remLastThree('abcdefg'));
console.log(remLastThree('1234'));
console.log(remLastThree('fgedcba'));


// Write a function that takes two numbers (a and b) as argument
// Return b percent of a

const getPercent = (a:number, b:number) : number => {
    return (a * (b / 100));
}

console.log("10.uzd")
console.log(getPercent(100, 50));
console.log(getPercent(10, 1));
console.log(getPercent(500, 25));


// Write a function that takes 6 values (a,b,c,d,e,f) as arguments
// Sum a and b
// Then substract by c
// Then multiply by d and divide by e
// Finally raise to the power of f and return the result
// Tip: mind the order
// 2 + 3 - 1 (4 * 1 (4 / 2 (2x3))) = ?

const Calculus = (a:number, b:number, c:number, d:number, e:number, f: number) : number => {
    const simple = a + b - c;
    const multdiv = (simple * d) / e;
    const power = Math.pow(multdiv, f);
    return power;
}

console.log("11.uzd")
console.log(Calculus(6,5,4,3,2,1));
console.log(Calculus(6,2,1,4,2,3));
console.log(Calculus(2,3,6,4,2,3));


// Write a function that takes a number as argument
// If the number is even, return true
// Otherwise, return false

const isEven = (a:number) : boolean => a % 2 === 0;

console.log("12.uzd");
console.log(isEven(10));
console.log(isEven(-4));
console.log(isEven(5));
console.log(isEven(-111));


// Write a function that takes two strings (a and b) as arguments
// Return the number of times a occurs in b

const getLetterCount = (a:string, b:string) : number => {
    let count = 0;
    let startIndex = 0;

    while (startIndex < b.length) {
        if (b[startIndex] === a[0]) {
            count++;
            startIndex++;
        } else {
            startIndex++;
        }
    }
    return count;
}
console.log("13.uzd");
console.log(getLetterCount('m', 'how many times does the character occur in this sentence?'));
console.log(getLetterCount('h', 'how many times does the character occur in this sentence?'));
console.log(getLetterCount('?', 'how many times does the character occur in this sentence?'));
console.log(getLetterCount('z', 'how many times does the character occur in this sentence?'));


// Write a function that takes a number (a) as argument
// If a is a whole number (has no decimal place), return true
// Otherwise, return false

const isWhole = (a:number) : boolean => {
    return a === Math.floor(a);
}

console.log("14.uzd");
console.log(isWhole(4));
console.log(isWhole(1.123));
console.log(isWhole(1048));
console.log(isWhole(10.48));


// Write a function that takes two numbers (a and b) as arguments
// If a is smaller than b, divide a by b
// Otherwise, multiply both numbers
// Return the resulting value

const divideOrMultiply = (a:number, b:number) : number => {
    if (a < b) {
        return a / b;
    } else {
        return a * b;
    }
}

console.log("15.uzd");
console.log(divideOrMultiply(10, 100));
console.log(divideOrMultiply(90, 45));
console.log(divideOrMultiply(8, 20));
console.log(divideOrMultiply(2, 0.5));


// Write a function that takes two strings (a and b) as arguments
// If a contains b, append b to the beginning of a
// If not, append it to the end
// Return the concatenation

const whereToAdd = (a: string, b: string) : string => {
    if (a.includes(b)) {
        return b + a;
    } else {
        return a + b;
    }
}

console.log("16.uzd");
console.log(whereToAdd('cheese', 'cake'));
console.log(whereToAdd('lips', 's'));
console.log(whereToAdd('Java', 'script'));
console.log(whereToAdd(' think, therefore I am', 'I'));


// Write a function that takes a number (a) as argument
// Round a to the 2nd digit after the comma
// Return the rounded number

const roundToSecondDigit = (a:number) : number => {
    return Number(a.toFixed(2));
}

console.log("17.uzd");
console.log(roundToSecondDigit(2.12397));
console.log(roundToSecondDigit(3.136));
console.log(roundToSecondDigit(1.12397));
console.log(roundToSecondDigit(26.1379));


// Write a function that takes a number (a) as argument
// Split a into its individual digits and return them in an array
// Tip: you might want to change the type of the number for the splitting

const splitNumbers = (a:number) : number[] => {
    const digitAsString = a.toString();
    const digits = digitAsString.split('').map(Number);
    return digits;
}

console.log("18.uzd");
console.log(splitNumbers(10));
console.log(splitNumbers(931));
console.log(splitNumbers(193278));


// It seems like something happened to these strings
// Can you figure out how to clear up the chaos?
// Write a function that joins these strings together such that they form the following words:
// 'Javascript', 'Countryside', and 'Downtown'
// You might want to apply basic JS string methods such as replace(), split(), slice() etc.

const clearFullString = (a: string, b: string) : string => {
    const FullString = a + b;

    const clearedFullString = FullString
      .replace(/[^a-zA-Z]/g, '') 
      .replace('javatpircs', 'Javascript')
      .replace('countryedis', 'Countryside') 
      .replace('downnwot', 'Downtown')
    return clearedFullString;
}

console.log("19.uzd");
console.log(clearFullString('java', 'tpi%rcs'));
console.log(clearFullString('c%ountry', 'edis'));
console.log(clearFullString('down', 'nw%ot'));


// This challenge is a little bit more complex
// Write a function that takes a number (a) as argument
// If a is prime, return a
// If not, return the next higher prime number

const isPrime = (num:number) : boolean => {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    let i = 5;
    while (i * i <= num) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
      i += 6;
    }
    return true;
  }
  
const findNextPrime = (a:number) : number => {
    let next = a;
    while (!isPrime(next)) {
      next++;
    }
    return next;
  }
  
const returnPrime = (a:number) : number => {
    if (isPrime(a)) {
      return a;
    } else {
      return findNextPrime(a);
    }
  }

console.log("19.uzd");
console.log(returnPrime(38));
console.log(returnPrime(7));
console.log(returnPrime(115));
console.log(returnPrime(2000));


// Write a function that takes two numbers, say x and y, as arguments
// Check if x is divisible by y
// If yes, return x
// If not, return the next higher natural number that is divisible by y

const isDivisible = (x:number, y:number) : number => {
    if (x % y === 0) {
        return x;
    } else {
        const nextDivisible = Math.ceil(x / y) * y;
        return nextDivisible;
    }
}

console.log("20.uzd");
console.log(isDivisible(1, 23));
console.log(isDivisible(23, 23));
console.log(isDivisible(7, 3));
console.log(isDivisible(-5, 7));


// Write a function that takes two strings (a and b) as arguments
// Beginning at the end of 'a', insert 'b' after every 3rd character of 'a'
// Return the resulting string

const everyThird = (a:string, b:string) : string => {
    const result = [];
    
    for (let i = 0; i < a.length; i++) {
      result.push(a[i]);
  
      if ((i + 1) % 3 === 0) {
        result.push(b);
      }
    }
  
    return result.join('');
  }


  console.log("21.uzd");
  console.log(everyThird('1234567','.'));
  console.log(everyThird('abcde','$'));
  console.log(everyThird('zxyzxyzxyzxyzxyz','w'));
  console.log(everyThird('sportastundas','!'));


//   Write a function that takes a string as argument
// As it is, the string has no meaning
// Increment each letter to the next letter in the alphabet
// Return the correct word

const incrementStringLetters = (inputString: string) : string  => {
    const result = inputString.split('').map(char => {
      if (char >= 'a' && char <= 'z') {
        // Handle lowercase letters
        const nextCharCode = char.charCodeAt(0) + 1;
        if (nextCharCode > 'z'.charCodeAt(0)) {
          return 'a';
        } else {
          return String.fromCharCode(nextCharCode);
        }
      } else if (char >= 'A' && char <= 'Z') {
        // Handle uppercase letters
        const nextCharCode = char.charCodeAt(0) + 1;
        if (nextCharCode > 'Z'.charCodeAt(0)) {
          return 'A';
        } else {
          return String.fromCharCode(nextCharCode);
        }
      } else {
        // Keep non-alphabetic characters unchanged
        return char;
      }
    });
  
    return result.join('');
}
  
  console.log("22.uzd");
  console.log(incrementStringLetters('bnchmf'));
  console.log(incrementStringLetters('bgddrd'));
  console.log(incrementStringLetters('sdrshmf'));


// Write a function that takes an array (a) and a value (n) as argument
// Return the nth element of 'a'

function nthArray<T>(a: T[], n: number): T | undefined {
    if (n >= 0 && n < a.length ) {
      return a[n];
    } else {
      return undefined;
    }
}

console.log("23.uzd");
console.log(nthArray([1,2,3,4,5], 2));
console.log(nthArray([10,9,8,7,6], 4));
console.log(nthArray([7,2,1,6,3], 0));


// Write a function that takes an array (a) as argument
// Remove the first 3 elements of 'a'
// Return the result

const spliceThree = (a:number[]) => {
    if (Array.isArray(a) && a.length >= 3) {
        a.splice(0, 3); 
      }
      return a;
}

console.log("24.uzd");
console.log(spliceThree([1,2,3,4]));
console.log(spliceThree([5,4,3,2,1,0]));
console.log(spliceThree([99,1,1]));


// Write a function that takes an array (a) as argument
// Extract the last 3 elements of a
// Return the resulting array

const extractThree = (a:number[]) => {
    if (Array.isArray(a) && a.length >= 3) {
        return a.slice(-3);
    } else {
        return a;
    }
}

console.log("25.uzd");
console.log(extractThree([1,2,3,4]));
console.log(extractThree([5,4,3,2,1,0]));
console.log(extractThree([99,1,1]));


// Write a function that takes an array (a) as argument
// Extract the first 3 elements of a
// Return the resulting array

const slicedaArray = (a:number[]) => {
    if (Array.isArray(a) && a.length >= 3) {
        return a.slice(0, 3);
    } else {
        return a;
    }
}

console.log("26.uzd");
console.log(slicedaArray([1,2,3,4]));
console.log(slicedaArray([5,4,3,2,1,0]));
console.log(slicedaArray([99,1,1]));


// Write a function that takes an array (a) and a number (n) as arguments
// It should return the last n elements of a

const lastNArray = (a:number[], n:number) => {
    if (Array.isArray(a) && n > 0) {
      return a.slice(-n); 
    } else {
      return [];
    }
}

console.log("27.uzd");
console.log(lastNArray([1, 2, 3, 4, 5], 2));
console.log(lastNArray([1, 2, 3], 6));
console.log(lastNArray([1, 2, 3, 4, 5, 6, 7, 8], 3));


// Write a function that takes an array (a) and a value (b) as argument
// The function should clean a from all occurrences of b
// Return the filtered array

const remElArray = <T>(a: T[], b: T): T[] => {
    if (Array.isArray(a)) {
      return a.filter(item => item !== b);
    } else {
      return a;
    }
}

console.log("28.uzd");
console.log(remElArray([1,2,3], 2));
console.log(remElArray([1,2,'2'], '2'));
console.log(remElArray([false,'2',1], false));
console.log(remElArray([1,2,'2',1], 1));


// Write a function that takes an array (a) as argument
// Return the number of elements in a

const arrLength = (a:number[]) => {
    if (Array.isArray(a)) {
        return a.length;
      } else {
        return 0;
      }
}

console.log("29.uzd");
console.log(arrLength([1,2,2,4]));
console.log(arrLength([9,9,9]));
console.log(arrLength([4,3,2,1,0]));


// Write a function that takes an array of numbers as argument
// Return the number of negative values in the array

const getNegativeCount = (a:number[]) => {
    if (Array.isArray(a)) {
        let count = 0; 
    
        for (let i = 0; i < a.length; i++) {
          if (a[i] < 0) {
            count++; 
          }
        }
    
        return count;
      } else {
        return 0; 
      }
}

console.log("30.uzd");
console.log(getNegativeCount([1,-2,2,-4]));
console.log(getNegativeCount([0,9,1]));
console.log(getNegativeCount([4,-3,2,1,0]));


// Write a function that takes an array of numbers as argument
// It should return an array with the numbers sorted in descending order

const sortDescending = (a:number[]) => {
    if (Array.isArray(a)) {
        return a.slice().sort((a, b) => b - a); 
    } else {
        return a; 
    }
}

console.log("31.uzd");
console.log(sortDescending([1,3,2]));
console.log(sortDescending([4,2,3,1]));


// Write a function that takes an array of strings as argument
// Sort the array elements alphabetically
// Return the result

const sortArray = (a:string[]) => {
    if (Array.isArray(a)) {
        return a.slice().sort(); 
    } else {
        return a; 
    }
}

console.log("32.uzd");
console.log(sortArray(['b', 'c', 'd', 'a']));
console.log(sortArray(['z', 'c', 'd', 'a', 'y', 'a', 'w']));


// Write a function that takes an array of numbers as argument
// It should return the average of the numbers

const arrayAverage = (numbers:number[]) => {
    if (Array.isArray(numbers) && numbers.length > 0) {
        const sum = numbers.reduce((acc, number) => acc + number, 0);
        return sum / numbers.length;
      } else {
        return 0;
      }
}

console.log("33.uzd");
console.log(arrayAverage([10,100,40]));
console.log(arrayAverage([10,100,1000]));
console.log(arrayAverage([-50,0,50,200]));


// Write a function that takes an array of strings as argument
// Return the longest string

// myFunction(['help', 'me'])
// Expected
// 'help'

// myFunction(['I', 'need', 'candy'])
// Expected
// 'candy'

const findLongestString = (strings:string[]) => {
    if (Array.isArray(strings) && strings.length > 0) {
      let longest = strings[0];
  
      for (let i = 1; i < strings.length; i++) {
        if (strings[i].length > longest.length) {
          longest = strings[i];
        }
      }
  
      return longest;
    } else {
      return null;
    }
}

console.log("34.uzd");
console.log(findLongestString(['help', 'me']));
console.log(findLongestString(['I', 'need', 'candy']));


// Write a function that takes an array as argument
// It should return true if all elements in the array are equal
// It should return false otherwise

const checkEqual = <T>(arr:T[]) : boolean => {
    if (Array.isArray(arr) && arr.length > 0) {
        for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[0]) {
            return false; 
        }
        }
        return true; 
    } else {
        return false; 
    }
}

console.log("35.uzd");
console.log(checkEqual([true, true, true, true]));
console.log(checkEqual(['test', 'test', 'test']));
console.log(checkEqual([1,1,1,2]));
console.log(checkEqual(['10',10,10,10]));


// Write a function that takes arguments an arbitrary number of arrays
// It should return an array containing the values of all arrays

const concatArr = <T>(...arrays: (T | boolean | string)[][]): (T | boolean | string)[] => {
    return ([] as (T | boolean | string)[]).concat(...arrays);
}

console.log("36.uzd");
console.log(concatArr([1, 2, 3], [4, 5, 6]));
console.log(concatArr(['a', 'b', 'c'], [4, 5, 6]));
console.log(concatArr([true, true], [1, 2], ['a', 'b']));


// Write a function that takes an array of objects as argument
// Sort the array by property b in ascending order
// Return the sorted array

function sortObjArr<T>(arr: T[]): T[] {
    if (Array.isArray(arr)) {
      return arr.slice().sort();
    } else {
      return arr; 
    }
}

console.log("!37.uzd");
console.log(sortObjArr([{a:1,b:2},{a:5,b:4}]));
console.log(sortObjArr([{a:1,b:7},{a:2,b:1}]));
console.log(sortObjArr([{a:1,b:7},{a:2,b:1}]));


// Write a function that takes two arrays as arguments
// Merge both arrays and remove duplicate values
// Sort the merge result in ascending order
// Return the resulting array

const mergeAndSortArrays = (arr1: number[], arr2: number[]): number[] => {
    const mergedArray = [...new Set([...arr1, ...arr2])];
    return mergedArray.sort((a, b) => a - b);
}

console.log("38.uzd");
console.log(mergeAndSortArrays([1, 2, 3], [3, 4, 5]));
console.log(mergeAndSortArrays([-10, 22, 333, 42], [-11, 5, 22, 41, 42]));


// Write a function that takes an array (a) and a number (b) as arguments
// Sum up all array elements with a value greater than b
// Return the sum

const sumArrayElementsGreaterThanB = (arr: number[], b: number): number => {
    if (!Array.isArray(arr)) {
      return 0; 
    }
  
    const sum = arr.reduce((accumulator, currentValue) => {
      if (currentValue > b) {
        return accumulator + currentValue;
      }
      return accumulator;
    }, 0);
  
    return sum;
}

console.log("39.uzd");
console.log(sumArrayElementsGreaterThanB([1, 2, 3, 4, 5, 6, 7], 2));
console.log(sumArrayElementsGreaterThanB([-10, -11, -3, 1, -4], -3));
console.log(sumArrayElementsGreaterThanB([78, 99, 100, 101, 401], 99));


// Write a function that takes two numbers (min and max) as arguments
// Return an array of numbers in the range min to max

const range = (min: number, max: number): number[] => {
    if (typeof min!== 'number' || typeof max!== 'number') {
      return [];
    }
    return Array.from({ length: max - min + 1 }, (v, k) => k + min);
}

console.log("40.uzd");
console.log(range(2, 10));
console.log(range(1, 3));
console.log(range(-5, 5));
console.log(range(2, 7));


// Write a function that takes an array of strings as argument
// Group those strings by their first letter
// Return an object that contains properties with keys representing first letters
// The values should be arrays of strings containing only the corresponding strings
// For example, the array ['Alf', 'Alice', 'Ben'] should be transformed to
// { a: ['Alf', 'Alice'], b: ['Ben']}

const groupStringsByFirstLetter = (arr: string[]): Record<string, string[]> => {
    if (!Array.isArray(arr)) {
      return {};
    }
  
    const grouped: Record<string, string[]> = {};
  
    arr.forEach((str) => {
      const firstLetter = str.charAt(0).toLowerCase(); 
      if (!grouped[firstLetter]) {
        grouped[firstLetter] = [];
      }
      grouped[firstLetter].push(str);
    });
  
    return grouped;
}


console.log("41.uzd");
console.log(groupStringsByFirstLetter(['Alf', 'Alice', 'Ben']));
console.log(groupStringsByFirstLetter(['Ant', 'Bear', 'Bird']));
console.log(groupStringsByFirstLetter(['Berlin', 'Paris', 'Prague']));


// Write a function that takes an array with arbitrary elements and a number as arguments
// Return a new array, the first element should be either the given number itself
// or zero if the number is smaller than 6
// The other elements should be the elements of the original array
// Try not to mutate the original array

const arrayEx = <T, N extends number>(arr: T[], num: N): (T | N)[] => {
    if (!Array.isArray(arr)) {
      return [];
    }
  
    if (num <= 6) {
      return [num,...arr];
    }
  
    return arr;
}

console.log("!42.uzd");
console.log(arrayEx([1,2,3], 6));
console.log(arrayEx(['a','b'], 2));
console.log(arrayEx([null,false], 11));


// Write a function that takes an array (a) and a value (n) as arguments
// Save every nth element in a new array
// Return the new array

const saveEveryNthElement = <T>(arr: T[], n: number): T[] => {
    if (!Array.isArray(arr)) {
      return [];
    } 

    const result: T[] = [];
    for (let i = n - 1; i < arr.length; i += n) {
      result.push(arr[i]);
    }
  
    return result;
}

console.log("43.uzd");
console.log(saveEveryNthElement([1,2,3,4,5,6,7,8,9,10],3));
console.log(saveEveryNthElement([10,9,8,7,6,5,4,3,2,1],5));
console.log(saveEveryNthElement([7,2,1,6,3,4,5,8,9,10],2));


// Write a function that takes an object with two properties as argument
// It should return the value of the property with key country

const getObjCountry = (obj: { continent: string, country: string }): string => {
    return obj.country;
}

console.log("44.uzd");
console.log(getObjCountry({ continent: 'Asia', country: 'Japan'}));
console.log(getObjCountry({ country: 'Sweden', continent: 'Europe'}));


// Write a function that takes an object with two properties as argument
// It should return the value of the property with key 'prop-2'
// Tip: you might want to use the square brackets property accessor

const getObjProp2 = <T>(obj: Record<string, T>): T | undefined => {
    return obj['prop-2'];
  }
  
console.log("45.uzd");
console.log(getObjProp2({  one: 1,  'prop-2': 2}));
console.log(getObjProp2({  'prop-2': 'two',  prop: 'test'}));


// Write a function that takes an object with two properties and a string as arguments
// It should return the value of the property with key equal to the value of the string

const returnObjProperty = <T>(obj: Record<string, T>, key: string): T | undefined => {
    return obj[key];
  }
  
console.log("46.uzd");
console.log(returnObjProperty({  continent: 'Asia',  country: 'Japan'}, 'continent'));
console.log(returnObjProperty({  country: 'Sweden',  continent: 'Europe'}, 'country'));


// Write a function that takes an object (a) and a string (b) as argument
// Return true if a has a property with key b
// Return false otherwise

const checkIfObjHasProperty = <T>(obj: Record<string, T>, key: string): boolean => {
    return Object.prototype.hasOwnProperty.call(obj, key);
  }
  
console.log("47.uzd");
console.log(checkIfObjHasProperty({a:1,b:2,c:3},'b'));
console.log(checkIfObjHasProperty({x:'a',y:'b',z:'c'},'a'));
console.log(checkIfObjHasProperty({x:'a',y:'b',z:'c'},'z'));


// Write a function that a string (a) as argument
// Create an object that has a property with key 'key' and a value of a
// Return the object

const getKey = (key: string): Record<string, string> => {
    return {key};
}

console.log("48.uzd");
console.log(getKey('a'));
console.log(getKey('z'));
console.log(getKey('b'));


// Write a function that takes two strings (a and b) as arguments
// Create an object that has a property with key 'a' and a value of 'b'
// Return the object

const createObject = (key: string, value: string): Record<string, string> => {
    return { [key]: value };
}

console.log("49.uzd");
console.log(createObject('a','b'));
console.log(createObject('z','x'));
console.log(createObject('b','w'));


// Write a function that takes two arrays (a and b) as arguments
// Create an object that has properties with keys 'a' and corresponding values 'b'
// Return the object

const createObjectFromArrays = (a: (string | number)[], b: (string | number)[]): Record<string | number, string | number> => {
    const result: Record<string | number, string | number> = {};
  
    for (let i = 0; i < a.length; i++) {
      result[a[i]] = b[i];
    }
  
    return result;
}  

console.log("50.uzd");
console.log(createObjectFromArrays(['a','b','c'],[1,2,3]));
console.log(createObjectFromArrays(['w','x','y','z'],[10,9,5,2]));
console.log(createObjectFromArrays([1,'b'],['a',2]));


// Write a function that takes an object (a) as argument
// Return an array with all object keys

const getObjectKeys = <T>(obj: Record<string, T>): string[] => {
    return Object.keys(obj);
  }
  
console.log("51.uzd");
console.log(getObjectKeys({a:1,b:2,c:3}));
console.log(getObjectKeys({j:9,i:2,x:3,z:4}));
console.log(getObjectKeys({w:15,x:22,y:13}));


// Write a function that takes an object (a) as argument
// Return the sum of all object values

const sumOfObjects = <T extends number>(obj: Record<string, T>): number => {
    const values = Object.values(obj);
    return values.reduce((a, b) => a + b, 0);
}
  
console.log("52.uzd");
console.log(sumOfObjects({a:1,b:2,c:3}));
console.log(sumOfObjects({j:9,i:2,x:3,z:4}));
console.log(sumOfObjects({w:15,x:22,y:13}));


// Write a function that takes an object as argument
// It should return an object with all original object properties
// except for the property with key 'b'

const filterKey = <T>(obj: Record<string, T>): Record<string, T> => {
    return Object.fromEntries(Object.entries(obj).filter(([key]) => key!== 'b'));
}

console.log("53.uzd");
console.log(filterKey({ a: 1, b: 7, c: 3 }));
console.log(filterKey({ b: 0, a: 7, d: 8 }));
console.log(filterKey({ e: 6, f: 4, b: 5, a: 3 }));


// Write a function that takes two objects as arguments
// Unfortunately, the property 'b' in the second object has the wrong key
// should be named 'd' instead
// Merge both objects and correct the wrong property name
// Return the resulting object
// It should have the properties 'a', 'b', 'c', 'd', and 'e'

const combObj = <T>(obj1: Record<string, T>, obj2: Record<string, T>): Record<string, T> => {
    // Create a copy of obj2
    const modifiedObj2 = { ...obj2 };
  
    // Rename 'b' to 'd' in the copy of obj2
    if ('b' in modifiedObj2) {
      modifiedObj2['d'] = modifiedObj2['b'];
      delete modifiedObj2['b'];
    }
  
    // Merge the modified copy of obj2 with obj1 and return the result
    return Object.fromEntries(
      Object.entries(obj1).concat(Object.entries(modifiedObj2))
    );
}

console.log("54.uzd");
console.log(combObj({ a: 1, b: 2 }, { c: 3, b: 4, e: 5 }));
console.log(combObj({ a: 5, b: 4 }, { c: 3, b: 1, e: 2 }));


// Write a function that takes an object (a) and a number (b) as arguments
// Multiply all values of 'a' by 'b'
// Return the resulting object

const multiplyObjectValues = <T extends number>(obj: Record<string, T>, multiplier: number): Record<string, number> => {
    const result: Record<string, number> = {};
  
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        if (typeof obj[key] === 'number') {
          result[key] = obj[key] * multiplier;
        }
      }
    }
  
    return result;
}

console.log("55.uzd");
console.log(multiplyObjectValues({a:1,b:2,c:3},3));
console.log(multiplyObjectValues({j:9,i:2,x:3,z:4},10));
console.log(multiplyObjectValues({w:15,x:22,y:13},6));


// Write a function that takes an object as argument
// Somehow, the properties and keys of the object got mixed up
// Swap the Javascript object's key with its values and return the resulting object

const swapKeyWithValues = <T extends string | number>(obj: Record<string, T>): Record<T, string> => {
    const result: Record<T, string> = {} as Record<T, string>;
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        result[obj[key] as T] = key;
      }
    } 
    return result;
}

console.log("56.uzd");
console.log(swapKeyWithValues({z:'a',y:'b',x:'c',w:'d'}));
console.log(swapKeyWithValues({2:'a',4:'b',6:'c',8:'d'}));
console.log(swapKeyWithValues({a:1,z:24}));


// Write a function that takes an object as argument
// Some of the property values contain empty strings
// Replace empty strings and strings that contain only whitespace with null values
// Return the resulting object

// myFunction({ a: 'a', b: 'b', c: '' })
// Expected
// { a: 'a', b: 'b', c: null }

// myFunction({ a: '', b: 'b', c: ' ', d: 'd' })
// Expected
// { a: null, b: 'b', c: null, d: 'd' }

// myFunction({ a: 'a', b: 'b ', c: ' ', d: '' })
// Expected
// { a: 'a', b: 'b ', c: null, d: null }

const objReplaceEmptyStrings = (obj: Record<string, string>): Record<string, string | null> => {
    const result: Record<string, string | null> = {};
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        result[key] = obj[key] === '' ? null : obj[key];
      }
    }
    return result;
}

console.log("57.uzd");
console.log(objReplaceEmptyStrings({ a: 'a', b: 'b', c: '' }));
console.log(objReplaceEmptyStrings({ a: '', b: 'b', c:'', d: 'd' }));
console.log(objReplaceEmptyStrings({ a: 'a', b: 'b ', c: '', d: '' }));


// Write a function that takes an object as argument containing properties with personal information
// Extract firstName, lastName, size, and weight if available
// If size or weight is given transform the value to a string
// Attach the unit cm to the size
// Attach the unit kg to the weight
// Return a new object with all available properties that we are interested in

// myFunction({fn: 'Lisa', ln: 'Müller', age: 17, size: 175, weight: 67})
// Expected
// {fn: 'Lisa', ln: 'Müller', size: '175cm', weight: '67kg'}

// myFunction({fn: 'Martin', ln: 'Harper', age: 26, email: 'martin.harper@test.de', weight: 102})
// Expected
// {fn: 'Martin', ln: 'Harper', weight: '102kg'}

// myFunction({fn: 'Andrew', ln: 'Harper', age: 81, size: 175, weight: 71})
// Expected
// {fn: 'Andrew', ln: 'Harper', size: '175cm', weight: '71kg'}

// myFunction({fn: 'Matthew', ln: 'Müller', age: 19, email: 'matthew@mueller.de'})
// Expected
// {fn: 'Matthew', ln: 'Müller'}

const extractPersonalInfo = (obj: Record<string, string | number>): Record<string, string | number> => {
    const result: Record<string, string | number> = {};
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        if (key === 'fn' || key === 'ln') {
          result[key] = obj[key];
        } else if (key ==='size' || key === 'weight') {
          result[key] = `${obj[key]}cm`;
        } else {
          result[key] = obj[key];
        }
      }
      if (key === 'age') {
        result[key] = null;
      } else if (key === 'email') {
        result[key] = null;
      }
    }
    return result;
}

console.log("58.uzd");
console.log(extractPersonalInfo({fn: 'Lisa', ln: 'Müller', age: 17, size: 175, weight: 67}));
console.log(extractPersonalInfo({fn: 'Martin', ln: 'Harper', age: 26, email:'martin.harper@test.de', weight: 102}));
console.log(extractPersonalInfo({fn: 'Andrew', ln: 'Harper', age: 81, size: 175, weight: 71}));
console.log(extractPersonalInfo({fn: 'Matthew', ln: 'Müller', age: 19, email:'matthew@mueller.de'}));


// Write a function that takes an array of objects and a string as arguments
// Add a property with key 'continent' and value equal to the string to each of the objects
// Return the new array of objects
// Tip: try not to mutate the original array

const addContinent = (arr: Array<Record<string, string>>, continent: string): Array<Record<string, string>> => {
    for (const obj of arr) {
        obj['continent'] = continent;
    }
    return arr;
}

console.log("59.uzd");
console.log(addContinent([{ city: 'Tokyo', country: 'Japan' }, { city: 'Bangkok', country: 'Thailand' }], 'Asia'));
console.log(addContinent([{ city: 'Stockholm', country: 'Sweden' }, { city: 'Paris', country: 'France' }], 'Europe'));


// Write a function that takes an array of numbers as argument
// Convert the array to an object
// It should have a key for each unique value of the array
// The corresponding object value should be the number of times the key occurs within the array

const countOccurences = (arr: Array<number>): Record<number, number> => {
    const result: Record<number, number> = {};
    for (const num of arr) {
        if (result[num]) {
            result[num]++;
        } else {
            result[num] = 1;
        }
    }
    return result;
}

console.log("60.uzd");
console.log(countOccurences([1,2,2,3]));
console.log(countOccurences([9,9,9,99]));
console.log(countOccurences([4,3,2,1]));


// Write a function that takes two date instances as arguments
// It should return true if the dates are equal
// It should return false otherwise

const checkIfDatesAreEqual = (date1: Date, date2: Date): boolean => {
    return date1.getDate() === date2.getDate() && date1.getMonth() === date2.getMonth() && date1.getFullYear() === date2.getFullYear() && date1.getMinutes() === date2.getMinutes();
}

console.log("61.uzd");
console.log(checkIfDatesAreEqual(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:45:00')));
console.log(checkIfDatesAreEqual(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:00:00')));
console.log(checkIfDatesAreEqual(new Date('2001/01/01 08:00:00'), new Date('2000/01/01 08:00:00')));


// Write a function that takes two date instances as argument
// It should return the number of days that lies between those dates

const countDaysBetweenTwoDates = (date1: Date, date2: Date): number => {
    const oneDay = 1000 * 60 * 60 * 24;
    return Math.floor((date2.getTime() - date1.getTime()) / oneDay);
}

console.log("62.uzd");
console.log(countDaysBetweenTwoDates(new Date('2020-06-01'), new Date('2020-06-11')));
console.log(countDaysBetweenTwoDates(new Date('2000-01-01'), new Date('2020-06-01')));


// Write a function that takes two date instances as argument
// It should return true if they fall on the exact same day
// It should return false otherwise

const isSameDay = (date1: Date, date2: Date): boolean => {
    return date1.getDate() === date2.getDate() && date1.getMonth() === date2.getMonth() && date1.getFullYear() === date2.getFullYear();
}

console.log("63.uzd");
console.log(isSameDay(new Date('2000/01/01'), new Date('2000/01/01')));
console.log(isSameDay(new Date('2000/01/01'), new Date('2000/01/02')));
console.log(isSameDay(new Date('2001/01/01'), new Date('2000/01/01')));
console.log(isSameDay(new Date('2000/11/01'), new Date('2000/01/01')));


// SPREAD OPERATOR 
// Use spread operator in all tasks


// Write a function that takes two number arrays as parameters 
// and return an array which contains elements from both 
// arrays

// myFunction([1, 2], [3, 4]) 
// Expected
// [1, 2, 3, 4]

// myFunction([1, 2], [3, 4, 5, 6]) 
// Expected
// [1, 2, 3, 4, 5, 6]

const newArrWithSameElements = (...args: Array<Array<number>>): Array<number> => {
    const result: Array<number> = [];
    for (const arr of args) {
        result.push(...arr);
    }
    return result;
}

console.log("64.uzd");
console.log(newArrWithSameElements([1, 2], [3, 4]));
console.log(newArrWithSameElements([1, 2], [3, 4, 5, 6]));


// Write a function that takes an array and a string as parameters 
// and return an array which contains all elements from the given array
// and the given string as the last element

const addElementToArray = (arr: Array<string>, element: string): Array<string> => {
    return [...arr, element];
}

console.log("65.uzd");
console.log(addElementToArray(['Apple', 'Orange', 'Banana'], 'Kiwi'));
console.log(addElementToArray(['Apple', 'Orange', 'Strawberry'], 'Lemon'));


// Write a function that takes an array and a string as parameters 
// and return an array which contains all elements from the given array
// and the given string as the first element

// myFunction(['Apple', 'Orange', 'Banana'], 'Kiwi'); 
// Expected
// ['Kiwi', 'Apple', 'Orange', 'Banana']

const addElementToArrFirst = (arr: Array<string>, element: string): Array<string> => {
    arr.unshift(element);
    return [...arr, element];
}

console.log("66.uzd");
console.log(addElementToArrFirst(['Apple', 'Orange', 'Banana'], 'Kiwi'));
console.log(addElementToArrFirst(['Apple', 'Orange', 'Strawberry'], 'Lemon'));


// Write a function that takes two objects as parameters 
// and return an object which contains properties from both 
// objects using spread operator using spread operator

// myFunction({ a:1, b:2 }, { c:3, d:4 }) 
// Expected
// { a:1, b:2, c:3, d:4 }

// myFunction({ a:1, b:2 }, { c:3, d:4, e:5, f:6 }) 
// Expected
// { a:1, b:2, c:3, d:4, e:5, f:6 }



const newObjWithSameProperties = (...args: Array<Record<string, number>>): Record<string, number> => {
    const result: Record<string, number> = {};
    for (const obj of args) {
        Object.assign(result, obj);
    }
    return result;
}

console.log("67.uzd");
console.log(newObjWithSameProperties({ a: 1, b: 2 }, { c: 3, d: 4 }));
console.log(newObjWithSameProperties({ a: 1, b: 2 }, { c: 3, d: 4, e: 5, f: 6 }));


// Write a function that takes an object and a string as parameters 
// and return an object which contains properties from the given object
// and a new property favoriteMovie with the value equal to the given string and using spread operator

// myFunction({ eyeColor: 'green', age: 10 }, 'Garfield') 
// Expected
// { eyeColor: 'green', age: 10, favoriteMovie:  'Garfield' }

// myFunction({ eyeColor: 'blue', age: 15 }, 'Twilight') 
// Expected
// { eyeColor: 'blue', age: 15, favoriteMovie:  'Twilight' }

const newObjWithFavoriteMovie = (obj: Record<string | number, number | string>, favoriteMovie: string): Record<string | number, number | string> => {
    return {...obj, favoriteMovie };
}

console.log("68.uzd");
console.log(newObjWithFavoriteMovie({ eyeColor: 'green', age: 10 }, 'Garfield'));
console.log(newObjWithFavoriteMovie({ eyeColor: 'blue', age: 15 }, 'Twilight'));









































