
function printStar(n) {
    for(let i = 1; i <= n; i++) {
        let output = getSpaces(n - i);
        let pattern = getNumSequence(i);
        console.log(output + pattern);

    }

    // Reverse print
    for(let i = n - 1; i >=1; i--) {
        let output = getSpaces(n - i);
        let pattern = getNumSequence(i);
        console.log(output + pattern);
    }

}

function getSpaces(n) {
    let outputStr = "";
    for(let i = 1; i <= n; i++) {
        outputStr += " ";
    }
    return outputStr;
}

function getNumSequence(n) {
    let outputStr = "";
    for(let i = 1; i <= n; i++) {
        outputStr += i + " ";
    }
    return outputStr;
}
printStar(5);





function calculateTotal(cart) {
    let total = 0;
  
    // Loop through each item in the cart
    for (let item of cart) {
      let [code, quantity] = item.split("");
      quantity = parseInt(quantity, 10);  // Convert quantity to a number
  
      // Check the code and calculate the total based on the item
      if (code === "M") {
        total += 500 * quantity;  // Mug
      } else if (code === "J") {
        total += 3000 * quantity; // Jeans
      } else if (code === "T") {
        total += 1500 * quantity; // T-shirt
      } else if (code === "P") {
        total += 10 * quantity;   // Pen
      }
    }
  
    console.log(total);
  }
  calculateTotal(["M3","J2","T3"])



  function countDistinctVowels(str) {
    const vowels = "aeiou";
    let distinctVowels = "";
  
    for (let char of str) {
      if (vowels.includes(char) && !distinctVowels.includes(char)) {
        distinctVowels += char;
      }
    }

  
    console.log(distinctVowels.length);

}
countDistinctVowels("hello");


function large(n){
    let a= Math.min(...n)
    console.log(a)
}
large([1,2,3,4,5,6]);


function re(n){
    let vowel="aeiou";
    let dis="";
    for(let char of n){
        if(vowel.includes(char) && !dis.includes(char)){
            dis+=char;
        }
    }
    console.log(dis.length)
}
re("hellooo");

function row(n){
    let ans=n.split("").reverse().join("");
    if(n==ans){
        console.log
        (ans+" "+"this is a palindrom")
    }
    else{
        console.log("not")
    }

}
row("momo")