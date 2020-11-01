console.log('Success');

let name = 'John';
let age = 30;

name += ' Smith'; // Prints John Smith

let message = name + ' \"is\" ' + age; // Prints John Smith "is" 30 or use = ${name} + is + ${age} 
console.log(message);


age /= 5;
console.log(age); // divides the age by 5


// Arrays contain multiple values

const numbers = new Array(1,2,3,4,5,6); // it's the same way with using [1,2,3,4,5,6]
numbers[2] = 9; // change the no 3 to 9
console.log(numbers[2]); // use the index number, 2 is the index no for no 3, because they start with 0

const colors = ['red', 'blue', 'green', 'yellow'];
colors[4] = 'black'; // index 4 adds another color, black
colors.push('white'); //push is a method that requires () and adds another color
colors.pop(); // removes the last item from the array
let lastColor = colors.pop(); // assign a variable and prints only that color
let firstColor = colors.shift(); //removes the first item
console.log(firstColor);
console.log(colors);

console.log(colors.indexOf('yellow')); // prints the index no of the item

const.log(Math.)

const myArray = ['blue', 4, true, null, [1,2,3]]; // arrays can be nested inside other arrays
console.log(myArray);

// Object Literals
// https://www.youtube.com/watch?v=d5ob3WAGeZE