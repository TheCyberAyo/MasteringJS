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
button.addEventListener("mouseover", function() {
    button.style.backgroundColor="lightblue";
});

button.addEventListener("mouseout", function() {
    button.style.backgroundColor="";
});




