// function merge(left,right){
//     let result=[];
//     let leftindex=0;
//     let rightindex=0;
//     for(;leftindex<left.length && rightindex<right.length;){
//         if(left[leftindex]<right[rightindex]){
//             result.push(left[leftindex])
//             leftindex++;
//         }
//         else{result.push(right[rightindex])
//             rightindex++;
//         }
//     }
//     return result
//     .concat(left.slice(leftindex))
//     .concat(right.slice(rightindex))
// }

// function mergesort(array){
//     if(array.length ===1){
//         return array;
//     }
//     let middle= Math.floor(array.length/2);
//     let left=array.slice(0,middle)
//     let right= array.slice(middle)

//     return merge(mergesort(left),mergesort(right))
// }
// console.log(mergesort([37,8,3,1,9,31,83,15,34,5]));


function star(n){
   for(i=1;i<=n;i++){
    let sym="";
    let gap="";
    for(j=1;j<=i;j++){
        if(i==1||i==n){
            sym+="*"+" ";
        }
       
    }
    for(k=0;k<n-i;k++){
        gap+=" "
    }
    console.log(gap+sym);
   }
   for(i=n-1;i>=1;i--){
    let sym="";
    let gap="";
    for(j=1;j<=i;j++){
        if(i==1||i==n){
            sym+="*"+" ";
        }
       
    }
    for(k=0;k<n-i;k++){
        gap+=" "
    }
    console.log(gap+sym);
   }
   }
star(5);
