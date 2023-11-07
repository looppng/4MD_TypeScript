import $ from 'jquery';
import sum from './utils/sum/sum';

// console.log('Ready for coding');

// console.log('Body jQuery node:', $('body'));
// console.log('Body javascript node:', document.querySelector('body'));
// console.log('2 + 6 =', sum(2, 3));


// 1. Write a function that takes two numbers (a and b) as argument
// Sum a and b
// Return the result

// myFunction(1,2)
// Expected
// 3

// myFunction(1,10)
// Expected
// 11

// myFunction(99,1)
// Expected
// 100

const saskaitit = (a:number, b:number) : number => a + b;

console.log("1.uzd")
console.log(saskaitit(1,2));
console.log(saskaitit(1,10));
console.log(saskaitit(99,1));


// Write a function that takes a value as argument
//    Return the type of the value

// myFunction(1)
// Expected
// 'number'

// myFunction(false)
// Expected
// 'boolean'

// myFunction({})
// Expected
// 'object'

// myFunction(null)
// Expected
// 'object'

// myFunction('string')
// Expected
// 'string'

// myFunction(['array'])
// Expected
// 'object'


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

// myFunction(2, 3)
// Expected
// false 

// myFunction(3, 3)
// Expected
// true 

// myFunction(1, '1')
// Expected
// false 

// myFunction('10', '10')
// Expected
// true


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

// myFunction('abcd',1)
// Expected
// 'a'

// myFunction('zyxbwpl',5)
// Expected
// 'w'

// myFunction('gfedcba',3)
// Expected
// 'e'


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

// myFunction('abcdefg')
// Expected
// 'defg'

// myFunction('1234')
// Expected
// '4'

// myFunction('fgedcba')
// Expected
// 'dcba'


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

// myFunction('abcdefg')
// Expected
// 'efg'

// myFunction('1234')
// Expected
// '234'

// myFunction('fgedcba')
// Expected
// 'cba'


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

// myFunction('abcdefg')
// Expected
// 'abc'

// myFunction('1234')
// Expected
// '123'

// myFunction('fgedcba')
// Expected
// 'fge'


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

// myFunction('abcdefgh')
// Expected
// 'abcd'

// myFunction('1234')
// Expected
// '12'

// myFunction('gedcba')
// Expected
// 'ged'


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

// myFunction('abcdefg')
// Expected
// 'abcd'

// myFunction('1234')
// Expected
// '1'

// myFunction('fgedcba')
// Expected
// 'fged'


const remLastThree = (a:string) : string => {
    return a.slice(0, -3);
}

console.log("9.uzd")
console.log(remLastThree('abcdefg'));
console.log(remLastThree('1234'));
console.log(remLastThree('fgedcba'));


// Write a function that takes two numbers (a and b) as argument
// Return b percent of a

// myFunction(100,50)
// Expected
// 50

// myFunction(10,1)
// Expected
// 0.1

// myFunction(500,25)
// Expected
// 125


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

// myFunction(6,5,4,3,2,1)
// Expected
// 10.5

// myFunction(6,2,1,4,2,3)
// Expected
// 2744

// myFunction(2,3,6,4,2,3)
// Expected
// -8

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

// myFunction(10)
// Expected
// true

// myFunction(-4)
// Expected
// true

// myFunction(5)
// Expected
// false

// myFunction(-111)
// Expected
// false


const isEven = (a:number) : boolean => a % 2 === 0;

console.log("12.uzd");
console.log(isEven(10));
console.log(isEven(-4));
console.log(isEven(5));
console.log(isEven(-111));


// Write a function that takes two strings (a and b) as arguments
// Return the number of times a occurs in b


// myFunction('m', 'how many times does the character occur in this sentence?')
// Expected
// 2

// myFunction('h', 'how many times does the character occur in this sentence?')
// Expected
// 4

// myFunction('?', 'how many times does the character occur in this sentence?')
// Expected
// 1

// myFunction('z', 'how many times does the character occur in this sentence?')
// Expected
// 0


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

// myFunction(4)
// Expected
// true 

// myFunction(1.123)
// Expected
// false 

// myFunction(1048)
// Expected
// true 

// myFunction(10.48)
// Expected
// false

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

// myFunction(10, 100)
// Expected
// 0.1

// myFunction(90, 45)
// Expected
// 4050

// myFunction(8, 20)
// Expected
// 0.4

// myFunction(2, 0.5)
// Expected
// 1


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

// myFunction('cheese', 'cake')
// Expected
// 'cheesecake'

// myFunction('lips', 's')
// Expected
// 'slips'

// myFunction('Java', 'script')
// Expected
// 'Javascript'

// myFunction(' think, therefore I am', 'I')
// Expected
// 'I think, therefore I am'


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

// myFunction(2.12397)
// Expected
// 2.12

// myFunction(3.136)
// Expected
// 3.14

// myFunction(1.12397)
// Expected
// 1.12

// myFunction(26.1379)
// Expected
// 26.14


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

// myFunction(10)
// Expected
// [1,0]

// myFunction(931)
// Expected
// [9,3,1]

// myFunction(193278)
// Expected
// [1,9,3,2,7,8]


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

// myFunction('java', 'tpi%rcs')
// Expected
// 'Javascript'

// myFunction('c%ountry', 'edis')
// Expected
// 'Countryside'

// myFunction('down', 'nw%ot')
// Expected
// 'Downtown'


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



