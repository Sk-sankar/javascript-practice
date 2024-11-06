// Given a array of string return the String which has the maximum length. arr = ["Ram", "Abraham", "Peter"]

let arr = ["Ram", "Abraham", "Peter"];
let em = "";

for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > em.length) {
        em = arr[i];
    }
}
console.log(em);


// ----------------
let arr11 = ["apple", "Ali", "mango", "Brush"];
let result = arr11.filter(word => word[0].toLowerCase() === 'a');

console.log(result);


// 
function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i]; 
    }
    return reversed;
}


// 

let inputString = "hello";
let result1 = reverseString(inputString);
console.log(result1);  
