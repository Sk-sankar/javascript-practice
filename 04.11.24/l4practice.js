let arr=[4,5,6,2,3];
let max=Math.max(...arr);
for(i=0;i<=arr.length;i++){
    if(arr[i]===max){
        console.log(i)
    }
}

