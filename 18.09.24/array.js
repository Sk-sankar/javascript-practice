let numbers=[1,2,3,4,5];
console.log(numbers.length);



// Create an array of 4 colors. Find the index of "Green" using indexOf() and print it. Also, try finding an element that does not exist and print the result.

let colors=["blue","green","yellow","white","black"];
console.log(colors.indexOf("white"));



// Write a program that creates an array of 3 animals. Use push() to add another animal to the array and print the new array.




let animals=["lion","tiger","elephant"];
animals.push("Hyena");
console.log(animals);



// Create an array of 4 car brands. Remove the last element using pop() and print the removed element as well as the updated array



let cars=["BMW","FERRARI","BUGATI","AUDI"];
let b;
let c=[];
for(i=1;i<=4;i++){
    b=cars.pop()
    c.push(b)
   
}
console.log(c);



// Write a program to create an array of 3 gadgets. Remove the first element using shift() and print the resulting array.




let bikes=["KTM","R15","DUKE","RX100"];
console.log(bikes.shift());


// Create an array of 2 cities. Add two more cities to the beginning using unshift() and print the new array.


let cities=["Chennai","Madurai","Trichy"];
cities.unshift("Salem","OOTY")
console.log(cities);




// 
let number = 1234567;
let sum = 0;

for (let a of String(number)) {
  sum += Number(a);
}

console.log(sum); 


