// // function fibbonaci(n) {
// //     if (n <= 1) {
// //         return n;
// //     }
// //     return fibbonaci(n - 1) + fibbonaci(n - 2);
// // }
// // console.log(fibbonaci(10));



// // function fibo(n){
// //     let fibo=[0,1];
// //     for(let i=2;i<=n;i++){
// //         fibo[i]=fibo[i-1]+fibo[i-2];
// //     }
// //     return fibo;
// // }
// // console.log(fibo(10));


// function nonrepeating(str){
//     let count={};
//     for(let i=0;i<str.length;i++){
//         let char=str[i];
//         if(count[char]){
//             count[char]++;
//         }
//         else{
//             count[char]=1;
//         }
//     }
//     for(let j in count){
//         if(count[j]===1){
//             return j;
//         }
//     }
// }
// console.log(nonrepeating("aabbccddeeffgghhi"));

function flattenarray(arr){
    let result=[];
    for(let i=0;i<arr.length;i++){
        if(Array.isArray(arr[i])){
            result=result.concat(flattenarray(arr[i]));
        }
        else{
            result.push(arr[i]);
        }
    }
    return result;
}
let arr=[1,2,3,[4,5,6,[7,8,9]]];
console.log(flattenarray(arr));





