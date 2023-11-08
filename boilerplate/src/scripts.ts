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

const whatType = (value:any) : string => {
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

const compareValueType = (a:any, b:any) : boolean => {
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

    while(true) {
        startIndex = b.indexOf(a, startIndex);

        if (startIndex !== -1) {
            count++
            startIndex += a.length;
        } else {
            break;
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

// myFunction([true, true, true, true])
// Expected
// true 

// myFunction(['test', 'test', 'test'])
// Expected
// true 

// myFunction([1,1,1,2])
// Expected
// false 

// myFunction(['10',10,10,10])
// Expected
// false





