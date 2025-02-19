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


function star(n) {
    for (let i = 1; i <= n; i++) {
      let gap = "";
      let sym = "";

      for (let k = 0; k < n - i; k++) {
        gap += " ";
      }
  
      for (let j = 1; j <= i; j++) {
        if (j == 1 || j == i) {
          sym += "* ";
        } else {
          sym += "  "; 
        }
      }
  
      console.log(gap + sym);
    }
  
    for (let i = n - 1; i >= 1; i--) {
      let gap = "";
      let sym = "";
  
     
      for (let k = 0; k < n - i; k++) {
        gap += " ";
      }
  
      
      for (let j = 1; j <= i; j++) {
        if (j == 1 || j == i) {
          sym += "*"+" ";
        } else {
          sym += "  "; 
        }
      }
  
      console.log(gap + sym);
    }
  }
  
  star(5);
  


  function mergesort(arr){
    if(arr.length===1){
        return arr
    }
    let middle=Math.floor(arr.length/2);
    let left = arr.slice(0,middle);
    let right= arr.slice(middle);

    return mergesort(mergesort(left),mergesort(right))
  }
  function merge(left,right){
    let leftindex=0;
    let rightindex=0;
    let result=[];

    while(leftindex<left.length && rightindex<right.length){
        if(left[leftindex]<right[rightindex]){
            result.push(left[leftindex]);
            leftindex++;
        }
        else{
            result.push(right[rightindex]);
            rightindex++;
        }

        
    }
    return result
    .concat(left.slice(leftindex))
    .concat(right.slice(rightindex));
  }

  console.log(mergesort([4,78,3,24,8,26,39]));

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



