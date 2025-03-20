let s=20;
let e=23;
let k=6;
let count=0;

for(let a=s;a<=e;a++){
    let reversed=a.toString().split("").reverse().join("");
    if(Math.abs(a-reversed)%k===0){
        count++;
    }   
   
    
}
console.log(count)