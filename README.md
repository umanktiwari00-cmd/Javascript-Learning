<h1>JavaScript Learning</h1>

This repository contains my JavaScript learning journey, including theory notes, DOM practice, mini projects, and coding exercises.

⸻

<h3>JavaScript Execution Context </h3>

JavaScript code executes inside an Execution Context.

<h3>Types of Execution Context </h3>

1. Global Execution Context (GEC)
    * Created when the JavaScript program starts.
    * There is only one Global Execution Context.
2. Function Execution Context (FEC)
    * Created whenever a function is called.
    * Each function gets its own execution context.
3. Eval Execution Context
    * Created when code is executed using eval().
    * Rarely used in modern JavaScript.

⸻

Two Phases of Execution

Every Execution Context goes through two phases:

1. Memory Creation Phase (Creation Phase)

During this phase:

* Memory is allocated for variables.
* Variables declared with var are initialized with undefined.
* Function declarations are stored completely in memory.
* No code is executed yet.

Example:

let a = 10;
function greet() {
    console.log("Hello");
}

Memory Phase:

* a → undefined
* greet → Function Definition

⸻

2. Execution Phase

During this phase:

* Code executes line by line.
* Variables receive their actual values.
* Functions are invoked when called.

Example:

let a = 10;
greet();

Execution:

* a becomes 10
* greet() executes and prints:

Hello

⸻

Function Execution Context

Whenever a function is called:

1. A new Function Execution Context is created.
2. It has:
    * Memory (Variable Environment)
    * Execution Thread
3. The function executes.
4. After execution, the Function Execution Context is destroyed and removed from the Call Stack.

⸻

Important Notes

* Every function call creates a new Execution Context.
* Function declarations are stored completely during the Memory Creation Phase.
* Variables are initialized before execution begins.
* Once a function finishes executing, its Execution Context is deleted from the Call Stack.

⸻

Useful JavaScript Tips

Convert an array-like object into an array

Array.from()

Example:

const divs = document.querySelectorAll("div");
const array = Array.from(divs);

This is commonly used to convert:

* NodeList
* HTMLCollection
* Other iterable or array-like objects

into a real JavaScript array.

⸻

Repository Contents

* JavaScript fundamentals
* Execution Context
* DOM Manipulation
* Events
* Mini Projects
* Functions
* Objects
* Arrays
* ES6 Features
* Practice Programs
* Notes and Experiments

⸻

Progress

This repository is updated regularly as I continue learning JavaScript and building mini projects.
