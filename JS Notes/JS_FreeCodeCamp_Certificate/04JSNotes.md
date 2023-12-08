# Debugging
Debugging is the process of going through your code, finding any issues, and fixing them.

Issues in code generally come in three forms: syntax errors that prevent your program from running, runtime errors where your code has unexpected behavior, or logical errors where your code doesn't do what you intended.

In this course, you'll learn how to use the JavaScript console to debug programs and prevent common issues before they happen.





## TOPICS


Use the JavaScript Console to Check the Value of a Variable

Understanding the Differences between the freeCodeCamp and Browser Console

Use typeof to Check the Type of a Variable

Catch Misspelled Variable and Function Names

Catch Unclosed Parentheses, Brackets, Braces and Quotes

Catch Mixed Usage of Single and Double Quotes

Catch Use of Assignment Operator Instead of Equality Operator

Catch Missing Open and Closing Parenthesis After a Function Call

Catch Arguments Passed in the Wrong Order When Calling a Function

Catch Off By One Errors When Using Indexing

Use Caution When Reinitializing Variables Inside a Loop

Prevent Infinite Loops with a Valid Terminal Condition
















### Use the JavaScript Console to Check the Value of a Variable
Both Chrome and Firefox have excellent JavaScript consoles, also known as DevTools, for debugging your JavaScript.

You can find Developer tools in your Chrome's menu or Web Console in Firefox's menu. If you're using a different browser, or a mobile phone, we strongly recommend switching to desktop Firefox or Chrome.

The console.log() method, which "prints" the output of what's within its parentheses to the console, will likely be the most helpful debugging tool. Placing it at strategic points in your code can show you the intermediate values of variables. It's good practice to have an idea of what the output should be before looking at what it is. Having check points to see the status of your calculations throughout your code will help narrow down where the problem is.

Here's an example to print the string Hello world! to the console:
```javascript
console.log('Hello world!');
Use the console.log() method to print the value of the variable a where noted in the code.
let a = 5;
let b = 1;
a++;
// Only change code below this line
let sumAB = a + b;
console.log(a);







console.clear()

```


















### Use typeof to Check the Type of a Variable
You can use typeof to check the data structure, or type, of a variable. This is useful in debugging when working with multiple data types. If you think you're adding two numbers, but one is actually a string, the results can be unexpected. Type errors can lurk in calculations or function calls. Be careful especially when you're accessing and working with external data in the form of a JavaScript Object Notation (JSON) object.

Here are some examples using typeof:
```javascript
console.log(typeof "");
console.log(typeof 0);
console.log(typeof []);
console.log(typeof {});
```
In order, the console will display the strings string, number, object, and object.

JavaScript recognizes seven primitive (immutable) data types: Boolean, Null, Undefined, Number, String, Symbol (new with ES6), and BigInt (new with ES2020), and one type for mutable items: Object. Note that in JavaScript, arrays are technically a type of object.

Add two console.log() statements to check the typeof each of the two variables seven and three in the code.



