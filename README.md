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

  - rest is used to convert the list of parameters in the funstion call into an array of parameters in function definition.
  ```jsx
  function print(...arr) {
    for(let i of arr) console.log(i);
  }
  console.log(1, 'hello');
  console.log('hii', 'good morning', 36, true);
  ```

  - Spread works like rest in reverse manner. spread is used to convert the array in the funstion call into list of parameters for the function. spread can also be used to convert string into array of characters.
  ```jsx
  let arr1 = [25, 36, -56, -79, 52];
  let arr2 = [10, -63, 24, 52, -6];
  let str = "Hello, How are you?";
  let chars = [...str];

  console.log(Math.max(32, 156, ...arr1, ...arr2, -1));
  console.log(chars);
  ```

### Practical_Task-3

Write a function called sum that takes any number of arguments and returns their sum. Use the rest operator (...) to handle the variable number of arguments. Test the function with different numbers of arguments.

[Solution](https://github.com/Smit202/Practice_test/tree/master/Question-3)

## Question-4

What are default parameters in JavaScript functions? Give an example of a function that uses default parameters.

  - Default parameters are used to give default value to the function parameter which will be used if default parameter value is not given in the function call or default parameter value is undefined.
  ```jsx
  function showAge(name, age=20) {
    console.log(`${name} is ${age} years old.`)
  }

  showAge('smit');
  showAge('raj', undefined);
  showAge('het', 25);
  ```

### Practical_Task-4

Write a function called greet that takes a name and a greeting message as parameters. The greeting message should have a default value of "Hello". The function should return the formatted greeting message. Test the function by calling it with different arguments, both with and without the greeting message.

[Solution](https://github.com/Smit202/Practice_test/tree/master/Question-4)

## Question-5

Explain the purpose of HTTP status codes. Give examples of three common status codes and their meanings.

  - Purpose of the HTTP status code is to indicate that what happened with request to the server. It shows whether the request fullfiled or failed and reason of fail. Below are the common http status code which are mostly used

  - 200: It indicates the success of request to the server. It occurs when request is successfully fullfiled and response is sent to the client.

  - 401: It indicates unauthorized access of resource in server. It occurs when request cannot be fullfilled due to the invalid authentication credentials of the requested resource.

  - 404: It indicates that the requested resource is not avialable in the server.

  - 500: It indicates internal server error. It occurs when request is not fulfilled due to the some error is encountered in server.

### Practical_Task-5

Write a JavaScript function called handleError that takes an HTTP status code as an argument and logs a corresponding error message. Implement the function to handle at least three different status codes. Test the function with different status codes to verify its behavior.

[Solution](https://github.com/Smit202/Practice_test/tree/master/Question-5)

## Question-6

What is a callback function in JavaScript? Provide an example of a situation where a callback function is commonly used.

  -  callback function is a kind of function that can be given as arguement to other function. This outer function then executes the callback function.

  - callback functions are is commonly used in a situation where we want to call a function when particular event occurs. for exampleif we want to read file and when readFile function completes the reading of file or in between some error occurs the it should call another function provided as arguement.

  ```jsx
  fs.readFile('data.json', (err, result) => {
    if(err) => console.log(err);
    else console.log(result);
  });
  ```

### Practical_Task-6

Write a function called doMathOperation that takes two numbers and a callback function as parameters. The function should perform a mathematical operation (e.g., addition, subtraction) on the two numbers and call the callback function with the result. Implement the callback function to log or display the result. Test the doMathOperation function with different mathematical operations and callback functions.

[Solution](https://github.com/Smit202/Practice_test/tree/master/Question-6)

## Question-7

Explain the logical AND (&&), OR (||), and NOT (!) operators in JavaScript. Provide examples of how each operator can be used.

  - AND(&&): AND returns true if the both operands are true and return false id any one operand is falsy. AND operator first evaluates operands from left to right if result is false it returns the original value of that operand. If all the operands are true then it returns the value of last operand.

  - OR(||): OR returns true if any one operand is true otherwise false. OR operator finds for the first truthy value in list of operands from left to right. If all the operands are falsy then it returns the value of last operand.

  - NOT(!): It returns the inverse boolean value of operand.

  ```jsx
  console.log(0 || 'hello' || 25);      // first truthy value hello
  console.log(null || undefined || 25); // 25
  console.log(null || undefined || ''); //all false so last value ''

  console.log('hello' && 25 && 0);      // first falsy value 0
  console.log(1 && 'hello' && null && true);    // null
  console.log(25 && 'hello' && 12);     // all true so last value 12

  console.log(!null)  // true
  console.log(!23)    // false
  ``` 

### Practical_Task-7

Write a function called isEvenAndPositive that takes a number as a parameter. The function should return true if the number is both even and positive; otherwise, it should return false.

[Solution](https://github.com/Smit202/Practice_test/tree/master/Question-7)

## Question-8

Write a function called capitalizeNames that takes an array of names as a parameter. The function should use the spread operator (...) to create a new array where each name is capitalized. Return the new array.

[Solution](https://github.com/Smit202/Practice_test/tree/master/Question-8)

### Practical_Task-8

Test the capitalizeNames function with an array of names and log the result to the console.

[Solution](https://github.com/Smit202/Practice_test/tree/master/Question-8)

## Question-9

Explain the concept of the map() function in JavaScript. Provide an example of how the map() function can be used to transform an array.

  - map() function executes the callback function for each elements of array and replace it with new value. map() function is used when we want to change all elements of array in a simmilar pattern.

  - syntax:- 
  ```jsx
  arr.map((item, index, array) => {
    .......
  });
  ```

  - For example, if we want to square each number in array then we can use map method by providing square callback function. It will pick all array elements one by one and execute the square callback function for that value and replace old value with square.


### Practical_Task-9

Create an array of numbers. Use the map() function to square each number in the array and store the squared values in a new array. Log the new array to the console.

[Solution](https://github.com/Smit202/Practice_test/tree/master/Question-9)

## Question-10

Explain the concept of the filter() function in JavaScript. Provide an example of how the filter() function can be used to extract specific elements from an array.

  - filter() is used to get all the matching elements from an array for specific condition provided in callback function. filter() will loop through each element and checks the condition if it is true then it will store it into array and at last will return new array of all matched elements.

  - syntax:- 
  ```jsx
  arr.filter((item, index, array) => {
    .......
  });
  ```

  - For example, if we want to find all the even numbers from array then we can use filter and give condition as num%2==0 or not.

### Practical_Task-10

Create an array of numbers. Use the filter() function to extract only the even numbers from the array and store them in a new array. Log the new array to the console.

[Solution](https://github.com/Smit202/Practice_test/tree/master/Question-10)

## Question-11

Explain the concept of the reduce() function in JavaScript. Provide an example of how the reduce() function can be used to perform a calculation on an array.

  - reduce() function is used to calculate a single value from an array elements. reduce() function passes the result of previous iteration's callback function to the next iteration.

  - syntax:- 
  ```jsx
  arr.reduce((accumulator, item, index, array) => {
    .......
  }, [initial value]);
  ```

  - accumulator is the result of first function call. for the first element in array there is no return value of previous callback function so it uses the initial value in place of accumulator if provided, otherwise it uses the first element as accumulator and starts iteration from second element.

  - For example, in case of finding sum of all array elements we can use reduce() method. 

### Practical_Task-11

Create an array of numbers. Use the reduce() function to calculate the sum of all the numbers in the array. Log the result to the console.

[Solution](https://github.com/Smit202/Practice_test/tree/master/Question-11)

## Question-12

Explain the concept of the forEach() function in JavaScript. Provide an example of how the forEach() function can be used to iterate over an array.

  - forEach() method is used to iterate over the array elements. it allows to execute function for each array elements but do not change the original array.

  - syntax:- 
  ```jsx
  arr.forEach((item, index, array) => {
    .......
  });
  ```

### Practical_Task-12

Create an array of strings. Use the forEach() function to log each string in the array to the console.

[Solution](https://github.com/Smit202/Practice_test/tree/master/Question-12)

## Question-13

Explain the concept of the some() function in JavaScript. Provide an example of how the some() function can be used to check if any element in an array satisfies a condition.

  - some() mwthod is used to chech if at least one element in array passes th econdition or not. It finds the element in array for which the callback function returns true. if it do not find any such element it will return false, otherwise true in case of at least one element.

  - syntax:- 
  ```jsx
  arr.some((item, index, array) => {
    .......
  });
  ```

### Practical_Task-13

Create an array of numbers. Use the some() function to check if there are any negative numbers in the array. Log the result to the console.

[Solution](https://github.com/Smit202/Practice_test/tree/master/Question-13)

## Question-14

Explain the concept of the every() function in JavaScript. Provide an example of how the every() function can be used to check if all elements in an array satisfy a condition.

  - every() method checks if all elements in array passes the condition or not. for all the elements in array if provided callback function returns true it returns true, otherwise false. 

  - syntax:- 
  ```jsx
  arr.every((item, index, array) => {
    .......
  });
  ```

### Practical_Task-14

Create an array of numbers. Use the every() function to check if all numbers in the array are positive. Log the result to the console.

[Solution](https://github.com/Smit202/Practice_test/tree/master/Question-14)

## Question-15

Explain the concept of the find() function in JavaScript. Provide an example of how the find() function can be used to search for a specific element in an array.

  - find() function is used to search for specific element. It returns the first matching element in an array. It iterates through the all elements and execute callback function for each element and return the first element that returns true.

  - syntax:- 
  ```jsx
  arr.find((item, index, array) => {
    .......
  });
  ```

### Practical_Task-15

Create an array of objects representing people. Each object should have a name and age property. Use the find() function to search for a person with a specific name in the array. Log the result to the console.

[Solution](https://github.com/Smit202/Practice_test/tree/master/Question-15)