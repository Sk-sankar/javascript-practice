let arr=[12,35,13,1,89];
let empty=[];
for(i=0;i<=arr.length;i++){
  
    if(arr[i]<=15){
        empty.push(arr[i]);
    }
    
}
if(empty.length==0){
    console.log("there is no element")
}
else{
    console.log(empty)
}