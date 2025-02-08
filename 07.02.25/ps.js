

function missing(arr){
     for(i=0;i<arr.length-1;i++){
        if(arr[i]+1!=arr[i +1 ]){
           return arr[i]+1
        }
     }
}
console.log(missing([1,2,4,5]));


function anagram(str1,str2){
   if(str1.length !== str2.length) return false;
   let sp1=str1.split("").sort().join("")
   let sp2=str2.split("").sort().join("")
   if(sp1!==sp2) return false
   else  return true
}
console.log(anagram("hello","olleh"))

function missing(arr1){
   let add=0
    for (i=0;i<arr.;i++){
         add+=1;
         if(add !=arr1[i]){
            console.log( add);
         }
    }
}
missing([1,2,5,6,8,12])