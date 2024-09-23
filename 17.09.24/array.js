//    Create an array of 5 numbers and print the array.

let numbers=[1,2,3,4,5];
console.log(numbers);


//    Create an array of 4 strings. Print the 2nd and 4th elements.

let fruits=["apple","orange","grape","mango"];
console.log(fruits[3],fruits[1]);


//  Create an array of 3 elements. Change the 2nd element to "modified" and print the array.





let a=["one","four","Three"];
a[1]="Two";
console.log(a);


//  Write a program to print the length of an array containing 7 elements.

let names=["hari","Deva","gopi","Bala","Ram","Joe","fiyaz"];
console.log(names.length);



//    Write a program that iterates over an array of numbers and prints each element.



let names1=["hari","Deva","gopi","Bala","Ram","Joe","fiyaz"];
let x="";
for(i=0;i<names1.length;i++){
     
     x+=names1[i]+" "
   
}
console.log(x);






//  Write a program to sum all elements of an array of numbers and print the result.


let num=[1,2,3,4,5,6,7,8,9,10];
let sum=0;
function add(){
for(i=0;i<num.length;i++){
    sum+=num[i];
}
console.log(sum);
}
add();



//  Write a program that uses the `for...of` loop to print each element in an array of strings.


let user=["I","Bought","a","Phone"];
user.splice(3,0,"Vivo")
let n="";
for(let result of user){
    n+=result+" ";
}
console.log(n);


let students = [1,2,3,4,5];
for(let student of students){
    console.log(student);
}


// Write a program that uses the `forEach()` method to print each element in an array of integers.


let names2=["hari","Deva","gopi","Bala","Ram","Joe","fiyaz"];
let v="";
names2.forEach( function(a){
    v+=a+" ";
    
}
);
console.log(v);



//  Create an array of 10 numbers. Write a program to filter out only the odd numbers and print them.

let digits=[1,2,3,4,5,6,7,8,9,10];
for(i=0;i<digits.length;i++){
    if(digits[i]%2===1){
        console.log(digits[i]);
    }
}

//     Write a program that multiplies each element of an array by 2 using `map()` and prints the new array.


let  array = [1, 2, 3, 4, 5];

 let newArray = array.map(function(num){
    return num*2;
 });

console.log(newArray);



// Write a program that reverses an array using the `reverse()` method and prints the reversed array.


let movies = ["Inception", "Interstellar", "The Matrix"];
movies.reverse();
for (let i = 0; i < movies.length; i++) {
    console.log(movies[i]);
}


let sqnum=[1,2,3,4,5];
let square=sqnum.map(function(num){
    return num**2;
});
console.log(square.join(" , "));

// 



