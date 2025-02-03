function star(n) {
    if (n < 0) {
        return -1;
    }
    else if (n === 0) {
        return "" ;
    }
     
    return "*"+star(n-1); 
    console.log("*".repeat(n));
}
let result = star(5);



