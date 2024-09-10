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
