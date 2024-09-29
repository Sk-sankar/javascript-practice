let a=[5,7,15,23,30,9];
for(i=0;i<a.length;i++){
    if(a[i]%5===0){
        console.log(a[i]);
    }
};

// 2. Given an array of integers and 2 numbers a and b (a < b) count the number of elements in the array which are between a and b

let integer=[3,6,8,11,13,32,21];
let b=5;
let c=15;
for(i=0;i<integer.length;i++){
    if(integer[i]>b && integer[i]<c){
        console.log(integer[i]);
    }
};



// 3. Given an array of strings count the number of elements which are starting with a vowel


let stringsArray = ["apple", "banana", "orange", "umbrella", "grape", "elephant"];
function startsWithVowel(str) {
    return /^[aeiouAEIOU]/.test(str);  
    }
let count = stringsArray.filter(startsWithVowel).length;
console.log(`Number of elements starting with a vowel: ${count}`);



// 4. Given an array of float find the average of the numbers.



let array=[12.6,78.6,30.8,79.7];
let sum=0;
for(i=0;i<array.length;i++){
    sum+=array[i];
    div=sum/array.length; 
}
console.log(div);