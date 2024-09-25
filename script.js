// const test = document.querySelector('body');
// test.innerHTML = 'Hello'; 
// console.log(test.innerHTML);

// document.body.innerHTML = "hello";
//
let amount = 117;
let days= 20;

let name = "Ayongezwa";
console.log(name);


//arithmetic expression
let salary = amount * days;
console.log(salary)

let age = 20;
console.log(age);
//comparison expression
let isAdult = age >= 18;
console.log(isAdult);

//logical expression
let citizen = true;
citizen = false;
console.log(citizen);
let canVote = (age >= 18) && (citizen === true); 
console.log(canVote);



canVote = (age >= 18) || (citizen === true);
console.log(canVote);

//ternary expression
let status = (canVote)? "aligible to vote" : "not aligible to vote";
console.log(status);


if (canVote === true){
    console.log("aligible to vote");
}
else{
    console.log("not aligible to vote");
}

//If else example
if (day === "Monday"){
    console.log("Start of the workweek;");
}else if(day === Friday){
    console.log("Almost the weekend")
} else {
    console.log("Just another day")
}

//switch statement
switch (day){
    case "Monday":
        console.log("Start of the week");
        break;
    case "Friday":
        console.log("last day of day of the week");
        break;
    case "Wednesday":
        console.log("Midweek Grind");
        break;
    default:
        console.log("Just another day");
}

//declaring a function
function greet(name) {
    return "Hello, " + name + "!"
}

//calling a function

let message = greet("Alice")
console.log(message) //output: Hello, Alice!


//scope example
let globalVar= "I am global"

function checkScope(){
    let localVar = "I'm Local";
    console.log(globalVar); //accessible here although out of here
    console.log(localVar); //accessible because it is found here
}

checkScope();

console.log(globalVar); //acessible here
console.log(localVar); //not accessible beacause it is only local to the fuction that contains it.



//DOM AND EVERYTHING RELATED 
//selecting by id and modifying its content

let heading = document.getElementById("main-heading");
heading.textContent = "Love is a beautiful thing";

//changing the style of a   element 
let blueDay = document.querySelector(".landing-page");
blueDay.style.backgroundColor = "blue";

//adding a new class to an element
blueDay.classList.add("day-description");

// creating a new element and appending to the DOM
let newElem = document.createElement("section");
newElem.textContent = "This is an element added through DOM manipulation";
document.body.appendChild(newElem); //I could use appendchild to add just one element to a "place"

let newElem2 = documents.createElement("aside");
newElem2.textContent = "A good day to have a good day";
document.body.appendChild(newElem2); // result: A good day to have a good day

//alternative to the above - if i want the above to appear as siblings

document.body.append(newElem, newElem2); //result: This is ament added through DOM manipulation.
                                         //        A good day to have a good day.


// EVENTS(Events, eventListeners)

//EVENT LISTENERS (click, mouseover, keydown)
//Inline Event Listeners --- are those that can be added into an an HTML page, like buttons.
// e.g <button onclick ="Do SOMETHING"


// COMMON EVENT TYPES
    //Mouse Events (click, dbclick, mouseover, mouseout, mouseup, ousedown)
    //Keyboard Events (keydown, keyup, keypress)
    //Form Events(submit, change, focus, blur)
    //Document/Window Events(load, resize, scroll, DOMContent Loaded)

//selecting a button
let button = document.querySelector("#myButton");
//add a click listener to the button
button.addEventListener("click", function(event){
    //change button text when clicked
    button.textContent = "Button Clicked!"; 

    //log event details to the console
    console.log("Event Type:", event.type);
    console.log("Button Text", event.target.textContent);

});

//Adding mouseover event listener to change background-color
button.addEventListener("mouseover", function()  {
    button.style.backgroundColor="lightblue";
});



button.addEventListener("mouseout", function() {
    button.style.backgroundColor="";
});




//  CREATING  AND REMOVING ELEMENTS DYNAMICALLY

//what the hell does this mean?

function renderAnimals (animals){
    while(animalContainer.firstChild){
        animalaContainer.removeChild(animalContainer.firstChild)
    };
    animals.forEach(renderOneAnimal)
};


// ARROW FUNCTION
// Arrow functions provide a shorter and more concise syntax for writing functions. They use the => syntax and omit the need for the function keyword.
// Arrow functions are particularly useful for writing simple one-line functions, such as in array methods like map, filter, or reduce.
// Lexical this:
//       - One of the key differences between traditional functions and arrow functions is how they handle the this keyword.
//       - Arrow functions inherit this from the surrounding context, which eliminates common issues with this in callback functions, particularly 
//         in object-oriented programming.

// TEMPLATE LlITERALS
// Enhanced String Interpolation:
//       - provide a more flexible way to create strings, allowing for embedded expressions and multi-line strings without the need for concatenation.
//       - They are defined using backticks (`) instead of single or double quotes.

// Expressions Inside Strings:
//       - You can embed expressions inside template literals using ${} syntax. This allows you to directly insert variables, expressions,
//         or function results into strings, making the code more readable and easier to maintain.

// OTHER NOTABLE ES6+ FEATURES:
// Default Parameters:
//         - ES6 allows you to set default values for function parameters, making your functions more robust and reducing the need for additional checks.
// Destructuring:
//         - enables you to unpack values from arrays or properties from objects into distinct variables, simplifying the extraction of data from
//           complex structures.
// Spread and Rest Operators:
//         - The spread operator (...) allows you to expand elements of an array or object. It’s useful for copying arrays, combining objects,
//           or passing multiple elements as arguments.
//         - The rest operator, also using (...), collects multiple elements into an array, making it easier to handle function parameters or 
//           gather the remaining elements in an array.


// ASYCHRONOUS JAVASCRIPT (CALLBACKS, PROMISES, ASYNC/AWAIT)
//1. Callbacks
//    A callback is a function that is passed as an argument to another function and is executed after the completion of a specific task.
//    This is one of the simplest ways to handle asynchronous operations in JavaScript.
   
function fetchData(callback){
    setTimeout(() => {
        const data = "Data fetched from server";
        callback(data);
    }, 2000);
}

function displayData(data) {
    console.log(data);
}

fetchData(displayData);

// ABOVE CODE 
// Define a function called fetchData that takes a callback function as an argument
function fetchData(callback) {
    // Use setTimeout to simulate a delay (e.g., waiting for data to be fetched)
    setTimeout(() => {
        // After 2 seconds, create a variable 'data' with a message
        const data = "Data fetched from server";
        // Call the provided callback function and pass 'data' to it
        callback(data);
    }, 2000); // Wait for 2000 milliseconds (2 seconds)
}

// Define a function called displayData that takes 'data' as an argument
function displayData(data) {
    // Log the received data to the console
    console.log(data);
}

// Call fetchData, passing in displayData as the callback function
fetchData(displayData);


//OWN Example
function getData(callback) {
    setTimeout(() => {
        let fightingSkills = "A long list of fighting skills";
        callback(fightingSkills)
    }, 3000);
}

function displaySkills(fightingSkills) {
    console.log(fightingSkills)
}

getData(displaySkills);

//2. Promises
// A promise is an object that represents the eventual completion (or failure) of an asynchronous operation. 
// It allows you to attach callbacks to handle the result or error, providing a cleaner and more manageable 
// way to work with asynchronous code.

function beadsData () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'pink', 'cyan', 'magenta'];
            resolve(colors)
        }, 4000);
    });

}

beadsData()
    .then((colors) => {
        console.log(colors);
    })
    .catch((error) => {
        console.error(error);
    });

