
let totalSum = 0;

for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    totalSum += i;
  }
}

console.log("Total sum of even numbers between 1 and 20 is:", totalSum);


// 
function printMultiplesOfThree(n) {
    for (let i = 1; i <= n; i++) {
      console.log(i * 3);
    }
  }
  let n = 5; 
  printMultiplesOfThree(n);


//   

let teamScore = 180;    
let targetScore = 200;  
let oversLeft = 5;      


if (teamScore >= targetScore) {
  console.log("Team wins by DL method");
} else if (teamScore < targetScore && oversLeft > 0) {
  console.log("Match to be continued");
} else if (teamScore < targetScore && oversLeft === 0) {
  console.log("Team loses by DL method");
}