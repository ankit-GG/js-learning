
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


//********************Operations************************//

let str1 = "Ankit"
let str2 = "Biswas"
let str3 = str1 + str2
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2"); // this would return 32 and  not 122

console.log(3 + 4 * 5 % 2);
let scoreCounter = 100 
++scoreCounter
console.log(scoreCounter);
scoreCounter++
console.log(scoreCounter);
// in both the cases the result will be same but postfix and prefix operators works differently
 



 