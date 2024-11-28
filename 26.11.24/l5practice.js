let array=[3, 4, 1, 5, 1, 9, 3];
for(i=0;i<array.length;i++){
    for(j=i+1;j<array.length;j++){
        if(array[i]==array[j]){
            array.splice(j,1)
        }
    }
}
console.log(array);




// function repeat(a){
//     let b=[];
//     for(i=0;i<a.length;i++){
//         let count=0;
    
//         for(j=0;j<a.length;j++){
//             if(a[i]===a[j]){
//                 count++;
//             }
            
//         }
//         if(count==0){
//             b.push(a[i]);
//         }
//     }
//     return b;
// }
// console.log(repeat([3, 4, 1, 5, 1, 9, 3]))



// let array=[3, 4, 1, 5, 1, 9, 3];
// let target =6;
// if(array.includes(target)){
//     console.log("the number is already in the array");
// }
// else{
//   array.push(target)
// }
// console.log(array);


let a=[5, 1, 8, 10, 11];
let b=[3, 1, 5, 7, 8];
// if(a.includes(b)){
//     a.push(b)
// }

// // let e=result=[...new Set([...a,...b])];
// console.log(a);



// function union(a,b){
//     let result=[];
//     for(let elemt of a){
//           if(!result.includes(elemt)){
//             result.push(elemt)
//           }
//     }
//     for(let elemt of b){
//         if(!result.includes(elemt)){
//             result.push(elemt)
//           }
//     }
//     return result;
// }
// console.log(union(a,b));




// function union(a,b){
//     let result=[];
//     for(let elemt of a){
//           if(b.includes(elemt) &&!result.includes(elemt)){
//             result.push(elemt)
//           }
//     }
   
//     return result;
// }
// console.log(union(a,b));




// let array=[3,4,6,2,3,6];
// for(i=0;i<array.length;i++){
//     for(j=i+1;j<array.length;j++){
//         if(array[i]===array[j]){
//             array.splice(j,1)
//         }
//     }
// }
// console.log(array);


// let array1=[3,4,6,2,3,6];
// let target=7;
// if(!array1.includes(target)){
//     array1.push(target);
// }
// console.log(array1);


function union(a,b){
    let result=[];
    for(let elemt of a){
        if(!result.includes(elemt)){
            result.push(elemt)
        }
    }
    for(let elemt of b){
        if(!result.includes(elemt)){
            result.push(elemt)
        }
    }
    return result;
}
console.log(union(a,b));


function intersection(a,b){
    let result=[];
    for(let elemt of a){
        if(b.includes(elemt) && !result.includes(elemt)){
            result.push(elemt)
        }
    }
    return result
}
console.log(intersection(a,b));


