// function boolean(n){
//     n=n.toLowerCase();
//     if(n==="a"){
//         return true;
//     }
//     else if(n>="d"&&n<="j"){
//         return false ;
//     }
    
//     return 1;
// } console.log(boolean("c"));



// let arr=[2,3,4,6,9,8];
// function array(arr){
//     sum=0;
// for(i=0;i<arr.length;i++){
// if(arr[i]%2===1){
//      sum+=arr[i];
// }
// } return sum;
// // if(sum%3===0){
// //     return true;
// // }
// // return false;

// }

// console.log(array(arr));



// ----------------------------------------------------------------------------

// function print(a,b){
//     var ar=[];
//     let sum="";
//     for(i=a;i<=b;i++){
//        ar.push(i);
//     }

//     for(j=0;j<ar.length;i++){
//         sum+=ar[j];
//     }
//     console.log(sum);
// } 
// print(2,20)


// 
// function number(n1,n2){
//     var a=[];
//     for(j=n1+1;j<=n2;j+=2){
//         a.push(j);
//      }
//     for(i=n1;i<=n2;i+=2){
//         a.push(i);
//     }
   
//     console.log(a);
// }number(1,10);


// 

let arr=[2,43,16,4,9,7];
let c=[];
for(i=0;i<arr.length;i++){
    let a=arr[i]
    if(a%2==0){
       c.push(a);
    }
}
for(i=0;i<arr.length;i++){
    let b=arr[i];
    if(b%2==1){
        c.push(b)
    }
}
console.log(c);


let n=5;
for(i=0;n<10000;i++){
    n*=5;
}console.log(n);


// 

let count=0;
let arr2=[5,6,8,11,13,15,16,19];
for(i=0;i<arr2.length;i++){
    if(arr2[i]%2===0){
        console.log(arr2[i])
        count++
    }
}console.log(count);



// 


let a

