// function counthevowel(sentence){
//     let vowel="aeiouAEIOU";
//     let words=sentence.split(" ");
//     let count=0;
    
//     for( let word of words ){
//        if(vowel.includes(word[0])){
//               count++;
//        }
//     }
//     console.log(count)
    
// }
// counthevowel("hello iam sankar auujj hw are you")


// function countDistinctVowels(str) {
//     var words=str.toLowerCase();
//     var split=words.split("");
//       for(var word of split){
//         var count=[];
//         if ("aeiou".includes(word)){
            
//             count.push(word);
//         }
//     }
//     console.log(count.length);
//    }    

// countDistinctVowels("hello");


//  function askey(str){
//      let words=str.split("");
//      let sum=0;
//      for(let word of words){
//          sum+=word.charCodeAt(0);
//      }
//      console.log(sum);
//  }
//     askey("hello");


// function printStar(n) {
//     // Enter you code HERE
//     for(i=1;i<n;i++){
//         let line="";
  
//         for(j=1;j<=n-i;j++){
//             line+=" ";
//         }
//         for(k=1;k<=i;k++){
//             line+=i+" ";
//         }
//         console.log(line);
        
//     }
//     for(i=n;i>=1;i--){
//         let line="";
        
//         for(j=1;j<=n-i;j++){
//             line+=" ";
//         }
//         for(k=1;k<=i;k++){
//             line+=i+" ";
//         }
//         console.log(line)
//     }
    
// }
// printStar(5);

// function diamond(n){
//     for(i=1;i<=n;i++){
//         let row="";
//         for(j=1;j<=n-i;j++){
//             row+=" ";
           
//         }
//         for(k=1;k<=i*2-1;k++){
//             if(i===1  || k===1 || k===i*2-1){
//                 row+="*"
//             }
//             else{
//                 row+=" "
//             }    
//         }
//         console.log(row)
//     }
//     for(l=n-1;l>0;l--){
//         let row="";
//         for(m=1;m<=n-l;m++){
//             row+=" ";
//         }
//         for(n=1;n<=l*2-1;n++){
//             if(l===1 || n===1 || n===l*2-1){
//                 row+="*"
//             }
//             else{
//                 row+=" "
//             }
//         }
//         console.log(row)
//     }
// }
// diamond(5)


// function ascii(str){
//     let words=str.split("");
//     let sum=0;
//     for(let word of words){
//         sum+=word.charCodeAt(0);
//     }
//     console.log(sum);
// }


// function printingasciivalueofaletter(str){
//     let words=str.split("");
//     let sum=[];
//     for(let word of words){
//         let ascii=word.charCodeAt(0);
//         sum.push(ascii);
//     }
//     console.log(sum);
// }
// printingasciivalueofaletter("hello");

// function generatingrandomnumber(){
//     let random=Math.floor(Math.random()*100);
//     console.log(random);
// }
// generatingrandomnumber();

// function comparingtwoobjects(obj1,obj2){
//     let keys1=Object.keys(obj1);
//     let keys2=Object.keys(obj2);
//     if(keys1.length!==keys2.length){
//         return false;
//     }
//     for(let key of keys1){
//         if(obj1[key]!==obj2[key]){
//             return false;
//         }
//     }
//     return true;
// }
// let obj1={name:"sankar",age:23};
// let obj2={name:"sankar",age:23};
// console.log(comparingtwoobjects(obj1,obj2));

// function creatingobjectfromarray(arr){
//     let obj={};
//     for(let i=0;i<arr.length;i++){
//         obj[i]=arr[i];
//     }
//     console.log(obj);
// }
// creatingobjectfromarray([1,2,3,4,5]);

//Find the non repeating number in an array.
// function nonrepeatingnumber(arr){
//     let obj={};
//     for(let i=0;i<arr.length;i++){
//         if(obj[arr[i]]){
//             obj[arr[i]]++;
//         }
//         else{
//             obj[arr[i]]=1;
//         }
//     }
//     for(let key in obj){
//         if(obj[key]===1){
//             console.log(key);
//         }
//     }
// }
// nonrepeatingnumber([2,2,3,3,4,5,5,6,6,7,7,8,8,9,9,10,10]);

//Find the max sum of two consecutive numbers in an array and print the max value of it?

//  function maxsumoftwoconsecutivenumbers(arr){
//         let max=0;
//         for(let i=0;i<arr.length-1;i++){
//             let sum=arr[i]+arr[i+1];
//             if(sum>max){
//                 max=sum;
//             }
//         }
//         console.log(max);
//     }
//     maxsumoftwoconsecutivenumbers([2,3,4,5,6,7,8,9,10]);

//Find the nearest Palindtome of the given number in best complexity
//  function nearestpalindrome(num){
//         let i=num;
//         while(true){
//             i++;
//             if(ispalindrome(i)){
//                 console.log(i);
//                 break;
//             }
//         }
//     }
//     function ispalindrome(num){
//         let str=num.toString();
//         let reversed=str.split("").reverse().join("");
//         return str===reversed;
//     }

//     nearestpalindrome(123); 
//     nearestpalindrome(12348);

//Find duplicates in array.

// function gcd(a,b){
//     if(b===0){
//         return a;
//     }
//     return gcd(b,a%b);
// }
// function lcm(a,b){    
//     return a*b/gcd(a,b);
// }

function AvgCount(arr){
    let sum=0;
    let count=0;
    for(i=0;i<=arr.length;i++){
        sum+=arr[i];
    }
    let avg=sum/arr.length;
    console.log(avg)
    for(i=0;i<=arr.length;i++){
        if(arr[i]>avg){
            count++;
        }
    }
    console.log(`The avg is ${avg} and the count is ${count}`);
}

AvgCount([1,2,3,4,5,6,7,8,9,10]);

