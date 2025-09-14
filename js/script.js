// Question 1.
let age = 21;
if (age >= 21) {
    console.log("You are eligible to consume alcohol.");
}
else {
    console.log("You are not eligible to consume alcohol.");
}

let possession = 65;
if (possession >= 65){
    console.log("We are dominating the game.");
}
else {
    console.log("We need to improve our game.");
}

// Question 2
// function for calculating totals.
let apples = 5;
let mangos = 20;
let watermelons = 10;
let oranges = 15;
// function expression
const add = function(apples, watermelons){
    return apples + watermelons;
};
console.log(add(5,10));
// multiple statement function using arrow
const calculate = (apples, mangos, watermelons, oranges) => {const sum = apples + mangos + watermelons + oranges; return sum;}; console.log(calculate(5,20,10,15));

// Question 3
// looping using for....in
const obj = { Make: "LG", Model: "Nanocell", Screen: "65-inch", Display: "4k Ultra HD"};

for (const key in obj) {
    console.log(`${key}: ${obj[key]}`);
}
// looping using for...of
const movies = ["Superman", "Fantastic Four", "Inception"];

for (const movie of movies){
    console.log(movie);
}

// Question 4
let change = function(){
    // selecting the functions
    let intro = document.getElementById('Intro')
    let body = document.getElementById('body')
    let main = document.getElementById('main')

    //manipulation
    body.style.backgroundColor = "lightgrey"
    body.style.margin = "50px"
    intro.textContent = "Introduction to Javascript Fundamentals"
    intro.style.textDecoration = "Underline", "Bold"
    intro.style.Color = "green"
    main.style.color = "teal"

    // Select all paragraph elements
let paragraphs = document.getElementsByTagName("p");

// Looping through each paragraph.
for (let i = 1; i <= 5; i++) {
  paragraphs[i].style.color = "chocolate"
  paragraphs[i].style.fontFamily = "Georgia, 'Times New Roman', Times, serif;"
  paragraphs[i].style.fontsize ="medium"
} 

// adding new text
}