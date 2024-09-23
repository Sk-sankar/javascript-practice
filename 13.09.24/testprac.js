// function area(r){

//         pi=22/7;
//          a=pi*r**2;
//         console.log(a)
//     }

// area(5);



// function repeat(a){
//     let n="";
//     for(i=1;i<=a;i++){
//         n+=a+"";     
//     }
//     console.log(n)
// }
// repeat(6);





// function factorial(n){
    
//     let b=1;
//     for(a=1;a<=n;a++){
//         b*=a;
        
//     }
//     console.log(b);
// }
// factorial(5);


// function sumOddNumbers(n){
//     let a="";
//     for(i=0;i<=n;i++){
//         let x=2*i+1;
//          a+=x+"";
        
//     }
//     return a;
  

// }
// console.log(sumOddNumbers(20));



// function oddNumbers(n){
//     let a=0;
//   for(i=1;i<=n;i++){

//         if(i%2==1){
//         a+=i;  
            
//         }

//     }
//     console.log(a)
// }
// oddNumbers(20);


function reverse(n){
    let x= 0;

    for(i=1;n>=i;n--){
       x+=n;
        
    }
    console.log(x)
}
reverse(20);


function length(a){

   let b=a[a.length-1];
   console.log(b);
}
length("hello")

