let n=15;
let num=5; 
for(i=1;i<=n;i++){
    let x=i*num;
    console.log(`${i}*${num}=${x}`);
    
}
let x=0;
function calFactorial(a){
    
    for(n=1;n<=a;n++){
        x+=n;

    }
    return x;

}
console.log(calFactorial(5));


function numbers(a){
    for(i=1;i<=a;i++){
console.log(i);
    }
    // return `${i}`;
}
numbers(10);


function sumOddNumbers(n){
    let v=0;
    for(i=1;i<=n;i++){
        i+=1;
        v+=i;
        
    }
    return v;
}
console.log(sumOddNumbers(100));




function fibonacci(n) {
    let fib = [0, 1]; 
    
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    
    return fib;
    
}


console.log(fibonacci(20)); 