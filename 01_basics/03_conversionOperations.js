
let num = 33
let stringNum = String(num)
console.log(num);

console.log(stringNum);
console.log(typeof stringNum);

let id = "33abc"
let numberId = Number(id)
console.log(typeof numberId);

console.log(numberId); // it cannot be conveted into a number, as it NaN (Not a Number) its a string
console.log(typeof numberId); // but still it has type as number

let score = null
let numberScore = Number(score) 
console.log(numberScore); // returns 0
console.log(typeof score); // returns object 

// conversion to number
// "33" => 33
// "33abscs" => NaN
//  true => 1
// false => 0

// conversion to boolean
// "Ankit" => true
// 1 => true
// 0 => false
// "" => false
// null/undefined => false




 