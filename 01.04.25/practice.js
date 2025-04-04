// function fib(n){
//     n1=0;
//     n2=1;
//     for(i=1;i<n;i++){
//         sum=n1+n2;
//         n1=n2;
//         n2=sum;
//     }
//     console.log(n1)
// }fib(5);

// function fibbo(n){
//     let arr=[]
//     for(i=0;i<=n;i++){
//         if(n<=1){
//             return n;
//         }
//         else{
//             arr.push( fibbo(n-1)+fibbo(n-2))
//         }
//     }
//     console.log(arr)
// }
// fibbo(4)


// function prime(num){
//     if(num<=1){
//         return false
//     }
//     for(i=2;i<=Math.sqrt(num);i++){
//         if(num%i==0){
//             return false
//         }
//     }
//     return true;
// }


// let a="ewbf jsdhbh sa asa as asa da dad dse fer "
// console.log(a.replaceAll(" ","").split("").reverse().join(""))


// function fac(n){
//     if(n<=1){
//         return n
//     }
//     else{
//         return n*fac(n-1)
//     }
// }
// console.log(fac(4))

// let num=123;
// let len=num.toString().split("")
// let sum=0;

// for(i=0;i<=len.length;i++){
//     sum+=Number(len[i])**len.length 
// }
// if(sum==num){
//     console.log(sum)
//     console.log("it is armstromg number")
// }
// else{
//     console.log(sum)
//     console.log("not armstrong")
// }


// console.log(Math.floor(Math.random()*100))

// function accorance(arr){
//     let obj={};
//     for(i=0;i<arr.length;i++){
//         if(obj[arr[i]]){
//             obj[arr[i]]+=1
//         }
//         else{
//             obj[arr[i]]=1;
//         }
//     }
//     console.log(obj)
// }
// console.log(accorance([12,3,2,32,4,3,23232,2,3,3,2,3,23,2,2,2,2,23,5]))

//=================sort=======================//

// function bubble(arr){
//     let n= arr.length;
//     for(i=0;i<n;i++){
//         for(j=0;j<n-i-1;j++){
//             if(arr[j]>arr[j+1]){
//                 [arr[j],arr[j+1]]=[arr[j+1],arr[j]];
//             }
//         }
//     }
//     return arr;
// }
// console.log(bubble([2,7,4,1,3]));


// function selection(arr){
//     let n=arr.length;
//     for(i=0;i<n;i++){
//         let mid=i;
//         for(j=i+1;j<n;j++){
//             if(arr[mid]>arr[j]){
//                 mid=j
//             }
//         }
//         if(mid!==i){
//             [arr[i],arr[mid]]=[arr[mid],arr[i]]
//         }
//     }
    
//     return arr;
// }
// console.log(selection([2,7,4,1,3]));


// function insertion(arr){
//     let n=arr.length;
//     for(i=1;i<n;i++){
//         let temp=arr[i]
//     let j=i-1;
//     while(j>=0 && arr[j]>temp){
//         arr[j+1]=arr[j]
//         j--;
//     }
//     arr[j+1]=temp;
//     }
//     return arr

// }
// console.log(insertion([3,6,2,72,7,23]))

//reverse a number

// let num=1234
// console.log(Number(num.toString().split("").reverse().join("")))



//=============================== todays questions==================//
// fibonnaci series

// function fibbonaci(n){
//     let arr=[0,1]
//     for(i=2;i<=n;i++){
//         arr.push(arr[i-1]+arr[i-2])
//     }
//     console.log(arr)
// }
// fibbonaci(10)

//fibonaci value

// function fibbo(n){
//     if(n<=1){
//         return n
//     }
//     else {
//         return fibbo(n-1)+fibbo(n-2)
//     }
// }
// console.log(fibbo(5))


//sum without operation

// function add(a,b){
//     if (b==0){
//         return a
//     }
//     else{
//         return add(a^b,(a&b) << 1)
//     }

// }
// console.log(add(3,4))


//average

// let arr=[2,4,11,42,21]
// let sum=0
// for(i=0;i<arr.length;i++){
//     sum+=arr[i];
// }
// console.log(sum)
// let aver=sum/arr.length
// console.log(aver)

//add even checker


// let n=9;
// if(n%2==0){
//     console.log("its even")
// }
// else{
//     console.log("its not even")
// }

//factorial

// function fac(n){
//     if(n<=1){
//         return n
//     }
//     else{
//         return n*fac(n-1)
//     }
// }
// console.log(fac(4))

//prime number checker

// function prime(num){
//     if(num<=1){
//         return false
//     }
//     for(i=2;i<Math.sqrt(num);i++){
//         if(num%i==0){
//              return false
//         }
//     }
//     return true
// }
// console.log(prime(5))

//armstrong number

// function armstromg(num){
//     let numarr=num.toString().split("")
//     var sum=0;
//     for(i=0;i<numarr.length;i++){
//         sum+=Number(numarr[i])**numarr.length
//     }
    

// if(sum==num){
//     console.log("it is a armstrong number")
// }
// else{
//     console.log("noty")
// }
// }
// armstromg(153)



//gcd

// function gcd(a,b){
//     while(b!==0){
//         let temp=b;
//         b=a%b;
//         a=temp
//     }
//     return a
// }
// console.log(gcd(18,4))

// function lcm(a,b){
//     return Math.abs(a*b)/gcd(a,b)
// }
// console.log(lcm(3,2))

//find the max

let arr=[4,3,2,32,4,22,234,234,225,534]
let max=arr[0]
for(i=0;i<arr.length;i++){
    if(arr[i]>max){
        max=arr[i]
    }
}
console.log(max)



//find min

// let arr=[4,3,2,32,4,22,234,234,225,534]
// let min=arr[0]
// for(i=0;i<arr.length;i++){
//     if(arr[i]>min){
//         min=arr[i]
//     }
// }
// console.log(min)


// array sum

// let arr=[4,3,2,32,4,22,234,234,225,534]
// let sum=0
// for(i=0;i<arr.length;i++){
//     sum+=arr[i]
// }
// console.log(sum)



// function mergesort(arr){
//     if(arr.length<=1){
//         return arr;
//     }
//     let mid=Math.floor(arr.length/2);

//     let left_nums=mergesort(arr.slice(0,mid))
//     let right_nums=mergesort(arr.slice(mid))

//     return merge(left_nums,right_nums)
// }

// function merge(left,right){
//     let merged=[];
//     let i,j=0

//     while(i<left.length && j <right.length){
//         if(left[i]<right[j]){
//             merged.push(left[i]);
//             i++
//         }
//         else{
//             merged.push(right[j]);
//             j++
//         }
//     }
//     return merged.concat(left.slice(i)).concat(right.slice(j))
// }
// console.log(mergesort([3,7,3,6,222,34,5,4,54,544]))


// let myPromise = new Promise((resolve, reject) => {
//     let success = true; // Simulating success/failure

//     setTimeout(() => {
//         if (success) {
//             resolve("✅ Operation Successful!");
//         } else {
//             reject("❌ Operation Failed!");
//         }
//     }, 2000);
// });

// // Consuming the Promise
// myPromise
//     .then(result => console.log(result)) // Executes if resolved
//     .catch(error => console.log(error)); // Executes if rejected


