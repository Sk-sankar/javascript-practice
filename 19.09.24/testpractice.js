// let marks=[10,20,70,80,30];
// let x=0;
// let result="";
// for(i=0;i<marks.length;i++){
//      x+=marks[i];
    
// }
// result=x/marks.length;
// console.log(result);


// let p=100;
// let r=5;
// let n=4;
// let v=[p*n*r/100];
// console.log(v);


// function addLengthAsFirstElement(array) {
//     array.unshift(array.length);
//     return array;
// }
// let array=["hari","deva","arun","maha"];
// let result1= addLengthAsFirstElement(array);
// console.log(result1);


// let marks1=[440,560,487,416,512];
// let max=Math.max(...marks1);
// console.log(max);


// let decimal=[52,34,56,];
// let binary=decimal.toString(2);
// console.log(binary);



// let boolen1=[true,false,true];
// let boolen2=[false,true,true];
// let c=[];
// let length=boolen1.length
// for(i=0;i<length;i++){
//     a=boolen1.pop();
//     b=boolen2.pop();
//     ans=a&&b;
//     c.push(ans);
// }
// let result2=c.reverse();
// console.log(result2);


// let arr1=[20,30,40];
// let arr2=[40,50,60];
// let arr3=[];
// let len=arr1.length;
// for(i=0;i<len;i++){
//     a=arr1[i];
//     b=arr2[i];
//     c=b-a;
//     d=(c/a)*100;
//     arr3.push(d);
// }
// console.log(arr3);

let numbers = [1, 2, 3, 4];
let squares = numbers.map(function(num) {
    return num * numbers.length;
});
console.log(squares);





// You have an array of daily expenses for a week. Write a function that calculates the total expenses for the week.



let dailyExpences=[20,30,40,50];
let sum=0;

console.log("the daily expenses:"+dailyExpences);
for(i=0;i<dailyExpences.length;i++){
    sum+=dailyExpences[i];
}

console.log("the total expence of the week:"+sum);



let ages=[18,25,26,30,14];
let adults=ages.filter(function(age){
    return age>18;
});
adults.forEach(function(adult){
    console.log(adult)
});


function leapYear(n){
    if(n%4===0||n%400===0  ){
        console.log("Y");

    }
    else if(n%100===0){
        console.log("n")
    }
    else{
        console.log("N")
    }
}
leapYear(2000);


function countEvenNumbers(arra) {
    let count = 0;
    
    arra.forEach(num => {
        if (num % 2 === 0) {
            count++;
        }
    });
    
    return count;
}
let numb=[12,3,4,5,6,7,8,9,22,1,];
let result4=countEvenNumbers(numb);
console.log(result4);







