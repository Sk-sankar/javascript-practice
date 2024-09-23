// let digit=[1,2,3,4,5,6,7];
// let sum=0;
// for(let add of digit){
//     sum+=add;
// }
// console.log(sum);


// // 
// let num=[1,2,3,4,4,5,6,7,8];
// function digitSum(num){
//     let sum=0;
//     while(num>0){
//         a=num%10;
//         sum+=a;
//         num=Math.trunc(num/10);
//     }
//     return sum;

// }
// digitSum(num)
// console.log(sum);



// // 

// function array(name1){
//     name1.unshift(name1.length)
//     return name1
// }
// let name1=["hari","deva","arun","maha"];
// console.log(array(name1));



// // 


// function string(addres){
//     let a=addres.split(", ");
//     for(i=0;i<a.length;i++){
//        console.log(a[i]);
//     }
// }
// let addres="Freshworks, Global Infocity, Perungudi, Chennai - 600096";
// string(addres);





// let n=5;
// for(i=0;n<10000;i++){
//     n*=5;
// }
// console.log(n);




// function evenAdd(a,b){
//     let sum=0;
//     for(i=a;i<=b;i++){
//         if(i%2===0){
//          sum+=i;
//         }
//     }return sum;
// }
// console.log(evenAdd(5,20));



let num1=123456;
let sum2=0;
while(num1>0){
    let a=num1%10;
    sum2+=a;
    num1=Math.trunc(num1/10);

   
    
}
console.log(sum2);
