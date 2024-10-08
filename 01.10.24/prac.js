let a="progam";
let len=a.length;
let isName=true;
for(i=0;i<len;i++){
   var b=a[i];
    for(j=i+1;j<len;j++){
       var  c=a[j];
        if(b==c){
            isName=false;
        }
        
    }
    
}
if(isName){
    console.log("yes");
}
else{
    console.log("no");
}