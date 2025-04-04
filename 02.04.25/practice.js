let arr=[1,2,3,4,5]
let rotate=3;
let result=[];
for(i=rotate-1;i<arr.length;i++){
    result.push(arr[i]);
}
console.log(result)
for(i=0;i<rotate-1;i++){
    result.push(arr[i])
}
console.log(result)