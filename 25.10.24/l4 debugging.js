// function repea1t(n){
//     for(i=1;i<=n;i++){
//         if(i==1){
//             var first=i+" ".repeat(4)+i;
//         }
//         else if(i==2){
//             var second=i.repeat(2)+" ".repeat(2)+i.repeat(2)
//         }
//         else if(i==3){
//             var third=i.repeat(6)
//         }
//     }
//     console.log(first+second+third);
// }repea1t(3)


// let arr = [5, 8, 13, 21];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === 13) {
//     console.log("Found 13!");  // Loop continues even after finding 13
//   }
// }

// function findMax(arr) {
//     let max = 1; 
//     for (let i = 1; i < arr.length; i++) {
//       if (arr[i] < max) {
//         max = arr[i];
//       }
//     }
//     return max;
//   }
//   let arr=[1,2,3,4,5,6,7,8];

//   console.log(findMax(arr));

//   function findAlphabeticallyFirst(arr) {
//     let first = ""; 
//     for (let i = 0; i < arr.length; i++) {
//       if (a[i] > first) {
//         first = a[i];
//       }
//     }
//     return first;
//   }

//   function findAlphabeticallyFirst(arr) {
//     if (arr.length === 0) return ""; 
    
//     let first = arr[0]; 
//     for (let i = 1; i < arr.length; i++) {
//       if (arr[i] <first) {
//         first = arr[i];
//       }
//     }
//     return first;
//   }
//   let arr= [];
//   console.log(findAlphabeticallyFirst(arr));
  

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    
    while (left <= right) {  
      let mid = Math.floor((left + right) / 2);
      
      if (arr[mid] === target) {
        return mid;
      } else if (arr[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    
    return -1;  
  }
  let arr=[1,2,3,4,5,6,7,8,9];
  let target =7;
  console.log(binarySearch(arr,target));

  