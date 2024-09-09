// https://www.youtube.com/watch?v=vxggZffOqek

/**
  ************************************************************************************************************************
  * Question 1: Hoisting
  */
  
  /**
   *************************************************************************************************************************
   * Question 2: Implicity and Explicity Binding
   */
  
  /**
   *************************************************************************************************************************
   * Question 3: Implement memoize function, in JavaScript
   */
  
  /**
   *************************************************************************************************************************
   * Question 4: Event Loops [IMP]
   * {@link - https://www.jsv9000.app/} https://www.jsv9000.app/
   */
  
  /**
   *************************************************************************************************************************
   * Question 5: Currying & Infinite Currying (in JS)
   */
  
  /**
   *************************************************************************************************************************
   * Question 6: Flatten the array (custom flatten method)
   */
  let arrToFlatten = [
    [1, 2],
    [3, 4],
    [5, 6, [7, 8], 9],
    [10, 11, 12],
  ];
  /**
   *************************************************************************************************************************
   * Question 7: Call. Apply & Bind
   */
  
  /**
   *************************************************************************************************************************
   * [React]
   * Question 1: Implement folder structure
   * {@link - httpshttps://codesandbox.io/}
   */
  // https://codesandbox.io/
  
  // to write async code:
  // What is Promises? How to write promise code?
  // What is async await? How to write async await?
  // // 1. Promises
  // // 2. async await - writes asncy code in synchronous fashion
  
  // Promise {
  //     resolve() {
  //         //..
  //     },
  //     reject() {
  //         // ..
  //     }
  // }
  
  const arr = [1, 2, 3, 4];
  // console.log(arr);
  // What is map?
  // What is forEach?
  // difference between map & forEach?
  
  console.log(arr.map((element) => element * 2));
  console.log(arr);
  
  // Writing a polyfill for 'map' function:
  Array.prototype.myMap = function () {
    // your definition
  };
  // youtube videos on - polyfills for 'map' & 'reduce'
  
  const resultSum = arr.reduce((e, accumalator) => {
    accumalator = accumalator * e;
    return accumalator;
  }, 1);
  console.log(resultSum);
  
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
  
  // arr.myReduce() // from youtube video

  


/* JavaScript React questions


Polyfill for map, reduce, Promise.all
Write a function to memoize any function in JS
Implement debounce and throttle in JS

Promise, what is Promise.all([promise1, promise2,…])
What is a Promise? -> 3 states -> resolve, reject, pending

What is Synchronous code vs Asynchronous code?

 
—————

Hoisting:
Function 

—————
Difference between map and forEach?
map modifies the array & we can chain more functions to map

Different between var, let & const keyword
Var (functional scope)
Let & const (block scope)

Redeclaration (var can be, let & const can’t be redeclared)
Reinitialised (var can be, let can be, const can’t be)

—————

Explain Call, Apply & Bind ( we can manipulate the context of a function)
Call: Takes an object (which becomes context for function) & takes arguments (that the function takes)
Apply: Send arguments/params inside array
Bind: returns a completely new function 


React:
Explain lifecycle methods in React - Class components & Functional components

Ways to centre a div:


How does React work? -> using virtual DOMs
Diffing -> 
Virutal DOM? -> lightweight representation of Real DOM.

What is JSX? -> HTML code inside JavaScript.

Writing React In JSX - right?

Can we write React without JSX? - We can

Class & Functional
Lifecycle methods in React (Class components & Functional components)

componentWillMount: why? What phase of lifecylce
componentDidMount,

Functional components:
useEffect (this is to tap into lifecycle mehtods in a functional)
useEffect(() => { 
	
	return () => {
		// when the component is unmounted
	}
}, [  ])
// when the dependency array is empty

React hooks? - useEffect, useState, useCAllback, useRef, useMemo?
What are these react hooks - useEffect, useState, useCAllback, useRef, useMemo?

What are Custom hooks?

What is React Lazy loading & what is React Suspense?
React Suspense? & React Lazy?

What are the different Loading In techniques in React:
CSR
SSR
Hybrid Loading? Don’t remember this
React 18 is current 

How to implement security in React?


Page performance: effective use of useMemo & useCallback
useMemo & useCallback [memoization]
Can’t memoizing everything.
https://blog.logrocket.com/optimizing-performance-react-app/#:~:text=With%20code%2Dsplitting%2C%20React%20allows,of%20a%20complex%20React%20application


Apratim’s repo: https://github.com/apratimjaiswal/prep/blob/main/js/Concepts/debouncing/index.js
Debounce implementation 
& What is Throttle */
