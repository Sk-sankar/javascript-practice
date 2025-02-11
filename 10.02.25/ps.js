// let n=5;
// for(i=0;i<=n;i++){
//     for(j=0;j<=n;j++){
//         if(i==0 ||i==n-1 || j==0 || j==n-1 ){
//             console.log("*")
//         }
//         else{
//             console.log(" ")
//         }
//     }
// }




// function union(ar,ar1){
//     let c=[];
//     for(let i of ar){
//         if(!c.includes(i)){
//             c.push(i)
//         }
//     }
//     for(j of ar1){
//          if(!c.includes(j)){
//             c.push(j)
//         }
    
//     }
//     let n=c.length
//     for(i=0;i<n-1;i++){
//         for(j=i+1;j<n-i-1;j++){
//             if(c[i]>c[j]){
//                 [c[i],c[j]]=[c[j],c[i]]
//             }

//         }
//     }
//     console.log(c)
// }


// let ar=[1,2,3,4,5,6,9]
// let ar1=[3,5,11,14,20];

// union(ar,ar1)


// let a=[1,2,4,5];
// let b=[3,6,8,11,23]
// let c=[];
// for(i=0;i<a.length;i++){
//     for(j=0;j<b.length;j++){
//         for(k=0;k<c.length;k++){
//             if(a[i]<b[j]){
//                 c[k]=a[i]
//             }
//             else{
//                 c[k]=b[j]
//             }
//             console.log(c)
//         }
//     }

// }


// let a = [1, 2,4,44, 55];
// let b = [1,3,8, 11, 23];
// let c = [];

// let i = 0, j = 0;


// for (;i < a.length || j < b.length;) {
//     if (i < a.length && (j >= b.length || a[i] < b[j])) {
//         c.push(a[i]);
//         i++;
//     } else {
//         c.push(b[j]);
//         j++;
//     }
// }

// console.log(c);


let n=5;
for(i=0;i<=n;i++){
    for(j=0;j<=n;j++){
        if(i==0 ||i==n-1 || j==0 || j==n-1 ){
            console.log("*")
        }
        else{
            console.log(" ")
        }
    }
}


