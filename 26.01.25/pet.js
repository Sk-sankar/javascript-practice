// function fatorial(n)
// {
//     if(n==0 ||n==1){
//         return 1
//     }
//     else{
//         return n*fatorial(n-1)
//     }
// }
// let result  = fatorial(5)
// console.log(result)



// / prime number 


// function prime(num){
//     if(num<=1) return false
//     for(i=2;i<=Math.sqrt(num);i++){
//         if(num%i==0) return false

//     }
//     console.log(num)
//     return true
// }
// console.log(prime(3))

// // function check (arr){
// //     let emply=[]
// //     for(num of arr){
// //         if( prime(num)){
// //             emply.push(num)
// //         }
// //     }
// //     return emply
// // }
// // console.log(check([7]))



//  gcd 

// function gcd(a,b){
//    while(b!==0){
//     let temp=b;
//     b=a%b;
//     a=temp;
//    }
//    return a
// }

// function lcm (a,b){
//     return Math.abs(a*b)/gcd(a,b)
// }
// console.log(lcm(6,3))

// function star(n,i=1,start=""){
//     if(n<i){
//         return;
//     }
//     if(start.length<i){
//         start+="*";
//         return  star(n,i,start)
//     }
//    console.log(start)
//    return star(n,i+1)
// }
// star(5)

// function factorial(n){
//     if(n<0) return -1
//     else if(n==0 || n==1)  return 1
    
//     return n*factorial(n-1)
// } 
// console.log(factorial(5))

// function star(n) {
 
//      if (n === 0) {
//         return "" ;
//     }
//     console.log("*".repeat(n));
//     return "*"+star(n-1); 

// }
// let result = star(5);

// function printRightAlignedPattern(v) {
//     for (let i = 1; i <= 3; i++) {
//         let spaces = ' '.repeat(v); // Create a string of spaces for right alignment
//         console.log(spaces + '* * *'); // Print spaces followed by the stars
//     }
// }

// // Example usage
// const v = 3; // Adjust this value for the amount of leading spaces
// printRightAlignedPattern(v);



// function number(n){
//     for(i=1;i<n;i++){
//         let space=' '.repeat(n-i);
//         let num=("* ").repeat(i);
//         console.log(space+num.trim());
//     }
//     for(i=2;i<=n;i++){
//     let space=' '.repeat(i);
//     let num=("* ").repeat(n- i);
//     console.log(space+num.trim());
//     }
// }number(5)

// function star(c,n){
//     let x="";
//     // for(i=1;i<=n;i++){
//     //      x+=c
//     //      console.log(x)
//     // }
//     for(i=n;i>1;i--){
//         x+=c
//         console.log(x)
//     }

// }
// star("*",5)




// function printRightAlignedPattern(v) {
//     for (let i = 1; i <= v; i++) {
//         let spaces = ' '.repeat(i);
//         console.log(spaces + '* * *'); 
//     }
//     for(let i=3;v>=1;i--){
//         let spaces = ' '.repeat(i);
//         console.log(spaces+ '* * *') 
//     }
// }

// const v = 3; 
// printRightAlignedPattern(v);

// function printRightAlignedPattern(v) {
//     // First Part: Incrementing Spaces
//     for (let i = 1; i < v; i++) {
//         let spaces = ' '.repeat(i); 
//         console.log(spaces + '* * *'); 
//     }

//     // Second Part: Dec
//     // rementing Spaces
//     for (let i = v; i >=1; i--) {
//         let spaces = ' '.repeat(i);
//         console.log(spaces + '* * *'); 
//     }
// }

// const v = 3; 
// printRightAlignedPattern(v);




// function star(n){
//     let c="*";
//     let x=""
//     for(i=1;i<n;i++){
//         x+=c;
//         console.log(x)
//     }
//     for(i=n;i>=1;i--){
//         x=x.slice(0,-1);
//         console.log(x)
//     }

// }
// star(5)


// function binary(arr ,target){
    
//     let left =0;
//     let right=arr.length-1;
//     while(left <=right){
//         let mid=Math.floor((left+right)/2);

//         if(arr[mid]==target){
//             return mid;
//         }
//         else if(arr[mid]<target){
//             left=mid+1
//         }
//         else{
//             right=mid-1
//         }
//     }
//     return -1
// }
// console.log(binary([2,3,6,5,8,7,9],2))



// function bubbleSort(arr){
//       let n =arr.length;
//       for(let i=0;i<n;i++){
//         for(let j=i+1;j<n;j++){
//             if(arr[i]>arr[j]){
//                 [arr[i],arr[j]]=[arr[j],arr[i]]
//             }
//         }
//       }
//       return arr
// }
// console.log(bubbleSort([6,4,7,3,2]))


// function selectionSort(arr){
//     let n=arr.length;
//     for(i=0;i<n;i++){
//         let mid=i;
//         for(j=i+1;j<n;j++){
//             if(arr[j]<arr[mid]){
//                 mid=j
//             }
//         }
//         if(mid !==1){
//             [arr[i],arr[mid]]=[arr[mid],arr[i]]
//         }
//     }
//     return arr
// }
// console.log(selectionSort([4,3,6,2,7]))


// function star(m){
//     for(i=1;i<m;i++){
//         let space=" ".repeat(m-i);
//         let start="* ".repeat(i);
//         console.log(space+start)
//     }
//     for(i=2;i<m;i++){
//         let space=" ".repeat(i)
//         let start="* ".repeat(m-i);
//         console.log(space+start)
//     }
// }
// star(5)