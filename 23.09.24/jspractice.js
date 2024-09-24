calculateArea();
greetUser();

function calculateArea() {
 const radius = 5;
 var area = Math.PI * radius * radius;
 console.log(area);
}
function greetUser() {
 var userName = "John";
 console.log(userName);
};


// sum 2

let count = 1;
while (count <= 100) {
 console.log("Counting down: " + count);
 count = count + 1;
}



// sum3

let temperature = 30;

if (temperature < 30) {
    console.log("It's cold outside.");
   } else {
    console.log("It's warm outside.");
   }


// sum 4

checkNumber(-5);
checkNumber(0);
checkNumber(10, 20);
function checkNumber(num) {
  if (num > 0){
    console.log("positive");
  }
  else if (num < 0) {
    console.log("negative");
  } else {
    console.log("Zero");
  }
}  



// 5. Write a function sumNumbers that takes a number n as a parameter and returns the sum of all numbers from 1 to n using a while loop.

function sumNumbers(n){
     let sum=0;
     for(i=1;i<=n;i++){
        sum+=i;
     }
 console.log(sum);
}
sumNumbers(10);



// 

let oldstudents=20;
let average=15;
let age=oldstudents*average;
let new1=16;
let new2=18;
let all=oldstudents+2;
let newAveragr=(age+(new1+new2))/all;

console.log(newAveragr);



//  sum 6
function calculateFactorial(n){
    let sum =1;
    for(i=1;i<=n;i++){
          sum*=i
    }
    console.log(sum);
}
calculateFactorial(5);




// 
let length=8;
let breath=4;
let area =length*breath;
let tileh=25;
let tileb=20;
let areat=(tileb/100)*(tileh/100);
let total=area/areat;
console.log(total);



// 
let n=121;
if(n==2){
    console.log("It is prime")
}

else if(n%2===0 || n%3===0 || n%4==0 || n%5==0 || n%6==0 || n%7==0){
    console.log("its a not prime number")
}
else if(n/1 && n/n ){
    console.log("It is prime")
}
else{
    console.log("It is not a prime")
}



// 


function printEvenNumbers(n){
    for(i=1;i<=n;i++){

      if(i%2==0){
        console.log(i)
    }
}
}
printEvenNumbers(10);


// 

function sumNumbers(n) {
    let sum = 0;
    let i=1
     while (i <=n) {
      sum += i;
      i++;
    }  return sum;
  }
  console.log(sumNumbers(10));


//   
function classifyNumber(n){
    if(n%3===0){
        console.log("It is divisible by 3");
    }
    else if(n%5===0){
        console.log("It is divisible by 5");

    }
    else if(n%3===0 && n%5===0){
        console.log("It is divisible by both 3 & 5");

    }
    else{
        console.log("It is not divisible by both 3 & 5")
    }
}
classifyNumber(5);
classifyNumber(50);
classifyNumber(9);



// 

function printMultiplicationTable(n, r) {
    for (let i = r; i > 0; i--) {
        console.log(`${n} * ${i} = ${n * i}`);
    }
}
printMultiplicationTable(5,6);


// 


function  getDayName(){
    switch(n){
        case 1:
            console.log("z")
    }
}