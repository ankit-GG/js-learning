// Primitive Data types

// 7types: Strings, Numbers, Boolean, Symbol, BigInt, null, undefined

const score = 100
const scoreCard = 100.7 
//js automatically sets the data type of score and scoreCard and thus it is dynamically typed language

const isLoggedIn = false
const email = null
let newEmail;

const id = Symbol("123")
const Newid = Symbol ("123")

console.log(id === Newid); // it would return false as Symbol make them unique although they are same



// Non-Primitive Data types (reference type)

// Arrays, Objects, Functions

const marvel = ["Ironman", "thor","vision"]
const myObj = {
    name: "ankit",
    age: 19  } 
const myFUNCTION = function(){
    console.log("Hello World");
    
}
console.log(typeof myObj); 
