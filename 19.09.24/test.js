let numbers = [1, 2, 3, 4];
let squares = numbers.map(function(num) {
    c = Math.pow(num,numbers.length);
    return c;
});
let sum=0;
for(i=0; i<numbers.length;i++){
sum+=squares[i];
}
console.log(sum);



function greet(name) {
    console.log(`Hello, ${name}`);
}

function processUserInput(callback) {
    const name = console.log("Please enter your name:");
    callback(name);
}

processUserInput(greet);

