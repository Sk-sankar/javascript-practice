// Function to calculate the GCD using the Euclidean algorithm
function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

// Function to calculate the LCM using the GCD
function lcm(a, b) {
    return Math.abs(a * b) / gcd(a, b);
}

// Example usage
let num1 = 12;
let num2 = 15;

console.log(`LCM of ${num1} and ${num2} is ${lcm(num1, num2)}`);


function prime(num){
    if(num<=0){
        return false
    }
    for(i=2;i<=Math.sqrt(num);i++){
        if(num%i==0){
            return false
        }
    }
    return true
}
console.log(prime(10));
function check(arr){
    let empty=[];
    for(num of arr){
        if(prime(num)){
            empty.push(num)
        }
    }
    return empty;
}
let arr=[1,2,3,3,4,5,6];
let result=check(arr);
console.log(result);

function star(c,n){
    let x="";
    for(i=1;i<=n;i++){
        x+=c;
      
    }
    console.log(x);
}star("*",3);


// function printRightAlignedPattern(n) {
//     for (let i = 1; i <= n; i++) {
//         // Print leading spaces
//         let spaces = ' '.repeat(n - i); // Creates a string of spaces
//         let stars = '* '.repeat(i); // Creates the stars for the current row
//         console.log(spaces + stars.trim()); // Print spaces followed by stars
//     }
// }

// // Example usage
// const n= 10;
// // printRightAlignedPattern(n);

function printRightAlignedPattern(v) {
    for (let i = 1; i <= 3; i++) {
        let spaces = ' '.repeat(v); // Create a string of spaces for right alignment
        console.log(spaces + '* * *'); // Print spaces followed by the stars
    }
}

// Example usage
const v = 3; // Adjust this value for the amount of leading spaces
printRightAlignedPattern(v);


function number(n){
    for(i=n;i>=1;i--){
    let space=' '.repeat(n - i);
    let num=(i+" ").repeat(i);
    console.log(space+num.trim());
    }
  
}number(5)