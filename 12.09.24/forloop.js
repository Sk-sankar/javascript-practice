

function printOddNumbers(n) {
    for (let i = 0; i < n; i++) {
        console.log(2 * i + 1);
    }
}

printOddNumbers(10);



// Print the first n multiples of 3 for if n = 5,  print 3 6 9 12 15 in separate line


function add(n){
    for(a=1;a<=n;a++){   
        console.log(a*3);
    }
}
add(5);

// 


function number(n){
    console.log(Array(n).fill(n).join(""));


}

number(7);


// 

function palindrome(num) {
    let numStr = num.toString();
    let result = numStr.split('').reverse().join('');
    return numStr === result;
}

console.log(palindrome(123)); 

// 



function splitNum(n){
    let num=n.toString();
    let result=num.split("");
    return result;
}
console.log(splitNum(20));


// 

let n = 13;

for (let i = 2; i <= n; i += 2) {
    console.log(i);
}





function sumNaturalNumbers(n) {
    let sum = 0;
    let i = 1;
    let end=100;

    while (i <= n) {
        sum += i;
        i++;
    }

    return sum;
}
console.log(sumNaturalNumbers(10))