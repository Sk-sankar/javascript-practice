const { primenumber } = require("../22.02.25/pet");

let a =[2,4,5,6,7,70,22];

for(i=0;i<a.length;i++){
    for(j=0;j<a.length;j++){
        if(a[i]<a[j]){
            let temp=a[i];
            a[i]=a[j];
            a[j]=temp;
        }
    }
}
console.log(a);
console.log(primenumber(11));
