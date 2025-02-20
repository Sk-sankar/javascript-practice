let arr=[3,1,6,89,99,65];
let sorted=arr.sort((a,b)=>a-b);
console.log(sorted)

function fibbonaci(n) {
    if (n <= 1) {
        return n;
    }
     fibbonaci(n - 1) + fibbonaci(n - 2);
    
}
console.log(fibbonaci(10));