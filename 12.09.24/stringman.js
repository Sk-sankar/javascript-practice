let studentName = "jane doe";
// let formattedName = studentName.trim().replace("jane", "Jane").replace("doe", "Doe");
// console.log(formattedName.toUpperCase());
console.log(studentName.length);



let text = "Welcome to the world of JavaScript!";
let position = text.indexOf("JavaScript");

console.log(position); 

function paragraph(a){
    

let text=a.indexOf("format");
let cut = a.slice(38,44);
console.log(text);
console.log(cut);
}
paragraph("Real-world example: You might need to format all text in uppercase");



function checking(a){

    let b= a.includes("might");
    return b;
    
}
console.log(checking("Real-world example: You might need to format all text in uppercase"));


function greater(a,b){
    
    console.log(a.length);
    console.log(b.length);
    if(a<b){
        console.log("yes");
    }
    else{
        console.log("no")
    }
}
greater("javascript", "python");



function clasifyNumber(num){
    if(num%3===0&&num%5===0){
        console.log("it is divisible by both 3 and 5");

    }
    else if (num%3===0){
        console.log("it is divisible by only 3");
    }
    else if(num%2===0&&num%4===0){
        console.log("its divisible by 2 and 4")
    }
    else if (num%5===0){
        console.log("it is divisible by only 5")
    }
    else{
        console.log("it is not divisible by both 3 and 5")
    }
}
clasifyNumber(15);
clasifyNumber(6);
clasifyNumber(8);
clasifyNumber(40);




function getsDay(n){
    if(n==1){
        console.log("sunday");
    }
    else if(n==2){
        console.log("Monday");
    }
    else if(n==3){
        console.log("Tuesday");
    }
    else if(n==4){
        console.log("Wednesday");
    }
    else if(n==5){
        console.log("Thursday");
    }
    else if(n==6){
        console.log("Friday");
    }
    else{
        console.log("Saturday");
    }
}
getsDay(5);



function tables(n,r){
    for(i=r;i>=1;i--){
        
        let x=n*i;
        console.log(`${n}*${i}=${x}`);
    }

}
tables(5,6);


function number(start,end){
   
    let row=""
    for (i=start;i>=end;i--){

        row+=i;
       
    }
}
number(10,1)
 console.log(row.trim());


// function numbers(a){
//     for(i=1;i<=a;i--){
// console.log(i);
//     }
//     // return `${i}`;
// }
// numbers(10);