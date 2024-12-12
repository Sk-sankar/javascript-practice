
//https://www.hackerrank.com/challenges/migratory-birds/problem?isFullScreen=true


function migratoryBirds(arr) {
    // Write your code here
let obj={};
for( let i=0;i<arr.length;i++){
    if(obj[arr[i]]){
        obj[arr[i]]+=1;
    }
    else{
        obj[arr[i]]=1
    }
}

let maxcount=0;
let eleamt=0;
for(let ele of Object.keys(obj)){
    if(obj[ele]>maxcount){
        maxcount=obj[ele];
        eleamt=ele;
    }
}
return eleamt
}
