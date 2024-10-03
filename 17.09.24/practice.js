let num=1234567;
let sum=0;
while(num>0){
    let a=num%10;
    sum+=a;
    num=Math.trunc(num/10);
}
console.log(sum);



// 

function add(num){
    let sum=0;
    
    while(num>0){
        let a=num%10;
        sum+=a;
        num=Math.trunc(num/10);
        
    }
    return sum;
    
}
console.log(add(1234567));
// function add(num){
//     let sum=0;
//     while(num>0){
//         let a=num%10;
//         sum+=a;
//         num=Math.trunc(num);
//     }
//     return sum;
// }
// let result = add(1234567);
// console.log(result);




