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

// function flattenarray(arr){
//     let result=[];
//     for(let i=0;i<arr.length;i++){
//         if(Array.isArray(arr[i])){
//             result=result.concat(flattenarray(arr[i]));
//         }
//         else{
//             result.push(arr[i]);
//         }
//     }
//     return result;
// }
// let arr=[1,2,3,[4,5,6,[7,8,9]]];
// console.log(flattenarray(arr));




// function min_max(arr){
//         let sum=0;
//         let sum1=0;
//         for(i=0;i<arr.length;i++){
//             sum+=arr[i];
//         }
//         console.log(sum)
//         for(j=1;j<=arr.length;j++){
//             sum1+=arr[i]
//         }
//         console.log(sum1)
// }
// min_max([2,3,4,6,7])
 

// function printPattern(rows, current = 1, spaces = '', stars = '') {
//     if (current > rows) return; 
    
//     spaces = '';
//     for (let i = 0; i < rows - current; i++) {
//         spaces += ' ';
//     }
    
//     stars = '';
//     for (let j = 0; j < current; j++) {
//         stars += '* ';
//     }
    
//     console.log(spaces + stars.trim());
    
//     printPattern(rows, current + 1);
// }

// printPattern(4);

// function printPattern(rows, current = 1, stars = '') {
//     if (current > rows) return; // Base case: Stop when current exceeds rows
    
//     stars = '';
//     for (let j = 0; j < current; j++) {
//         stars += '* ';
//     }
    
//     console.log(stars.trim());
    
//     printPattern(rows, current + 1);
// }

// printPattern(4);


// function printPattern(rows, current = 1) {
//     if (current > rows) return; // Base case: Stop when current exceeds rows
    
//     let spaces = '';
//     for (let i = 0; i < rows - current; i++) {
//         spaces += ' ';
//     }
    
//     let stars = '';
//     for (let j = 0; j < current; j++) {
//         stars += '*';
//     }
    
//     console.log(spaces + stars);
    
//     printPattern(rows, current + 1);
// }

// printPattern(4);


// function printPattern(rows, start = 1, spaces = '', stars = '') {
//     if (current > rows) return; // Base case: Stop when current exceeds rows
    
//     if (spaces.length < rows - start) {
//         printPattern(rows, start, spaces + ' ', stars);
//         return;
//     }
    
//     if (stars.length < start) {
//         printPattern(rows, start, spaces, stars + '*');
//         return;
//     }
    
//     console.log(spaces + stars);
//     printPattern(rows, start + 1);
// }

// printPattern(4);


function towersOfHonai(n,s,t,d){
    if(n==1){
        console.log("move disk "+s+"to"+d)
    }
    else{
        towersOfHonai(n-1,s,d,t);
        console.log("move disk "+s+"to"+d)
        towersOfHonai(n-1,t,s,d)
    }

}
towersOfHonai(7,1,2,3)

function minmaxsum(arr){
    let sum=0;
    let sum1=0;
    let result=[]
    for(i=0;i<arr.length-1;i++){
        sum+=arr[i]   
    }
    result.push(sum)
    for(j=1;j<=arr.length-1;j++){
         sum1+=arr[j]
         
    }
    result.push(sum1)
    console.log(result.join(" "))
    
    

}
minmaxsum([2,3,4,6,4])