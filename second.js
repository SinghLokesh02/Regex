let regex = /^lokes/; // ^ This means string should start with lokes

regex = /sh$/; // $ This means string should end with lokes

regex = /l.kesh/; // . matches any one character
regex = /.ood/; // . matches any one character

regex = /l*h/; // * matches any 0 or more characters

regex = /lok?esh?/; // ? after character means character is optional


let str = "lokegj is a good boy and lokesh is lokesh";

let result = regex.exec(str);
console.log(result);



let reg = /abc/g;

let str1 = "def abc ghi jkl abc";

// For finding the first index of abc
console.log(`The last index of abc is ${str1.lastIndexOf("abc")}`)

// For finding the first index of abc
console.log(`The first index of abc is ${reg.exec(str1).index}`)

// matchall method

let result1 = [...str1.matchAll(reg)];
console.log(result1);
