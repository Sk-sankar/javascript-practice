let obj ={}
console.log(obj);
let arr =[2,2,2,4,5,5,6];
for(let i=0;i<=arr.length-1;i++){
    if(obj[arr[i]]===undefined|| obj[arr[i]]===0){
        obj[arr[i]] =1;
        console.log(obj)
    }
    else{
      obj[arr[i]]++;
    }
}
let max=0;
let maxelement;
for(let key in obj){
   if(obj[key]>max){
    max=obj[key];
    console.log(max);
    maxelement= key;
    console.log(key);
   }
}
console.log(max,maxelement);

