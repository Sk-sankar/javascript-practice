function slarge(n){
    n.sort((a,b)=>a-b);
    let ans=n[n.length-2];
    console.log(ans);
}
slarge([1,2,3,5,7,8,9,5,55,66,])