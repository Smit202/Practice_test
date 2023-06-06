# Javascript Practice Test
 
## Table of contents

- [Question-1](#Question-1)
  - [Practical_Task-1](#Practical_Task-1)
- [Question-2](#Question-2)
- [Question-3](#Question-3)
  - [Practical_Task-3](#Practical_Task-3)
- [Question-4](#Question-4)
  - [Practical_Task-4](#Practical_Task-4)
- [Question-5](#Question-5)
  - [Practical_Task-5](#Practical_Task-5)
- [Question-6](#Question-6)
  - [Practical_Task-6](#Practical_Task-6)
- [Question-7](#Question-7)
  - [Practical_Task-7](#Practical_Task-7)
- [Question-8](#Question-8)
  - [Practical_Task-8](#Practical_Task-8)
- [Question-9](#Question-9)
  - [Practical_Task-9](#Practical_Task-9)
- [Question-10](#Question-10)
  - [Practical_Task-10](#Practical_Task-10)
- [Question-11](#Question-11)
  - [Practical_Task-11](#Practical_Task-11)
- [Question-12](#Question-12)
  - [Practical_Task-12](#Practical_Task-12)
- [Question-13](#Question-13)
  - [Practical_Task-13](#Practical_Task-13)
- [Question-14](#Question-14)
  - [Practical_Task-14](#Practical_Task-14)
- [Question-15](#Question-15)
  - [Practical_Task-15](#Practical_Task-15)


## Question-1
Write a function called fetchData that uses the Fetch API to retrieve data from a third-party API endpoint: https://localhost:8000/data. The function should return a Promise that resolves with the parsed JSON response.
Note: Create a server on 8000 port before writing below js which could return json

[Solution](https://github.com/Smit202/Practice_test/tree/master/Question-1)

### Practical_Task-1

Implement the fetchData function and use it to fetch data from the provided API endpoint. Log the retrieved data to the console.

[Solution](https://github.com/Smit202/Practice_test/tree/master/Practical_task-1)

## Question-2

Rewrite the following code snippet using async/await syntax to make it more readable and maintainable:

```jsx
function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.5) {
        resolve('Data received');
      } else {
        reject('Error occurred');
      }
    }, 1000);
  });
}
```

[Solution](https://github.com/Smit202/Practice_test/tree/master/Question-2)

## Question-3

Explain the difference between the rest operator (...) and the spread operator (...). Give an example of how each operator can be used.

### Practical_Task-3

Write a function called sum that takes any number of arguments and returns their sum. Use the rest operator (...) to handle the variable number of arguments. Test the function with different numbers of arguments.

[Solution]()

## Question-4

What are default parameters in JavaScript functions? Give an example of a function that uses default parameters.

### Practical_Task-4

Write a function called greet that takes a name and a greeting message as parameters. The greeting message should have a default value of "Hello". The function should return the formatted greeting message. Test the function by calling it with different arguments, both with and without the greeting message.

[Solution]()

## Question-5

Explain the purpose of HTTP status codes. Give examples of three common status codes and their meanings.

### Practical_Task-5

Write a JavaScript function called handleError that takes an HTTP status code as an argument and logs a corresponding error message. Implement the function to handle at least three different status codes. Test the function with different status codes to verify its behavior.

[Solution]()

## Question-6

What is a callback function in JavaScript? Provide an example of a situation where a callback function is commonly used.

### Practical_Task-6

Write a function called doMathOperation that takes two numbers and a callback function as parameters. The function should perform a mathematical operation (e.g., addition, subtraction) on the two numbers and call the callback function with the result. Implement the callback function to log or display the result. Test the doMathOperation function with different mathematical operations and callback functions.

[Solution]()

## Question-7

Explain the logical AND (&&), OR (||), and NOT (!) operators in JavaScript. Provide examples of how each operator can be used.

### Practical_Task-7

Write a function called isEvenAndPositive that takes a number as a parameter. The function should return true if the number is both even and positive; otherwise, it should return false.

[Solution]()

## Question-8

Write a function called capitalizeNames that takes an array of names as a parameter. The function should use the spread operator (...) to create a new array where each name is capitalized. Return the new array.

### Practical_Task-8

Test the capitalizeNames function with an array of names and log the result to the console.

[Solution]()

## Question-9

Explain the concept of the map() function in JavaScript. Provide an example of how the map() function can be used to transform an array.

### Practical_Task-9

Create an array of numbers. Use the map() function to square each number in the array and store the squared values in a new array. Log the new array to the console.

[Solution]()

## Question-10

Explain the concept of the filter() function in JavaScript. Provide an example of how the filter() function can be used to extract specific elements from an array.

### Practical_Task-10

Create an array of numbers. Use the filter() function to extract only the even numbers from the array and store them in a new array. Log the new array to the console.

[Solution]()

## Question-11

Explain the concept of the reduce() function in JavaScript. Provide an example of how the reduce() function can be used to perform a calculation on an array.

### Practical_Task-11

Create an array of numbers. Use the reduce() function to calculate the sum of all the numbers in the array. Log the result to the console.

[Solution]()

## Question-12

Explain the concept of the forEach() function in JavaScript. Provide an example of how the forEach() function can be used to iterate over an array.

### Practical_Task-12

Create an array of strings. Use the forEach() function to log each string in the array to the console.

[Solution]()

## Question-13

Explain the concept of the some() function in JavaScript. Provide an example of how the some() function can be used to check if any element in an array satisfies a condition.

### Practical_Task-13

Create an array of numbers. Use the some() function to check if there are any negative numbers in the array. Log the result to the console.

[Solution]()

## Question-14

Explain the concept of the every() function in JavaScript. Provide an example of how the every() function can be used to check if all elements in an array satisfy a condition.

### Practical_Task-14

Create an array of numbers. Use the every() function to check if all numbers in the array are positive. Log the result to the console.

[Solution]()

## Question-15

Explain the concept of the find() function in JavaScript. Provide an example of how the find() function can be used to search for a specific element in an array.

### Practical_Task-15

Create an array of objects representing people. Each object should have a name and age property. Use the find() function to search for a person with a specific name in the array. Log the result to the console.

[Solution]()