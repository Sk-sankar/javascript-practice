// Write a program to create an array of 5 exam scores. Calculate and print the average of the scores.


let marks=[80,98,96,90,78];
let sum=0;
for(i=0;i<marks.length;i++){
    sum+=marks[i];
 div=sum/marks.length;
}

console.log(div);

// You have an array of test scores for 7 students. Write a program to find and print the highest score using the Math.max() function along with the spread operator.

let tests=[417,463,487,502];
let high=Math.max(...tests);
console.log(high);


// Write a program that stores an array of 3 decimal numbers. Convert each number to its binary equivalent using the toString(2) method and print the binary values.

let decimal=[10.5,30.5,55.2];
let binary=decimal.toString(2);
console.log(binary);



// Create an array of 10 objects with keys principal, rateOfInterest and noOfYears. Find the simple interest for each array object and store it in a new array. Print this array.

let details = [
    { principal : 10000, rateOfInterest : 5, noOfYears: 4},
    { principal : 15000, rateOfInterest : 4, noOfYears: 3},
    ];

let si=details.map(intrest=>{
    let result=(intrest.principal*intrest.rateOfInterest*intrest.noOfYears)/100;
    return result
});
console.log(si);x


// 


let students = [
    { subject1Marks: 80, subject2Marks: 90, subject3Marks: 70 },
    { subject1Marks: 60, subject2Marks: 50, subject3Marks: 65 },
    ];
let add=students.map(sum=>{
    let odd=sum.subject1Marks+sum.subject2Marks+sum.subject3Marks;
    return odd;
});
console.log(add);



// 

let expenses = [
    { rent: 1000, groceries: 500, utilities: 200 },
    { rent: 800, groceries: 400, utilities: 150 },
    ];

let totalprice=expenses.map(sum=>{
    let total=sum.rent+sum.groceries+sum.utilities;
    return total;
});
console.log(totalprice);    



// 


