// This is a regular expression literal in js
let reg = /lokesh/g;

// g - global flag
// i - case insensitive -> this will ignore the case of the string

console.log(reg);

console.log(reg.source); // This will print the source of the regular expression

// Functions to match expressions
// 1. exec() - This function will return an array for match or null for no match

let s = "This is great code with lokesh and lokesh";
let result = reg.exec(s);
console.log(result); 


// Print the index of result
console.log(result.index);


// Print the input string
console.log(result.input);


// result = reg.exec(s);
// console.log(result); 

// If you want to print the match at once then you can use loop

// do {
//     console.log(reg.exec(s));
// }while(reg.exec(s) != null)


// 2. test() - Returns true or false

let result2 = reg.test(s);
console.log(result2); // true


// 3. match() - It will return an array of results or null

// let result3 = reg.match(s); This will not work this is wrong

let result3 = s.match(reg);
console.log(result3); // [ 'lokesh', 'lokesh' ]


// 4. search() - Returns index of first match else -1

let result4 = s.search(reg);
console.log(result4); // 24


// 5. replace() - Returns new replaced string with all the replacements

let result5 = s.replace(reg, "Sonali");
console.log(result5); // This is great code with Sonali and Sonali