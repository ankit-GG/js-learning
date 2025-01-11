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



//***********************************MEMORY******************************


// stack memory (primitive)  and  Heap memory(non-primitive)

let name1 = "ankit"
let name2 = name1
name2 = "hitesh"

console.log(name1); // returns ankit
console.log(name2); // returns hitesh, because in ln 42 it gets the copy of name1 

let user1 = {
    namee: "Rakul",
    UPI: "rahul@jul"
}
let user2 = user1
user2.namee = "Rohit"
console.log(user1.namee); // returns Rohit
console.log(user2.namee); // returns Rohit, because in non primitive types we get the reference of the value
