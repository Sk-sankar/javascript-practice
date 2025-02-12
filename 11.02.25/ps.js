// let n = 10
// let star = ""
// for (i = 0; i < n; i++) {
//     for (j = 0; j < n; j++) {
//         if (i == 0 || i == n - 1 || j == 0 || j == n - 1) {
//             star +="* ";

//         }
//         else {
//             star +="  ";

//         }
//     }
//     console.log(star);
//     star=""
// }

// let n=5;
// for(i=0;i<=n;i++){
//     let star ="* ".repeat(i);
//     console.log(star)
// }

// let a=5;
// for(i=0;i<=a;i++){
//     let star=" ".repeat(a-i)+"* ".repeat(i);
//     console.log(star)
// }


// --------------- box pattern -----------------//
// function box(n){
//     let star="";
//     for(i=0;i<n;i++){
//         for(j=0;j<n;j++){
//             if(i==0 || i== n-1 || j==0 || j==n-1){
//                 star+="* ";
//             }
//             else{
//                 star+="  ";
//             }
//         }
//         console.log(star);
//         star=""
//     }
// }
// box(6)


// --------------------- left traingle-------------------------//

// function star(n){
//     for(i=0;i<=n;i++){
//         let star="* ".repeat(i);
//         console.log(star)
//     }
// }
// star(6)


//---------------------------praymid---------------------//

// function star(n){
//     for(i=0;i<=n;i++){
//         let star=" ".repeat(n-i)+"* ".repeat(i);
//         console.log(star)
//     }
//     for(j=n-1;j>=1;j--){
//         let star=" ".repeat(n-j)+"* ".repeat(j);
//         console.log(star)
//     }
// }star(5);

// function ss(n){
//     for(i=0;i<=n;i++){
//         let star=" ".repeat(n-i)+"* ".repeat(i)
//         console.log(star)
//     }
// }
// ss(5);



// let n=5
// for(i=0;i<=n;i++){
//    let str=""
//    for(j=0;j<n-i;j++){
//     str+=" "
//    } 
//    for(k=0;k<i;k++){
//     str+="*"+" "
//    }
//    console.log(str);
   
// }

// let na=5 ;
// for(i=0;i<=n;i++){
//     let star=" ".repeat(n-i)+"* ".repeat(i);
//     console.log(star)
// }
// for(i=n-1;i>=1;i--){
//     let star=" ".repeat(n-i)+"* ".repeat(i);
//     console.log(star)
// }


// ----------------Reverse a string-----------//

// function reverse(str){
//     return str.split('').reverse().join('')
// }
// console.log(reverse("hello"))

//--------------max-----------------//

// function max(arr){
//     return Math.max(...arr)
// }
// console.log(max([2,3,6,4,5,3,3,99]))