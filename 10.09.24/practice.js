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

}


// problem2


let count = 1;
while (count <= 100) {
 console.log("Counting down: " + count);
 count = count + 1;
}



// problem3


let temperature = 30;
if (temperature<=20) {
 console.log("It's cold outside.");
} 
else {
 console.log("It's warm outside.");
}



// problem4


checkNumber(-5);
checkNumber(0);
checkNumber(10, 20);
function checkNumber(num) {
  if (num < 0){
    console.log("Negative");
  }
  else if(num>0){
    console.log("positive");
  }
  else  
   {
    console.log("zero");
   }
}

