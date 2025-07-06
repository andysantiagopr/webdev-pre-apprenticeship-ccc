let fruits = ["apple", "banana", "orange"]; //An array of strings. Arrays are collections of values stored inside []. Each individual value is 
//referred to as an element. 

let person = {name: "Bob", age: 25, isStudent: true}; //Objects: They consist of key-value pairs.The key serves as a label for a specific piece of information, 
// always positioned on the left side of a colon :, while the value, which can be of any data type, resides on the right side. Multiple key-value pairs are separated 
// by commas.

//Primitive Data Types: These are the basic building blocks of data. They're simple and include numbers, strings, booleans, null, and undefined. 
// They're called primitive because they represent a single, indivisible value.

//Complex Data Types: These are made up of multiple values and can hold more complex structures. Arrays and objects fall under this category. 
// They're called complex because they can contain multiple pieces of information.

//---Modulus Operator---//

let totalCandies =23;
let candiesPerChild = 5;

console.log(totalCandies % candiesPerChild); //The modulus operator (%)  finds the leftover when you divide two numbers. 
//It's a way to figure out what's "left over" after you've evenly divided one number by another.

//---Functions---//

function greet(name) { //Create function. Naming function "greet". The parameter is name, which is a placeholder to indicate what goes there. 
    console.log("Hello, " + name + "!"); //The function prints a greeting with the name on the console. 
}

greet("Angel"); //Calling out the function. 

function sum(num) {
  // Write your code below
      num += 2;
      return num;
}

// The argument 4 is passed to the 'sum' function. The returned integer is assigned to result
let result = sum(2);

// Logging result to the console reveals 6
console.log(result);

//---Nested Functions---//

function growSumByFive(num1, num2) {
  let sum = num1 + num2;
    
  function multiplyByFive(num3){
    return num3 * 5;
  }
  // Invoke your inner function, multiplyByFive, below by passing to it the sum of num1 and num2 and return that value
  return multiplyByFive(sum); //Just simply do return with the sum as the argument. 
}

function numbersOperations(number) {
  const subtracted = number - 5;

  function multiplyBy2(number) {
    return number * 2; //Here is the first return from the inner function. 
  }
  
  return multiplyBy2(subtracted); //Here is the second return from the outer function. Remember to do a single line of this. Should return the whole thing.
}

function greeting(message) {
  function retrieveUser(){
    return 'Alex';
  }
    return message + " " + retrieveUser();
}

//---Conditional Statements---//

let temperature = 25; 

if (temperature > 30) { //If this condition is true the next message is printed out//
    console.log("It's hot outside!");
}

temperature = 25;
if (temperature > 30) {
    console.log("It's hot outside!");
} else {
    console.log("It's not too hot.");
}

if (temperature > 30) { //The code will execute the first condition met, if the first and second do not meet, then it will execute the else condition. 
    console.log("It's hot outside!");
} else if (temperature > 20) {
    console.log("It's warm outside!");
} else {
    console.log("It's cool outside."); 
}

function lessThan(num1, num2) {
  // Write your code below
    if (num1 < num2)
        return true; 
    else 
        return false;
} //In JavaScript, you can omit the {} braces if the block contains only one statement.


function positiveNegativeZero(number) {

  if (number > 0) {
     return 'Positive';

  } else if (number < 0) {
     return 'Negative';

} else {
  return 'Zero';
} }

//positiveNegativeZero(10); // Returns 'Positive'
//positiveNegativeZero(-12); // Returns 'Negative'
//positiveNegativeZero(0); // Returns 'Zero'

function comparison(num1, num2) {
  // Write your code below
    if (num1 > num2)
        return "Greater Than";
       else if (num1 < num2) {
            return "Less Than";
    } else {
        return "Equal To"
} }

//---Switch Statements---//

//Switch statements are a neat way to handle multiple possibilities and make your code more organized and readable. 
//They're like a menu that helps your program choose the right action based on a specific condition or value.

let dayOfWeek = "Monday"; 

switch (dayOfWeek) {
    case "Monday":
        console.log("It's the start of the workweek.");
        break;
    case "Friday":
        console.log("It's almost the weekend!");
        break;
    default:
        console.log("It's a regular day.");
}

function getDayOfTheWeek(dayNumber) { //How it would look like within a function
    let day;
    switch (dayNumber) {
        case 1:
            day = 'Sunday';
            break;
        case 2:
            day = 'Monday'; 
            break;
        case 3:
            day = 'Tuesday'; 
            break;
        case 4:
            day = 'Wednesday'; 
            break;
        case 5:
            day = 'Thursday'; 
            break;
        case 6:
            day = 'Friday'; 
            break;
        case 7:
            day = 'Saturday'; 
            break;
        default:
            day = 'Invalid day'; 
            break;
    } 
    return day;
}

function getAnimalSound(animal) {
    let sound;
  // Add your code below
    switch(animal) {
        case 'dog':
            sound = 'Woof woof!'
            break;
        case 'cat':
            sound = 'Meow!';
            break;
        case 'cow':
            sound = 'Moo!';
            break;
        case 'duck':
            sound = 'Quack!';
            break;
        case 'horse':
            sound = 'Neigh!';
            break;
        default:
            sound = 'Unknown animal sound.'
            break;
    }
  return sound;
} 

//---Comparison Operators---//

//Comparison operators include: equality (==), strict equality (===), inequality (!=), 
//less than (<)*, *less than or equal (<=)*, *greater than (>) and greater than or equal (>=).

//The equality (==) operator in programming is used to compare two values or expressions to see if they are equal to each other. 
// It checks whether the values match without considering their data types. If the values are the same, it returns true; otherwise, it returns false.

let userAge = 15; 

if (userAge == 18) { //The == operator will check if the two values are equal, regardless of data type. 
    console.log("You are exactly 18 years old!");
} else {
    console.log("You are not exactly 18 years old.");
}

//The strict equality (===) operator in programming is like a detective that not only checks if two values are equal but also ensures that they are of the same data type. 
//It's more precise than the regular equality operator (==) because it requires both value and type to match.

let userAge1 = "15";

if (userAge === 15) {
    console.log("You are exactly 15 years old!");
} else {
    console.log("Your age doesn't match exactly.")
}

function equality(arg1, arg2) {
  // write your code here
    if (arg1 === arg2) {
        return "strictly equal";
    } else if (arg1 == arg2) { //Remember its else if, not if else (ELIF)
        return "equal"; 
    } else {
        return "not equal";
    }
}  

function isEven(num) { 
  //Write your code here
  if(num % 2 === 0){  //This is the syntax for checking if numbers are even or odd. See it as this 5 % 2 === 1; basically 5 divided by 2 === 1 remainder.
    return true;
  } else {
    return false;
  }
}

//The inequality (!=) operator in programming is like a detective that checks if two values or expressions are not equal to each other. 
//It not only checks for inequality in value but also in data type. 
//If the values are not the same or if their data types are different, it returns true; otherwise, it returns false.

let userAge2 = "15";

if (userAge2 !== 18) {
    console.log("Your age is not exactly 18 years old"); //It will return true because the variable is a str and also not 18. 
} else {
    console.log("You are exactly 18 years old!");
}

//The less than (<) operator in programming is like a comparison tool that checks if one value is smaller than another. 
// It returns true if the value on the left is indeed less than the value on the right, and false otherwise.

//Less than or equal operator//

let userAge3 = 18;

if (userAge3 <= 18) { //Syntax for less than or equal operator. 
    console.log("You are 18 years old or younger");
} else {
    console.log("You are older than 18 years old.");
}

//!= only checks not equal to in value, not data type. !== Checks both. //

//---Logical Operators---//

//Logical operators in programming are tools that allow you to combine and manipulate conditions to make more complex decisions in your code.
//&&, ||, ! are the logical operators.

let age = 20;
let hasLicense = true;

if (age >= 18 && hasLicense) { //Syntax example for an && logical operator in a conditional statement. 
    console.log("You are eligible to drive.");
} else {
    console.log("You are not eligible to drive");
}

function checkIfEqualAndAboveFive(num1, num2) { //Example inside a function. 
  // Add code below
    if (num1 == num2 && num1 > 5) {
        return true;
    } else {
        return false;
    }
}

//Logical OR Operator

let isWeekday = false;
let isHoliday = true;

if (isWeekday || isHoliday) { //Syntax for OR operator//
    console.log("It's time to relax!");
} else {
    console.log("Back to work.");
}

//The logical NOT (!) operator in programming is a unary operator, which means it operates on a single operand (condition). Its primary function is to negate or reverse the value of a condition. 
//It transforms true into false and false into true. It's like saying, "Give me the opposite of this condition."

let isSunny = true;

if(!isSunny) { //Syntax for ! operator//
    console.log("It's not sunny today.");
} else {
    console.log("It's sunny outside!");
}

function useNotOperator(num1, num2) {
      // Add parameters to the function to check if the conditional statement (num1 equals num2) is false
      if (!(num1 == num2)) { //Syntax for using ! operator with two values
        return true;
      } else {
        return false;
      }
    }

function isNotEmptyString(formData) { //syntax for verifying empty strings with != operator//
   if(formData != ""){
       return true;
   } else {
       return false;
   }
}

//---Typeof Operator---//

let userName = "Alice";
console.log(typeof userName); //Outputs "string"//

let userAge4 = 25;
console.log(typeof userAge4); //Outputs "number"//

//---Loops and Jump Statements---//

// For...in and for...of loops handle object properties and array elements. Jump statements like continue skip an iteration, while break exits a loop early.//

//For Loop: The for loop is commonly used when you know in advance how many times you want to repeat a set of instructions. 

for (let i = 0; i < 5; i++) {
    console.log(i); //Prints numbers from 0 to 4
}

for (let timesWritten = 0; timesWritten <5; timesWritten++) {
    console.log("Your Name");
}

function forLoop(n) {
    for (let i3 = 0; i3 < 5; i3++){
        n = n + 1;
    }
    return n;
}

function forLoopTwo(startingPoint) {
    for(let i = 0; i < 5; i++) {
        startingPoint += 2;
    }
    return startingPoint;
}

function forLoop4() {
    let result = 0;
    for(let i = 0; i < 5; i++) {
        result += 4;
    }
    return result;
}

//While loop: The while loop is used when you don't know in advance how many times you need to repeat a task but have a condition that must be met. 

let o = 0;
while (o < 5) {
    console.log(o); //Prints numbers from 0 to 4
    o++;
}

let cookiesInJar = 10;
while (cookiesInJar > 0) {
    //Eat a cookie.
    cookiesInJar--;
}

function doubleUntilThreshold(startNum, threshold) {
    let count = 0;
    while (count < threshold) {
        startNum *= 2;
        count++;
    }
    return startNum;
}

function halves(begin, limit) { 
  // enter your code here
  count = 0;
  while (count < limit) {
    begin /= 2;
    count ++;
  } return begin; 
}

function reduceByFive(startingNum, limit){ 
    count = 0
    while(startingNum > limit) { //You want to keep the while loop running as long as statnum is more than limit.
        if((startingNum - 5) >= limit) { //You want to reduce by five as long as it does not go lower than limit. 
            startingNum -= 5; 
            count++ //Recording the count of times it reduces by 5. 
        } else { 
            break; //The loop will break when the code detects reducing by 5 will be lower than the limit
        } 
    } 
    return count;  //returning the count once it breaks the loop. 
}

function reduceByFive(startingNum, limit){ //Cleaner option
    count = 0;
    while (startingNum - 5 >= limit) {
        startingNum -= 5;
        count++;
    }
    return count;
}

function subtractTen(initial, limit) { 
  // Your code goes here
    count = 0;
    while (initial > limit) {
        if ((initial - 10) >= limit) {
            initial -= 10;
            count++;
        } else {
            break;
        }
    } return count;
}

//Do-While Loop: The do-while loop is similar to the while loop but ensures that the code block is executed at least once before checking the condition.

let u = 0;
do {
    console.log(u); //Prints numbers from 0 to 4
    u++;
}   while (u < 5);

let practiceCount = 0;

function incrementNumber(number) {
    do {
        number++;
    } while (number < 10);
    return number;
}

function doWhileLoop(x) {
  count = 0;
  do {
    count++;
    x--;
  } while (x > 0);
  return count;
}

function doWhile3(count) {
    // Your code here
    count = 20;
    do {
        count -= 2;
    } while (count <= 0);
    return count;
}

function doWhile3(count) {
    // Your code here
    do {
        count -= 2;
    } while (count > 0);
    return count;
}

function doWhile(n) {
	// Your code here
    do {
        n /= 2;
    } while (n > 1);
    return n;
}


function doWhileFive(num) {
 do {
 	num = num - 5;
 } while (num > 0);
 return num;
}


//Implement a do-while loop that continues until a condition is met, 
// if a counter variable goes beyond 30, break the loop and return the counter variable.

function doWhileLoop() {
    count = 0;
    do {
        count++;
        if (count > 30) {
            break;
        }
    } while (true);
    return count;
}



//For-In Loop (Object Iteration): The for-in loop is used to iterate over the properties of an object.

const person1 = { name: "Alice", age: 30};
for (let key in person1) {
    console.log(key); // Prints "name" and "age"
}

//For-Of Loop (Array and Iterable Iteration): The for-of loop is used to iterate over the elements of an array or any iterable object.

const colors = ["red", "green", "blue"];
for (let color of colors) {
    console.log(color); //Prints "red", "green", and "blue"
}

//Jump Statements: The continue and break statements in JavaScript are referred to as jump statements and are used to control the flow within loops, allowing you to modify the standard behavior of loops. 
// They are particularly useful when you need to skip certain iterations or prematurely exit a loop based on specific conditions. 

//Continue Statement: The continue statement is used to skip the current iteration of a loop and move on to the next iteration. 
// It's typically used when you want to avoid executing some code within a loop but continue with the next iteration.

for (let i1 = 0; i1 < 5; i1++) {
    if (i1 === 2) {
        continue; // Skip iteration 2
    }
    console.log(i1);
}

for (let i = 1; i <= 10; i++) {
    if (i === 5) { 
        continue;
    }
    console.log(i); //It should print 1,2,3,4,6,7,8,9,10.
}

function addAllExceptFive() {
  // Write your code below
  let sum = 0;
  for (let i = 0; i <=10; i++) {
    if (i == 5){
      continue;
    } else {
     sum += i;
    }
  }
  return sum;
}

function decrementFrom10() {
    let decrement = 0;
    for (let i = 10; i >= 1; i--){ //This is counting it backwards how the parameters will look like. 
        if (i == 7){
            continue;
        } else {
            decrement += i;
        }
    } return decrement;
}

//Break Statement: used to exit a loop prematurely, even before the loop's condition is met. It's useful when you want to terminate a loop based on certain conditions.

for (let i2 = 0; i2 < 5; i2++) {
    if (i2 === 3) {
        break; //Exit the loop when i2 equals 3
    }
    console.log(i2);
}

let friendsFound = 0;

    //while (friendsFound < 3) {

    //    if (foundFriend()) {
    //        friendsFound++;
    //        shout("I found you!")
//
  //          if (friendsFount === 3) {
    //            break;
    //        }
   //     }
   // }

function breakStatement(x) {
      // Write your code below
    while (true)
    {
      x++;
      if(x > 10)
      {
          break;
      }
    }
    return x;
}

function breakStatements() {
    let total = 1;
    for(let i = 1; i <= 20; i++) {
        if(i >= 15) {
            break;
        }
        total++;
    }
    return total;
}

function incrementVariable() {
    let i = 0;
	// Place your code here
    while (true) {
        i++;
        if (i > 50) {
        break;
    }  } return i; }

//Loop utilizing modulus operator//

//Write a JavaScript function that takes a positive integer that is divisible by 5, x, as input and calculates the sum of all numbers that are multiples of 5 from x down to 0. 
// However, if a number is not a multiple of 5, skip it using the continue statement.

function sumMultiplesOfFive(x) {
  let sum = 0;

  // Start a loop from x down to 0
  for (let i = x; i >= 0; i--) {
    // Check if the current number is not a multiple of 5
    if (i % 5 !== 0) {
      // Use 'continue' to skip this number
      continue;
    }
    
    // Add the current number to the sum
    sum += i;
  }

  return sum;
}

function skipSeventy() {
let sum = 0;
for (let i = 50; i <= 100; i++) {
  if (i % 10 !== 0) {
    continue;
  } else if (i == 70) {
    continue;
  } else {
    sum += i;
  } 
} return sum;
}

function skipSeventy() {
  let sum = 0;
  for (let i = 50; i <= 100; i += 10) { //Simplified with the += 10 (lol did not know I could do that!)
    if (i === 70) {
      continue;
    }
    sum += i;
  }
  return sum;
}

//---Arrays---//

//Creating an array using array literal notation.

let numbers = [1,2,3,4,5];

let fruits1 = ["apple","banana", "cherry"];

let flags = [true, false, true, true];

//Declaring and assigning an array of objects using an array literal. 
let people = [
    {name: "Alice", age: 25},
    {name: "Bob", age: 30},
    {name: "Charlie", age: 22}
];

//Declaring and assigning an array of objects using an array literal.
let matrix =  [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

function createOddArray() {
  //declare your array below this line    
    let array = [];
    for (let i = 0; i <= 10; i++) { 
        if (i % 2 !== 0) {// This is the syntax for odd numbers. 
            array.push(i);
        }
  
} return array; } 

function createOddArray(){ 
  let arr = [1, 3, 5, 7, 9]; //Very basic LOL. 
  
  return arr; 
}

function stringArray() {
  //create an array of strings below
    let daysOfWeek= ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];  
    return daysOfWeek;  } 

function generateSubarrays() {
      // Write your code here
    let arrayOfArrays = [

    [1,2,3,4,5],
    [1,2,3,4,5],
    [1,2,3,4,5]

    ]; return arrayOfArrays;

}

let students = [{name: 'John', age: 20, gradeLevel: 'Sophomore'}, 
    {name: 'Jane', age: 19, gradeLevel: 'Freshman'}, 
    {name: 'Jim', age: 21, gradeLevel: 'Junior'}, 
    {name: 'Jill', age: 22, gradeLevel: 'Senior'}];

//Array constructors//

let numbers1 = new Array(1,2,3,4,5);

fruits = new Array("apple", "banana", "cherry");

let emptyArray = new Array();

let arrayWithLength = new Array(3); //Creates an empty array with length of 3. 

function createColorArray() { 
  // Your code goes here
    let array = new Array("Blue", "Red", "Green", "Yellow");
    return array;
}

//Given an array of integers, arr, and an integer n, return the nth element in the array using bracket notation. 
// For example, if n is equal to 6 you would return the 6th element.
function nthElement(arr, n){ //
  return arr[n - 1];
}

//Modifying Arrays//

fruits = ["apple", "banana", "cherry"];

fruits[1] = "grape";
fruits[3] = "orange";
fruits[5] = "pear"; //When you add an element to a short array, it will create undefined elements in between old elements and new element. 

console.log(fruits); //The fifth item will appear as undefined. 

//arr[0] = 'A';
//arr[arr.length - 1] = 'B'; //Syntax to replace the last element in an array. 

//    function changeArray(arr) 
//    // Add your code below
//    arr[1] = "Cool";
//    return arr;
//    }

//Array Length//

let numberOfFruits = fruits.length; //Syntax for getting lenght of an array. 

console.log(numberOfFruits);

//Push() and Pop() methods//

fruits.push("cherry"); //Adds new element to the end of the array. 
console.log(fruits); 

let removedFruit = fruits.pop();
console.log(removedFruit);
console.log(fruits);

/* Syntax for using pop () and push () methods. 

function pop(arr) {
      //pop the last element from the array and return the array
      return arr.pop();
}
function push(arr, element) {
      //push an additional given variable to a given array and return it.
      return arr.push(element);
} 

*/

/* Given an array, do the following: If you are given just an array, pop the last element from the array. 
If you are given an array and an element, push the element onto the end of the array. Return the array.

function popAndPush(arr, el) {
    //Write your code here
    if(el != undefined) {
        arr.push(el);
        return arr;
    } else {
        arr.pop(el);
        return arr;
    }


}

Given an array, do the following: If you are given just an array, pop the last element from the array.
 If you are given an array and an element, push the element onto the end of the array. Return the array.

function popAndPush(arr, el) {
    if(el !== undefined) {
        arr.push(el);
    }
    else {
        arr.pop(arr.length - 1);
    }
    return arr;
} */

//Join method//

fruits = ["apple", "banana", "cherry", "date"];

let joinedString = fruits.join(", ");
console.log(joinedString); //Output: "apple, banana, cherry, date"

/* Syntax for turning arrays into string with join method.  


function join(arr) { 
  return arr.join(''); 
} */

//---For of Loops---//

fruits = ["apple", "banana", "cherry"];

//Iterate over each element in the array.
for (let fruit of fruits) {
    console.log(fruit);
}

//One of the key advantages of for...of loops is that they are more concise and easier to read compared to traditional for loops. 
// They automatically handle the iteration and don't require you to manage index variables manually. It's a great choice when you need to work with the values themselves rather than their positions in the array.

function doubleNumbers(numbers) { //for of loop syntax for an array in which each element is doubled and placed into new array.
 	let doubledNumbers = []; 
 	for(let number of numbers) { 
 	doubledNumbers.push(number * 2); //Used the push method to add the new elements into the array. Every element will be multiplied by 2. 
 	} 
 	return doubledNumbers; 
 }

 function getAllUpperCased(arr) { //My code
    let allUpperCased = [];
    for (let el of arr) {
    let upperCased = el.toUpperCase();
    allUpperCased.push(upperCased);
    } return allUpperCased; 
}

function getAllUpperCased(arr) { //Cleaner code for upper casing elements in a for of loop. 
    let resultArr = []; 
    for (let word of arr) {
        resultArr.push(word.toUpperCase());
    }
    return resultArr;
}

//---Objects---//

/* Objects are a fundamental data structure in JavaScript that allow you to store and organize data in a flexible and structured way. 
 They are used to represent real-world entities, concepts, or data collections in a program. 
 Objects are like containers that can hold various pieces of information, known as properties and methods.

Properties: Think of properties as attributes or characteristics of an object. These can be pieces of data, such as names, colors, or numbers. 
Properties are stored as key-value pairs, where the key (also known as a property name) is a string that identifies the property, and the value can be of any data type,
including numbers, strings, other objects, or even functions.

Methods: Methods are like actions or behaviors that an object can perform. They are functions that are associated with an object and can be called to perform some task. 
Methods are also stored as key-value pairs, where the key is the method name, and the value is a function.*/

    person = { //person variable is created and assigns an object.
    firstName: "John", //"firstName" is the property name, the value "John".
    lastName: "Doe",
    age: 30,
    greet: function () { //greet is a method. 
        console.log("Hello there!");
    },
};

//key-value pairs are like a set of instructions that tell us what information (the value) is associated with a particular description (the key). 

//Accessing values from the keys using dot notation or bracket notation.

console.log(person.firstName); //Output John
console.log(person["lastName"]); //Output Doe

//Object Literal Notation//

/*Object literal notation is a way to create and define objects in JavaScript by directly specifying their properties and values within curly braces {}. 
This notation is a concise and straightforward way to create objects, especially when you want to define them on the fly or with a limited set of properties. */

person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    isStudent: false
};

//Object Constructor//

person = new Object();
person.firstName = "John";
person.lastName = "Pork";

console.log(person.firstName); //Output: "John"
console.log(person.lastName);  //Output: "Pork"

//Property Accessor (Dot Notation)//

/* Property accessor (dot notation) is another way to reference a value in an object. 
It's typically used when the property name is known and is a valid JavaScript identifier (i.e., it doesn't contain spaces or special characters).
Dot notation is the preferred way to access object properties when the property names are known in advance and are valid identifiers.*/

person = {
    firstName: 'John',
    lastName: 'Pork',
    age: 30
};

firstName = person.firstName;
lastName = person.lastName;
age = person.age; 

console.log(firstName); //Output: 'John'
console.log(lastName); //Output: 'Pork'
console.log(age); //Output: 30

function returnName (obj) { //Function example to return name property using dot notation. 
    obj = {
        name: 'John',
        age: 30,
        numID: 0
    }; 
    name = obj.name;
    return name;
}

function getSalary(job) { 
    return job.salary; 
}

//Property Accessor (Bracket Notation)//

/* Property accessor (bracket notation) in JavaScript allows you to reference a value in an object using square brackets and a string that represents the property name. 
This notation is particularly useful when you have property names that contain special characters, spaces, or when the property name is stored in a variable.*/ 

firstName = person['firstName'];
console.log(firstName); // Output: 'John'

propName = 'lastName'; //Syntax for using bracket notation with a property as a variable.
const value = person[propName];
console.log(value);  



person = { //Bracket Notation works best with invalid JS identifiers as shown here using a space as a property name. 
    'first name': 'John',
    'last name': 'Pork'
};

const propWithSpace = 'last name';
const lastName1 = person[propWithSpace];

console.log(lastName1); // Output: "Pork"


//Modifying Objects with dot and bracket notations//

person = {
    firstName: 'Brandon',
    lastName: 'Collins',
    age: 30
}

person.age = 35; //Modifying object with dot notation
console.log(person.age); //Output 35; 

person['age'] = 29; //Modifying object with bracket notation
console.log(person['age']); //Output 29;

function changeColor(box) {box.color = 'blue'; return box;}

function decrementAge(employee) {
employee['age'] -= 1;
return employee;
}

function increasePrice(product) { //Increase price by 10% Syntax thingy. 
product['price'] += (product['price'] * .10);
return product;
} 

//Delete Operator//

/* The delete operator in JavaScript is used to remove a property from an object. 
It allows you to delete a specific property, which can be useful when you want to remove unwanted or unnecessary data from an object. */

person = {
    firstName: 'John',
    lastName: 'Pork',
    age: 30
};

delete person.age; //syntax for delete
console.log(person); //Output: {firstName: 'John', lastName: 'Pork'}

/* However, it's important to note that the delete operator has some limitations:

It only works for object properties. You cannot delete variables or function names using delete.

It doesn't affect variables or functions declared with var, let, or const.

It doesn't change the object's length if it's an array.

It doesn't remove properties that are part of the object's prototype chain.

It returns true if the property is successfully deleted and false if it fails (e.g., if the property is non-configurable).

Use the delete operator with caution, as it can lead to unexpected behavior in some cases. 
It's typically used for specific scenarios where you need to remove a property from an object dynamically. */

function deleteNumID(person) {
  // delete the numID property below
  return delete person.numID; 
};

//---Object Methods---//

/* Object methods in JavaScript are functions that are defined as properties of an object. These functions can be called on the object they belong to, allowing you to perform actions or operations related to that object. 
Object methods are a powerful way to encapsulate functionality within an object, making your code more organized and easier to maintain. */

//Defining object methods//

person = {
    firstName: 'John',
    lastName: 'Pork',
    getFullName: function () { //Object method syntax to return full name of the person. 
        return person.firstName + ' ' + person.lastName; //Syntax to access the object properties. 
    }
};

//Calling Object Methods//

fullName = person.getFullName();
console.log(fullName); //Output: "John Pork"

//Benefits of Object Methods//

/* Encapsulation: Object methods allow you to encapsulate behavior related to an object, promoting code organization and reusability.

Modularity: You can separate different functionalities into methods, making your code easier to read and maintain.

Context Awareness: Object methods can access and modify the object's properties directly, making them context-aware and capable of manipulating their own data.

Object methods are widely used in JavaScript to create objects with behaviors and actions associated with them, making them a fundamental part of object-oriented programming in the language.*/


person = {
   name: "John",
   age: 25,
   languages: ['JavaScript', 'C++'],
   greet: function() {
    return "Hi, my name is" + " " + person.name + ".";  
    }
};

let developer = {
    name: 'Ana',
sayMyName: function () {
return `Hello, I am ${developer.name}.`; //Doing it with template variables
} };

let sumObject = {
	// Your code here 
    sum: function(num1, num2) {
        return num1 + num2;
    }
};

//For...In Loop//

/* The for...in loop in JavaScript is a way to iterate over the properties of an object.
 It's particularly useful when you want to loop through and perform some action on each property of an object. */

person4 = { //Syntax for looping properties in object
    firstName: 'John',
    lastName: 'Pork',
    age: 36
};

for (const key in person4) {
    console.log(key + ': ' + person4[key]);
}; 

/* t's mainly used for iterating over the properties of objects, not for arrays. For arrays, you typically use a for...of loop or a traditional for loop.

Remember that the order of iteration in a for...in loop is not guaranteed to be the same as the order in which properties were added to the object.*/

    obj = {
      key1: 'value1',
      key2: 'value2',
      key3: 'value3'
    };


function returnValues(obj) { //Syntax for for... in loop using the push method. //
    let arr = [];
    for (let key in obj) {
    arr.push(obj[key]);
    } return arr; 
};

function countKeys(obj) {
let count = 0;
for (let key in obj) { //The for in loop is already looping and verifying if there are keys in the object so no need for if statement, it will loop and determine if its true, returning an operation if its still true. 
    count += 1;
} return count;
}

/* .hasOwnProperty(key) means:
“Hey object, do you really own this key? Or is it from your prototype?”*/

function countKeys(obj) {
    let counter = 0;
    for (let key in obj)
    {
        if (obj.hasOwnProperty(key))
        counter++;
    }
    return counter;
}

function accumulateProperties(obj) {
let total = 0;
for (let key in obj) {
    total += obj[key];
} return total;
} 

//---JS Libraries and Frameworks---//

/* Definition: A JavaScript library is a collection of pre-written JavaScript code that provides reusable functions and utilities for common tasks. These libraries simplify coding by offering ready-made solutions for specific functionalities.

Examples: jQuery, Lodash, Axios.

Use Case: If you need to manipulate the DOM (Document Object Model), make AJAX requests, or handle animations, libraries like jQuery can significantly reduce the amount of code you need to write.

Definition: A JavaScript framework is a more comprehensive, organized, and opinionated tool that provides a structured foundation for building web applications. Frameworks typically enforce a specific architecture and offer a set of tools, patterns, and best practices.

Examples: React, Angular, Vue.js.

Use Case: Frameworks are ideal for building complex single-page applications (SPAs) or large-scale projects. They provide a clear structure, a component-based architecture, and often include features for routing, state management, and data binding.

In summary, libraries and frameworks are valuable assets for JavaScript developers. Libraries are like toolboxes with specialized tools, while frameworks are like blueprints for building entire houses. 
The choice between them depends on the complexity of your project and your development preferences. */

//---Debugging---//

//Debugger Statement//

//Definition: A debugger statement is a code breakpoint that you can place in your JavaScript code. 
//When the browser encounters it, it pauses execution, allowing you to inspect variables and step through your code.

//Usage: You insert debugger; into your code where you suspect issues. 
//When the code reaches this point, it stops, and you can use the browser's developer tools to analyze the program's state.

let x = 10;
debugger; //Execution pauses here.
console.log(x);

//You can open the developer tools by pressing F12 or Ctrl+Shift+I (Windows/Linux) or Cmd+Option+I (macOS) in your browser. 
//Use the "Console" tab for console.log() output and the "Sources" tab for debugging with breakpoints.

function debugging2() { //Debugging exercise with for loop
    for(let i = 0; i < 6; i++) {
        if(i === 5) {
        	return "Reached 5";
        }
    }
    return "Still Broken";
}

function calculateFactorial(n) {
  let result = 1;

  for (let i = n; i >= 1; i--) {
    result *= i;
  }

  return result;
};

function countKeys(obj) { //Utilizing the object.keys method you can also attach multiple methods to the code at once. 
  // Write your code below
  return Object.keys(obj).length;
}

function getObjectValues(obj) { //Utilizing the Object.values() method.
return Object.values(obj);
}