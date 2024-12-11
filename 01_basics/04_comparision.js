console.log(2 > 2); // false
console.log(2 < 2); // false
console.log(2 >= 2); // true 
console.log(2 == 2); // true

console.log("2" == 2);
console.log("02" == 2);
//these will return true as these strings are converted in numbers by js

console.log(null == 0); // false
console.log(null < 2); // true
console.log(null >= 0);  // true
// The difference is because the comparision > < >= <= and equal operator works differently. comaprision operators change null into number 

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined <= 0);

// === this checks the the value as well as the data type of the value 
console.log("02" === 2); // false
