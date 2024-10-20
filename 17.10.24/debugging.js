// function printTriangle(n) {
//     for (let i = 1; i <= n; i++) {
//         let row = '';
//         for (let j = 1; j <= i; j++) { 
//             row += '*';
//         }
//         console.log(row);
//     }
// }

// // Example usage
// let n = 5;
// printTriangle(n);

// 
// function start(n){
//     let star="";
//     for(i=1;i<=n;i++){
//          star+="*";
//          console.log(star);
//     }    
// }
// start(5)

// ------------------------

// function isPrime(num) {
//     if (num <= 1) {
//         return false;
//     }
//     for (let i = 2; i <=Math.sqrt(num); i++) {
//         if (num % i === 0) { 
//             return false;
//         }
//     }
//     return true;
// }

// // Example usage
// let num = 29;
// console.log(isPrime(num)); 



// ---------------------------


// function gcd(a, b) {
//     while (b !== 0) {
//         let temp = b;
//         b = a % b; 
//         a = temp;  
//     }
//     return a;
// }

// // Example usage
// let a = 48, b = 18;
// console.log(gcd(a, b));  


// function printHollowSquare(n) {
//     for (let i = 1; i <= n; i++) {
//         let row = '';
//         for (let j = 1; j <= n; j++) {
//             if (i === 1 || i === n || j===1 || j===n) {
//                 row += '*';
//             } else {
//                 row += ' ';
//             } 
//         }
//         console.log(row);
//     }
// }

// // Example usage
// let n = 15;
// printHollowSquare(n);

// function traiangle(n){
//     for(i=1;i<=n;i++){
//         let row="";
//         for(j=1;j<=n-i;j++){
//             row+=" ";
           
//         }
//         for(k=1;k<=i*2-1;k++){
//             if(i===1 || i===n || k===1 || k===i*2-1){
//                 row+="*";
//             }
//             else{
//                 row+=" ";
//             }
//         }
//         console.log(row)
        
//     }
   
// }
// traiangle(5)


// function triangle(n){
//     for(i=1;i<=n;i++){
//         let row="";
//         for(j=1;j<=n;j++){
//             row+="*"
//         }
//         console.log(row);
//     }
// }triangle(5)

// function space(n){
//     for(i=1;i<=n;i++){
//         let row="";
//         for(j=1;j<=n-i;j++){
//             row+=" ";
//         }
//         for(k=1;k<=i*2-1;k++){
//             row+="*";
//         }
//         console.log(row)
//     }
// }space(5)

// function printTriangle(n) {
//     for (let i = n; i >=1; i--) {
//         let row = '';
//         for (let j = 1; j <= i; j++) { 
//             row += '*';
//         }
//         console.log(row);
//     }
// }

// // Example usage
// let n = 5;
// printTriangle(n);



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
//         let row1="";
//         for(d=1;d<=n-l;d++){
//             row1+=" ";
           
//         }
//         for(a=1;a<=l*2-1;a++){
//             if(l===1 || a===1 || a===l*2-1){
//                 row1+="*";
//             }
//             else{
//                 row1+=" ";
//             }
                
//         }
//         console.log(row1)
//     }
// }diamond(5)

// function printNumberPattern(n) {
//     for (let i = 1; i <= n; i++) {
//         let spaces = ' '.repeat(n-i);
//         let numbers = (i + ' ').repeat(i); 
//         console.log(spaces + numbers.trim()); 
//     }
// } 
// printNumberPattern(6);

// function number(n){
//     for(i=1;i<=n;i++){
//         let row="";
//         for(j=1;j<=n-i;j++){
//             row+=" ";
//         }
//         for(k=1;k<=i*2-1;k++){
//              row+=i+"";
//         }
//         console.log(row)
//     }
// }number(5)


// function triangle(n){
//     let num=1;
//     for(i=1;i<=n;i++){
        
//         let row="";
//         for(j=1;j<=n-i;j++){
//             row+=" ";
        
//         }
//         for(k=1;k<=i*2-1;k++){
//             row+=num+" ";
//             num++;
            
//         }
//         console.log(row);
//     }
// }triangle(3)
    





