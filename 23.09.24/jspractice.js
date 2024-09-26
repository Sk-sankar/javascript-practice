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



// sum7
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



// sum8


function printEvenNumbers(n){
    for(i=1;i<=n;i++){

      if(i%2==0){
        console.log(i)
    }
}
}
printEvenNumbers(10);


// sum9

function sumNumbers(n) {
    let sum = 0;
    let i=1
     while (i <=n) {
      sum += i;
      i++;
    }  return sum;
  }
  console.log(sumNumbers(10));


//   sum10
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



// sum11

function printMultiplicationTable(n, r) {
    for (let i = r; i > 0; i--) {
        console.log(`${n} * ${i} = ${n * i}`);
    }
}
printMultiplicationTable(5,6);


// sum12


function  getDayName(){
    switch(day){
        case 1:
            console.log("Monday ");
            break;
        case 2:
            console.log("Tuesday");
            break;
        case 3:
            console.log("wednesday");
            break;
        case 4: 
            console.log("Thursday");
            break;
        case 5:
            console.log("Friday");
            break;
        case 6:
            console.log("Saturday");
            break;
        case 7:
            console.log("Sunday");
            break;
        default:
            console.log("day not found");
            break;    

    }
}
let day=5;
getDayName();


// sum13

let lapCount = 0;
let totalLaps = 10;
while (lapCount < totalLaps) {
    lapCount++;
    console.log(`Lap ${lapCount} completed!`);
}
console.log("The robot has completed all laps!");



// sum14

let batteryLevel=100;
let Battery=20;
while(batteryLevel>=Battery){
    console.log(`The battery is in ${batteryLevel}%`);
    batteryLevel-=5;
}
console.log("the battery is low");



// sum15
let Flight=1000;
while(Flight>0){
    console.log(`the flight at ${Flight} feet`);
    Flight-=10;
}
console.log("the flight arived");



 //sum16


 function robot(dir){
    switch(dir){
        case "north":
            console.log("move in north");
            break;
        case "east":
            console.log("move in east ");
            break;
        case "west ":
            console.log("move in west ");
            break;
        case "south":
            console.log("move in south ");
        default:
            console.log("direction not found");   
    }
 }
 let dir="north";
robot(dir);



// sum17


function getRunway(destination) {
    let runway="";

    switch (destination.toLowerCase()) {
        case 'new york':
            runway = "Runway 1";
            break;
        case 'los angeles':
            runway ="Runway 2";
            break;
        case 'USA':
            runway = "Runway 3";
            break;
        case 'canada':
            runway = "Runway 4";
            break;
        case 'paskisthan':
            runway = "runway5";
            break;
        case 'delhi':
            runway="runway 6";    
            break;
        default:
            runway = 'Unknown destination. No assigned runway.';
            break;
    }

    return runway;
}
console.log(getRunway("new york"));

