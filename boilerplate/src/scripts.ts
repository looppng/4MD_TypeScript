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

// 1. Write a function that takes a value as argument
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

