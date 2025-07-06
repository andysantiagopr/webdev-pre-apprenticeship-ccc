
/* List of most commonly used array methods:

.push(): Adds one or more elements to the end of an array.
.pop(): Removes and returns the last element of an array.
.shift(): Removes and returns the first element of an array.
.unshift(): Adds one or more elements to the beginning of an array.
.splice(): Adds or removes elements from an array at a specified index.
.slice(): Returns a new array that contains a portion of an existing array.
.concat(): Joins two or more arrays and returns a new array.
.join(): Joins all the elements of an array into a string.
.indexOf(): Returns the index of the first occurrence of a specified element in an array.
.lastIndexOf(): Returns the index of the last occurrence of a specified element in an array.
.sort(): Sorts the elements of an array in place.
.reverse(): Reverses the order of the elements of an array.
.filter(): Creates a new array with all elements that pass a test implemented by the provided function.
.map(): Creates a new array with the results of calling a provided function on every element in the array.
.reduce(): Applies a function against an accumulator and each element in the array to reduce it to a single value.

*/

//---.Push method()---//

let fruits = ["apple", "banana", "orange"];

fruits.push("grape");

console.log(fruits); //output ['apple', 'banana', 'orange', 'grape']

//---.reverse() method---//

/* The .reverse() method is a built-in method in JavaScript that is used to reverse the order of elements in an array.
The method modifies the original array in place, and does not create a new array. */

fruits = ['apple', 'banana', 'orange'];
fruits.reverse();
console.log(fruits); //output ['orange', 'banana', 'apple']

//---.find() method---//

/* The .find() method in JavaScript is used to find the first element in an array that satisfies a given condition, and returns that element.*/

fruits = ['apple', 'banana', 'orange'];
let result = fruits.find(fruit => fruit === 'banana');

console.log(result); //outputs 'banana'

//---.includes()---//

/* The .includes() method is a built-in function in many programming languages, including JavaScript, that is used to check if an array or a string contains a specific element or substring, respectively.

In JavaScript, the .includes() method is used to check if an array contains a specific element. The method returns true if the element is found in the array, and false otherwise. 
The method searches the array from the beginning to the end, and stops searching as soon as it finds the first occurrence of the element. */

fruits = ['apple', 'orange', 'banana'];
let hasOrange = fruits.includes('orange');
console.log(hasOrange); // outputs true; 

//---.map() method---//

/* In JavaScript, the map() method is used to transform each element of an array into a new element based on a given function, and returns a new array with the transformed elements. 
The original array is not modified. */

/*array.map(function(currentValue, index, array) {
    //return a new value based on currentValue
}); */

let numbers = [1,2,3,4,5];
let squares = numbers.map(function(number) {
    return number * number;
});

console.log(squares); // [1,4,9,16,25]

//---.reduce()---//

/* The .reduce() method is a built-in function in many programming languages, including JavaScript, that is used to apply a function to each element in an array 
and reduce the array to a single value.

In JavaScript, the .reduce() method is used to iterate over each element in an array and apply a function that takes two parameters: an accumulator and the current element. 
The accumulator is initialized to an initial value, and its value is updated at each iteration based on the return value of the function. 
The method returns the final value of the accumulator after all the iterations.

array.reduce(function(accumulator, currentValue) {
    //function body}
}, initialValue); */

numbers = [1,2,3,4,5];
sum = numbers.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);

console.log(sum); // outputs 15

/* The .reduce() method can be used for many other operations, such as finding the maximum or minimum value in an array, counting the number of occurrences of a specific element, or concatenating the elements of an array into a single string. 
The function passed to the .reduce() method can be written in many different ways, depending on the specific operation that you want to perform. */

//---Object Merging---//

/* In JavaScript, object extend (also known as object merging) is a technique for combining two or more objects into a single object, where the resulting object contains all the properties of the original objects. 
The process of object extend can be done manually by iterating over the original objects and copying their properties to a new object, or it can be done using helper functions or libraries that provide this functionality.

One way to extend objects manually is by using a for...in loop to iterate over the properties of the original objects and copy them to a new object.*/

let obj1 = { a: 1, b: 2 };
let obj2 = { b: 3, c: 4 };
let obj3 = {};

for (let prop in obj1) {
    obj3[prop] = obj1[prop];
}
for (let prop in obj2) {
    obj3[prop] = obj2[prop];
}

console.log(obj3); //output: { a: 1, b: 3, c: 4}

function titleCase(str) { //Syntax for using 3 methods to capitalize first letter of each word in a str input
return str.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ");
}

function titleCase(str) { //Second option for the same result 
  // Split the string into an array of words
  const words = str.split(" ");

  // Capitalize the first letter of each word
  const capitalizedWords = words.map(word => {
    const firstLetter = word.charAt(0).toUpperCase();
    const restOfWord = word.slice(1).toLowerCase();
    return `${firstLetter}${restOfWord}`;
  });

  // Join the capitalized words back into a string
  const titleCaseStr = capitalizedWords.join(" ");

  // Return the title-cased string
  return titleCaseStr;
}

//---Object.entries()---//

/* This is a built-in JavaScript method that converts an object into an array of key-value pairs. 
It allows you to loop over an object like you would loop over an array, using tools like .forEach(), .map(), .filter(), or .reduce(). */

person = {
  name: "Andy",
  age: 26
};

console.log(Object.entries(person)); 

/* Output:

  ["name", "Andy"],
  ["age", 26]
]

*/ 

//---Ternary Operator ?---//

/* The ternary operator in JavaScript is a shorthand way to write an if...else statement. It's called "ternary" because it takes three parts:

condition ? expression_if_true : expression_if_false*/

let age = 20;
let message = age >= 18 ? "You can vote" : "You cannot vote";

console.log(message); // Output: "You can vote"

//SAME AS THE FOLLOWING:

message;
if (age >= 18) {
  message = "You can vote";
} else {
  message = "You cannot vote";
}

//---Utilizing Null and Infinity Values on a for...in loop to receive the largest value in a key from an object---//

function locateLargestKey(obj) {

let largestKey = null;
let largestValue = -Infinity; 

for (let key in obj) {
    if (obj[key] > largestValue) {
        largestValue = obj[key];
        largestKey = key;
    }
} return largestKey; 
}; 

//---hasOwnProperty() method---//

/* It checks whether the object itself (not its prototype) has a property with the specified name. 
hasOwnProperty() only checks for the existence of a key (property name) on the object — not the value. */

person = {
  name: "Andy",
  age: 26
};

console.log(person.hasOwnProperty("name")); // true
console.log(person.hasOwnProperty("height")); // false
console.log(person.hasOwnProperty("toString")); // false (comes from prototype)


function addNewProperty(obj, propName, propValue) { //hasOwnProperty method in action. Returns a Boolean Value if the key exists inside the Object//
obj[propName] = propValue;
return obj.hasOwnProperty(propName); 
}

function sumOfNumbers(arr) { //Syntax for reduce method returning sum from an array//
let sum = arr.reduce(function(accumulator, currentValue){
    return accumulator + currentValue;
}, 0); return sum;
}

//---Solving Palindrome---//

//Option 1: Using built-in functions//

function palindrome(str) {
  var re = /[\W_]/g; // This removes anything that is NOT a letter or number (regex to avoid a bunch of chars)
  var lowRegStr = str.toLowerCase().replace(re, ''); //.replace(re, '') uses the regular expression to remove everything that's not a letter or number.
  var reverseStr = lowRegStr.split('').reverse().join(''); //.split('') turns the string into an array of individual characters. .reverse() reverses the array. .join('') puts the array back together as a string
  return reverseStr === lowRegStr;
}

//Option 2: Using a For Loop (Manual Comparison)//

function palindrome(str) {
 var re = /[^A-Za-z0-9]/g;
 str = str.toLowerCase().replace(re, '');
 var len = str.length;
 for (var i = 0; i < len/2; i++) {
   if (str[i] !== str[len - 1 - i]) {
       return false;
   }
 }
 return true;
}
palindrome("A man, a plan, a canal. Panama");


function keysToArray(obj) { //Return an array of all the keys in an object using a for loop. 
let arr = [];
for (let key in obj) {
arr.push(key); //Syntax to push the key, for pushing the values would be object[key];
} return arr;
}

function reverseString(str) { //Syntax using split, reverse, and join methods to reverse strings.
return str.split('').reverse().join(''); } 

//---filter method()---//


function removeDuplicates(arr) { //Return new array with original elements of array but without duplicate values//
let noDuplicates = arr.filter((value, index, arr) => { //.filter takes 3 parameters (value,index, arrayname*). The filter method loops through the array. 
    return arr.indexOf(value) === index; //indexOf will find the first occurrence of the value. Index is the current position. If its the first time seeing the value it will include in the result. 
    }); return noDuplicates; }

//---Destructuring---//

/* Destructuring in JavaScript is a way to extract values from objects or arrays and assign them to variables in a more concise and convenient way. Instead of accessing the values of an object or an array using their respective keys or indexes and assigning them to variables one by one, destructuring allows us to extract multiple values at once and assign them to variables with a single statement. Destructuring is a useful feature in JavaScript that allows us to write cleaner and more readable code. */

person = { name: 'John', age2: 30}; //Object destructuring syntax//
const { name, age2 } = person; //destructure the object with curly braces {}

console.log(name); //'John'
console.log(age2); // 30 

//---Array Destructuring---//

numbers = [1,2,3]; //Array destructuring syntax// 
const [a,b,c] = numbers; //destructure the array with square brackets []. You are assigning the values a key name. 

console.log(a); //1
console.log(b); //2
console.log(c); //3

person = { //Syntax for assigning a value to a key that has not been created//
    name2: 'John Pork',
    age3: 30
};

let { name2, age3, city = 'New York'} = person;

console.log(name2); // 'John Pork'
console.log(age3); // 30
console.log(city); // 'New York' 

//Destructuring with rest parameters//

/* Destructuring with rest parameters is a feature in JavaScript that allows you to destructure an array or object while also gathering any remaining elements into a new array or object. The ( ... ) syntax is used to denote the rest parameter, which gathers any remaining elements not already assigned to variables. */

numbers = [1,2,3,4,5];
let [first, second, ...rest] = numbers; //the rest of the elements are gathered into a new array called rest ([3, 4, 5]).

console.log(first); //Output: 1
console.log(second); //Output: 2
console.log(rest); //Output: [3,4,5]

person = { name4: 'Alice', age4: 30, occupation: 'Software Developer', location: 'New York' };
let {name4, age4, ...info} = person;

console.log(name4); //Output: Alice
console.log(age4); //Output: 30
console.log(info); // Output: { occuptation: 'Software Developer', location: 'New York' }

//Nested Destructuring//

person = { //Syntax for destructuring a nested object property//
  name5: 'Alice',
  age5: 30,
  occupation: {
    title: 'Software Developer',
    years: 5
  }
};

const { name5, age5, occupation: { title, years } } = person; //Syntax for calling the nested object

console.log(name5);  // Output: Alice
console.log(age5);   // Output: 30
console.log(title); // Output: Software Developer
console.log(years); // Output: 5

//---Spread Operator---//

/* The spread operator in JavaScript is a syntactic feature that allows us to expand an iterable object, such as an array or a string, into individual elements. It is represented by three dots ... and can be used in different contexts to perform various operations. The spread operator ( ... ) is a feature in JavaScript that allows an iterable, such as an array or a string, to be expanded into individual elements. It can be used in a variety of contexts, such as function calls, array literals, and object literals.*/

let originalArray = [1,2,3];
let copyArray = [...originalArray]; //Syntax to copy an array and assign it to a new variable with the same values. 

console.log(copyArray); // [1,2,3]

numbers = [1,2,3,4,5];
let newNumbers = [...numbers, 6,7,8]; //Syntax for spread operator to expand array into individual elements when creating new array. 

console.log(newNumbers); // Output: [1,2,3,4,5,6,7,8]

let array1 = [1,2];
let array2 = [3,4];
const concatenatedArray = [...array1, ...array2]; //Syntax for spread operator to concatenate arrays. 

console.log(concatenatedArray); // [1,2,3,4]

numbers = [1,2,3];
sum = (a,b,c) => a + b + c;
result = sum(...numbers);

console.log(result); //6 

let string = 'hello';
let chars = [...string];

console.log(chars); // ['h', 'e', 'l', 'l', 'o']

//--- Template Literals ---//

/* A template literal is a type of string literal in JavaScript that allows you to embed expressions within a string. It is defined using backticks (``) instead of single quotes (' ') or double quotes (" ").

With template literals, you can include placeholders for variables or expressions by enclosing them in ${}. When the template literal is evaluated, the expressions inside the placeholders are evaluated and the resulting values are inserted into the string. Template literals can also be used for multi-line strings. In a multi-line string, you can include line breaks and indentation without the need for escape characters. */

name1 = 'Alice';
age = 30;

const greeting = `Hello, my name is ${name1} and I am ${age} years old.`;

console.log(greeting); 
// Output: "Hello, my name is Alice and I am 30 years old."

let num1 = 10;
let num2 = 5;

sum = `The sum of ${num1} and ${num2} is ${num1 + num2}.`; //Template literal allows you to embed expressions into a str

console.log(sum); 
// Output: "The sum of 10 and 5 is 15."

function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet('Alice'));
// Output: Hello, Alice!


person = { name: 'Alice', age: 30 };

const message1 = `My name is ${person.name} and I am ${person.age} years old.`; //Syntax to embed object properties in a str using template literals 

console.log(message1);
// Output: My name is Alice and I am 30 years old.


//---Arrow Functions---//

/* Arrow functions, also known as "fat arrow functions," are a concise way to write functions in JavaScript. They were introduced in ECMAScript 6 (ES6) as an alternative syntax for writing function expressions. Arrow functions have a simpler and more compact syntax compared to traditional function expressions, making them easier to read and write.

Arrow functions also have some unique features, such as implicit returns and lexical scoping, which can make them more powerful and flexible than traditional functions in some cases. They are especially useful for writing small, one-line functions, and for passing functions as arguments to higher-order functions.

                                                (parameters) => {function body} 

(parameters) refers to the arguments that the function takes and (function body) refers to the code that the function executes.

//Arrow functions are typically used for simple functions that only require one expression. */

function addNumbers3(a,b) { //traditional function syntax
    return a + b;
}

let addNumbers1 = (a,b) => a + b; //arrow function syntax 

//---Set---//

/* Like Arrays and Objects, Sets are used to store a collection of values. A Set is an object that allows you to store unique values of any type, whether it be primitive values like strings, numbers, or booleans, or object references. Each value can only occur once in a set, so there are no duplicates. This is important in cases where you need to ensure that each value is unique, such as when working with user data or database records. Sets also allow for faster data lookup and efficient data storage. */

var set = new Set(); //syntax for creating a Set object

var set1 = new Set([1,2,3]); //Syntax for initializing a Set with an array of values

/* Set object provides several methods to add, remove, and check for values. Some common methods include: 

add(value): Adds a new value to the Set. If the value already exists, it is not added.
delete(value): Removes a value from the Set. Returns true if the value was successfully deleted, false otherwise.
has(value): Returns true if the Set contains the specified value, false otherwise.
size: Returns the number of values in the Set. */

let set2 = new Set();
set.add('apple');
set.add('banana');
set.add('orange');

console.log(set.has('apple')); //true
console.log(set.has('pear')); //false
console.log(set.size); //3

set.delete('banana');
console.log(set.size); //2



let selectedIds = new Set();

function selectId(id) {
  selectedIds.add(id);
}

function deselectId(id) {
  selectedIds.delete(id);
}

function isIdSelected(id) {
  return selectedIds.has(id);
}

// Example usage:
selectId(1);
selectId(2);
console.log(isIdSelected(1)); // true
console.log(isIdSelected(3)); // false
deselectId(1);
console.log(isIdSelected(1)); // false

//---Classes---//

/* In JavaScript, classes are a way to define objects with properties and methods. They are a syntactic sugar for the existing prototype-based inheritance model in JavaScript.

To define a class in JavaScript, we use the class keyword followed by the name of the class. Within the class, we can define properties and methods using the same syntax as object literals. */

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

/* In this example, we define a Person class with two properties (name and age) and a method (sayHello). The constructor method is a special method that gets called when a new instance of the class is created. It takes the name and age arguments and assigns them to the corresponding properties of the object. The sayHello method simply logs a message to the console using the name and age properties. */

//To create a new instance of the Person class, we us the new keyword://

person = new Person('Alice', 30);
person.sayHello(); // logs "Hello, my name is Alice and I am 30 years old."

//---Number.isInteger() function---//

/* It’s a built-in JavaScript method that checks whether a given value is an integer (a whole number, like 1, 42, or -5). */

Number.isInteger(5);       // true
Number.isInteger(5.2);     // false
Number.isInteger("5");     // false
Number.isInteger(NaN);     // false
Number.isInteger(0);       // true


function printNumbers(arr) { //Takes an arr of numbers and destructures the arr to extract the first two numbers.
const [a, b] = arr; //Syntax to destructure the array into only 2 elements. 
if (arr.length >= 2 && Number.isInteger(a) && Number.isInteger(b)) { //conditional statement with multiple && verifying length of arr, and if both elements are int.// 
    return `The first two numbers are ${a} and ${b}.`
    } else {
        return `The arguments provided are invalid.`
} 
} 

function squareNumbers(numbers) { //Function utilizing template literals on a for...of loop.
let newArr = []
for (let number of numbers) { //For...of loops are used for looping over values, especially in arrays. Use a for...in loop for Object keys. 
newArr.push(`${number} squared is ${number * number}`);
} return newArr; 
} 

function uniqueValues(arr) { //Function will remove duplicates from an array and return a new array without them. 
var set = new Set(arr); //Using the Set function, which removes duplicates but will return a Set, which is like an object but are just values and no keys.
return [...set]; //Using the spread operator it will convert the Set into an array. The Set will look like this {1,2,3,4} and with the spread operator it will return to square brackets turning into an array. 
}

function printPersonInfo(person) { //Function takes obj and destructures it to extract person's name, age, and address. Then, returns var to log a message. If any key/value pair is missing, it will return an error message. 
let {name, age, address} = person; //Destructuring object to transform values into individual variables. 
const requiredKeys = ['name', 'age', 'address'] //Makes the keys into an array. 
function isObjectComplete(person, requiredKeys) { //isObjectComplete takes in two parameters: (obj, keys). This function ensures the obj contain all the required keys and check if each key value is not undefined and not null. 
    return requiredKeys.every(key => person.hasOwnProperty(key) //Using the .every(callback) method for the requiredKeys array. key is each element from the requiredKeys array ('name', 'age', etc.). 
    // person.hasOwnProperty(key) checks whether the person object contains that key (not inherited from its prototype). Together, they check if an object has all required keys.

    && person[key] !== undefined && person[key] !== null); } //This part of the condition checks that the value for each required key actually exists (i.e., it's not undefined or null).

if (isObjectComplete(person, requiredKeys)) { //Calling the function inside the conditional to return a message. 
return `The person's name is ${name}, they are ${age} years old, and they live at ${address}.`
} else {
    return `Missing required key-value pair(s).`;
} }

let sumNumbers = (numbers) => numbers.reduce((acc, num) => acc + num, 0); //Syntax for arrow function. 

function mergeArrays(arr1, arr2){ // Syntax to merge arrays. 
let merged = [...arr1, ...arr2];
return merged; 
}

//---math.max() function---//

numbers = [5, 9, 1];
let largest = Math.max(...numbers); //Syntax using math.max in order to return which number is the largest. 
console.log(largest); // ➜ 9

function largestNumbers(...arrays) { //Spread operator used to get any amount of arrays as input
  return arrays.map(arr => Math.max(...arr)); //using the .map to return a new aray with the largest numbers. The function called is Math.max and arr is the individual array in the collection of arrays. 
}

//---Callbacks---//

/* In JavaScript, a callback is a function that is passed as an argument to another function and is executed when the first function completes its task. The purpose of using callbacks is to allow asynchronous operations, where the program can continue executing while it waits for an operation to complete.

Callbacks are commonly used to handle events, such as mouse clicks or keyboard input, or to perform asynchronous operations, such as loading data from a server or writing to a file. When the operation completes, the callback function is executed, allowing the program to continue with the next task.

Callbacks can be defined as named functions or anonymous functions. Named functions are functions that are defined with a name and can be called multiple times from different parts of the code. Anonymous functions are functions that are defined without a name and are typically used for one-time operations, such as passing a function as an argument to another function.

Callbacks are widely used in JavaScript, and they provide a flexible and powerful mechanism for handling asynchronous operations and events. However, they can also lead to callback hell, a situation where nested callbacks can become difficult to read and maintain. */

function loadUser(userId, callback) {
  // load user data from server
  let user = { id: userId, name: "John" };
  callback(user);
}

function loadPosts(user, callback) {
  // load user posts from server
  let posts = [{ id: 1, title: "Post 1" }, { id: 2, title: "Post 2" }];
  callback(user, posts);
}

function loadComments(posts, callback) {
  // load comments for posts from server
  let comments = [{ id: 1, text: "Comment 1" }, { id: 2, text: "Comment 2" }];
  callback(posts, comments);
}

function displayComments(comments) {
  console.log("Comments:", comments);
}

loadUser(1, function(user) {
  loadPosts(user, function(user, posts) {
    loadComments(posts, function(posts, comments) {
      displayComments(comments);
    });
  });
});

//---Promise---//

/*n JavaScript, a promise is an object that represents the eventual completion or failure of an asynchronous operation and its resulting value. Promises allow you to write asynchronous code that is more readable, maintainable, and less error-prone than using traditional callback-based approaches.

A promise has three states:

Pending: The initial state. The promise is neither fulfilled nor rejected.
Fulfilled: The promise has completed successfully, and the resulting value is available.
Rejected: The promise has failed, and the reason for the failure is available.
Promises have two main methods for interacting with them:

.then(): This method is used to handle a fulfilled promise. It takes a callback function as its argument, which is called with the resulting value of the fulfilled promise.
.catch(): This method is used to handle a rejected promise. It takes a callback function as its argument, which is called with the reason for the rejection. */

function loadUser(userId) {
  return new Promise(function(resolve, reject) {
    // load user data from server
    let user = { id: userId, name: "John" };
    if (typeof userId === 'number') {
      resolve(user);
    } else {
      reject('No such user!'); // will be executed via .catch below if userId is anything other than a number
    }
  });
}

function loadPosts(user) {
  return new Promise(function(resolve, reject) {
    // load user posts from server
    let posts = [{ id: 1, title: "Post 1" }, { id: 2, title: "Post 2" }];
    resolve(posts);
  });
}

function loadComments(posts) {
  return new Promise(function(resolve, reject) {
    // load comments for posts from server
    let comments = [{ id: 1, text: "Comment 1" }, { id: 2, text: "Comment 2" }];
    resolve(comments);
  });
}

function displayComments(comments) {
  console.log("Comments:", comments);
}

loadUser(1)
  .then(loadPosts)
  .then(loadComments)
  .then(displayComments)
  .catch(function(error) {
    console.error("Error:", error); // logs 'Error: No such user!' if loadUser is provided anything other than a number
  });

//---Async/Await---//

/* Async/await is a way to write asynchronous code in a more synchronous way. It is built on top of Promises, and it makes it easier to write code that looks similar to synchronous code.

Async/await is a feature in JavaScript that allows you to write asynchronous code that looks and behaves more like synchronous code.

Async functions return a Promise and allow you to use the await keyword to pause the execution of the function until a Promise is resolved or rejected. When an await expression is encountered, the function is paused and control is returned to the event loop. The event loop continues to run other JavaScript code while the async function waits for the Promise to be resolved or rejected.

Once the Promise is resolved, the value is returned to the await expression, and the async function resumes its execution. If the Promise is rejected, an error is thrown, which can be caught using a try-catch block.

By using async/await, you can write asynchronous code that is easier to read and understand, as it appears more like synchronous code. However, it's important to note that async/await is built on top of Promises, so it's important to have a good understanding of Promises before using async/await. */

async function loadUser(userId) {
  // load user data from server
  let user = { id: userId, name: "John" };
  return user;
}

async function loadPosts(user) {
  // load user posts from server
  let posts = [{ id: 1, title: "Post 1" }, { id: 2, title: "Post 2" }];
  return posts;
}

async function loadComments(posts) {
  // load comments for posts from server
  let comments = [{ id: 1, text: "Comment 1" }, { id: 2, text: "Comment 2" }];
  return comments;
}

function displayComments(comments) {
  console.log("Comments:", comments);
}

async function displayUserComments() {
  try {
    const user = await loadUser(1);
    const posts = await loadPosts(user);
    const comments = await loadComments(posts);
    displayComments(comments);
  } catch (error) {
    console.error("Error:", error);
  }
}

displayUserComments();


//---Try / Catch / Finally---//

/* In JavaScript, try-catch-finally is a feature used for error handling. It allows you to write code that attempts to execute a block of code and handle any errors that may occur during its execution.

Try-catch-finally is a control structure in JavaScript that allows you to handle errors in your code. The structure consists of three parts:

try block: This is where you place the code that might generate an error. If an error occurs in this block, it will be caught by the catch block.
catch block: This is where you handle the error that was thrown in the try block. The catch block takes an error object as a parameter, which you can use to access information about the error.
finally block: This block is optional and runs regardless of whether an error was thrown in the try block or caught in the catch block. It's typically used to clean up resources, such as closing files or network connections, that were opened in the try block. */




function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
  
async function returnValueAfterDelay(ms, name) {
  await delay(ms);
  return name;
}

async function main(name, age, delayMs) { //Syntax for an async function with await which waits until that function completes in order to execute the return statement. 
  await returnValueAfterDelay(delayMs, name);
  return `${name} is ${age} years old.`;
}

// define the callback function
const callback = function(number) { //Syntax for a function returning a boolean value if the number input is even number. 
  return number % 2 === 0;
}

// define the filterEvens function
function filterEvens(numbers, callback) { //function using the .filter method using a callback function as a parameter
  const evens = numbers.filter(callback);
  return evens;
}


function delay(ms) { //function pass an int value (ms) and returns a Promise that resolves after that amount of time. setTimeout() is used to create the delay.

return new Promise((resolve) => {
    setTimeout(() => {
        resolve("Times up!");
    }, ms);
});
}

//---Scope---//

/* Scope refers to the visibility or accessibility of variables and functions within a program. In JavaScript, there are two types of scope: global scope and local scope. Global scope refers to variables and functions that are accessible throughout the entire program, while local scope refers to variables and functions that are accessible only within a specific function or block of code.

In addition, JavaScript has a feature called "lexical scoping", which means that the scope of a variable is determined by its location in the source code. This means that a variable declared in an outer function can be accessed by an inner function, but not vice versa.

Understanding scopes is important in JavaScript programming because it helps prevent naming collisions and unexpected behavior caused by accessing variables and functions from the wrong scope. */

//---Hoisting---//

/* Hoisting, on the other hand, is a behavior in JavaScript where variable and function declarations are moved to the top of their respective scopes before the code is executed. This means that you can access a variable or function before it has been declared, as long as it is declared somewhere in the same scope. It's important to note that only variable and function declarations are hoisted, not their assignments or initializations. */

//---Rounding methods in JS---//

function calculateSphereVolume(radius) { 
let math = (4/3) * PI * radius **3;
let rounded = math.toFixed(2); //Used the .toFixed(decimal places) returning the value rounded but in string form 
return parseFloat(rounded); //Used the parseFloat(var) method to convert into an int
}

//---Paradigms---//

/* A programming paradigm is a fundamental style or approach to writing computer programs that reflects a particular way of thinking about and solving problems. It is a set of principles, concepts, and techniques that guide the design, implementation, and organization of software systems.

Each programming paradigm has its own unique characteristics and benefits, as well as limitations and trade-offs. For example, procedural programming focuses on breaking down a problem into smaller steps and using functions to solve them, while object-oriented programming emphasizes encapsulating data and behavior within objects that interact with each other. */

//Imperative Programming//

/* This paradigm is based on the concept of giving the computer a set of instructions to follow in a specific order. The focus is on describing how the program should achieve its goals. */

//Functional Programming//

/* This paradigm is based on the use of functions that take inputs and produce outputs without changing any state or variables. The focus is on describing what the program should achieve, rather than how. */

//Object Oriented Programming (OOP)//

/* This paradigm is based on the use of objects that contain data and methods to manipulate that data. The focus is on organizing the code around the objects in the problem domain.

Object-oriented programming (OOP) in JavaScript involves creating objects that have properties and methods, which can then be used to interact with and modify the object.*/

//Procedural programming//

/* This paradigm is similar to imperative programming, but with a focus on dividing the program into reusable procedures or functions.

Procedural programming in JavaScript involves writing a sequence of procedures, or functions, that operate on data.*/

//Declarative Programming//

/* Declarative programming in JavaScript involves expressing what you want to accomplish rather than how to accomplish it. 

//Event-Driven Programming//

Event-driven programming in JavaScript involves responding to user actions or system events.

//Parallel Programming//

Parallel programming in JavaScript involves executing multiple tasks or processes simultaneously to improve performance. */