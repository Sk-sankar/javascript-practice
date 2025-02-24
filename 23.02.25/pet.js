// function binary(arr){
//     let left=0;
//     let right=arr.length-1;
//     while(left<right){
//         let mid=Math.floor((left+right)/2);
//         if(tar===arr[mid]){
//             return mid;
//         }
//         if(tar<arr[mid]){
//             right=mid-1;
//         }
//         else{
//             left=mid+1;
//         }
//     }
//     return -1;
// }

// function bubbleSort(arr){
//     let n=arr.length;
//     for(i=0;i<n;i++){
//         for(j=i+1;j<n-1;j++){
//             if(arr[i]>arr[j]){
//                 [arr[i],arr[j]]=[arr[j],arr[i]]
//             }

//         }
        
//     }
//     return arr;

// }
// console.log(bubbleSort([2,1,4,8,3,9]));

// function selection(arr){
//     let n=arr.length;
//     for(i=0;i<n;i++){
//         let mid=i;
//         for(j=i+1;j<n;j++){
//             if(arr[j]<arr[mid]){
//                 mid=j;
//             }
//         }
//         if(mid!==1){
//             [arr[i],arr[mid]]=[arr[mid],arr[i]];
//         }
//     }
//     return arr;
// }
// console.log(selection([3,6,2,8,22,64]));

// function insertion(arr){
// let n=arr.length;

// for(i=1;i<n;i++){
//     let key =arr[i];
//     let j=i-1;
//     while(j>=0 && arr[j]>key){
//         arr[j+1]=arr[j];
//         j=j-1;
//     }
//     arr[j+1]=key
// }
// return arr;
// }
// console.log(insertion([3,5,2,66,22,21]));

// function merge(left, right) {
//     let result = [];
//     let lefti = 0, righti = 0;

//     while (lefti < left.length && righti < right.length) {
//         if (left[lefti] < right[righti]) {
//             result.push(left[lefti]);
//             lefti++;
//         } else {
//             result.push(right[righti]); // Fixed missing right element handling
//             righti++;
//         }
//     }

//     // Concat remaining elements of left and right
//     return result.concat(left.slice(lefti)).concat(right.slice(righti));
// }

// function mergesort(arr) {
//     if (arr.length <= 1) return arr; // Base case

//     let mid = Math.floor(arr.length / 2);
//     let left = arr.slice(0, mid);
//     let right = arr.slice(mid);

//     return merge(mergesort(left), mergesort(right));
// }

// console.log(mergesort([0,1,0,1,0,1,1,1]));

// function quicksort(arr){
//     if(arr.length<=1){
//         return arr;
//     }
//     let pivot=arr[arr.length-1];
//     let left=[];
//     let right=[];
//     for(i=0;i<arr.length-1;i++){
//         if(arr[i]<pivot){
//             left.push(arr[i]);
//         }
//         else{
//             right.push(arr[i]);
//         }
//     }
//     return [...quicksort(left),pivot,...quicksort(right)];
// }
// console.log(quicksort([0,1,0,1,1,0,1]))


// function fibonacci(n){
//     if(n<=1){
//         return n;
//     }
//     return fibonacci(n-1)+fibonacci(n-2);
   
// }

// function fibo(n){
//     let a=0;
//     let b=1;
//     let c=0;
//     let co=[0,1]
//     for(i=2;i<=n;i++){
//         c=a+b;
//         a=b;
//         b=c;
//         co.push(c)
        
//     }
//     console.log( co)
    
// }
// fibo(10);



// function factorial(n){
//     if(n===0){
//         return 1;
//     }
//     return n*factorial(n-1);
// }

// function prime(n){
//     if(n<=1) return false;
//     for(i=2;i<Math.sqrt(n);i++){
//         if(n%i===0){
//             return false;
//         }
//     }
//     return true;
// }
// function check(Arr){
//     let result=[];
//     for(num of Arr){
//         if(prime(num)){
//             result.push(num)
//         }
//     }
//     return result;
// }
// console.log(check([1,2,3,4,5,6,7,8,9,10]));


// function palindrom(str){
//     let reversed=str.split("").reverse().join("");
//     if(reversed===str){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// console.log(palindrom("madygam"));

// function binary(arr,tar){
//     let left =0;
//     let right=arr.length-1;
//     while(left<right){
//         let mid =Math.floor((left+right)/2);
//         if(arr[mid]===tar){
//             return mid;
//         }
//         else if(arr[mid]<tar){
//             left=mid+1;
            
//         }
//         else{
//             right=mid-1;
//         }
//     }
//     return-1
// }
// console.log(binary([2,43,3,5,4,6],5));

function armstrong(num){
    let sum=0;
    let dig=num.toString().split("").map(Number);
    let power=dig.length;

    for(let digit of dig){
        sum+=Math.pow(digit,power)
    }
   return sum===num

}
armstrong(153)