// function insertion(a){
//     let n=a.length;
//     for(i=1;i<n;i++){
//        let temp= a[i];
//        j=i-1;
//        while(j>=0 && a[j]>temp){
//         a[j+1]=a[j],
//         j--;
//        }
//        a[j+1]=temp;
//     }
//     return a;
// }
// console.log(insertion([2,7,4,1,3]));




// function bubble(arr){
//     let n= arr.length;
//     for(i=0;i<n;i++){
//         for(j=0;j<n-i-1;j++){
//             if(arr[j]>arr[j+1]){
//                 [arr[j],arr[j+1]]=[arr[j+1],arr[j]];
//             }
//         }
//     }
//     return arr;
// }
// console.log(bubble([2,7,4,1,3]));

// function selection(ar){
//     let n=ar.length;
//     for(i=0;i<n;i++){
//         let mid=i;
//         for(j=i+1;j<n;j++){
//             if(ar[j]<ar[mid]){
//                 mid=j;
//             }
//         }
//         if(mid !==1){
//             [ar[mid],ar[i]]=[ar[i],ar[mid]]
//         }
//     }
//     return ar;
// }
// console.log(selection([2,7,4,1,3]));

function selectionSort(arr) {
    let n=arr.length;
        for(i=0;i<n;i++){
           let mid=i;
           for(j=i+1;j<n;j++){
              if(arr[mid]>arr[j]){
                 mid=j
                 }
            }
           if(mid !==i){
            [arr[i],arr[mid]]=[arr[mid],arr[i]]
           }
           console.log(arr.join(' '))
    }
    
    
    }
    selectionSort([2,7,4,1,3]);

