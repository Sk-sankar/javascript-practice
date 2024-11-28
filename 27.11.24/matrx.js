

// let newone=Array.from({length:n},()=>Array(m));
// for(i=0;i<n;i++){
//     for(j=0;j<m;j++){
//         newone[i][j]+=a[i][j]+b[i][j];
//     }
// }
// console.log(newone);

// for(let a of newone){
//     console.log(a)


// let a=[[1,2,3],[4,5,6]];
// let b=[[6,5,4],[3,2,1]];

// let n=a.length;
// let m=a[0].length;
//27    }
// if(n==b.length && m==b[0].length ){
//     var o=[];
  
//     for(i=0;i<n;i++){
//         var ea=a[i];
//         var eb=b[i];
//         let n=[];
//         for(j=0;j<m;j++){
//             var add=ea[j]+eb[j];
//             n.push(add);
//         }
//     }
//     o.push(n);
// }
// console.log(o)



// let n = a.length;
// let m = a[0].length;
// let l=b.length;
// let k=b[0].length;


// if (n == l && m == k) {
//     var o = [];
  
//     for (let i = 0; i < n; i++) {
//         var ea = a[i];
//         var eb = b[i];
//         let row = []; // Temporary array for the current row
//         for (let j = 0; j < m; j++) {
//             var add = ea[j] + eb[j]; // Accessing elements in the current row
//             row.push(add);
//         }
//         o.push(row); // Add the row to the result matrix
//     }
//     console.log(o); // Print the resulting matrix
// } else {
//     console.log("Matrices are not of the same dimensions.");
// }


let a = [[1, 2, 3], [4, 5, 6]];
 let b = [[6, 5, 4], [3, 2, 1]];

let n=a.length;
let m=a[0].length;


let newone=Array.from({length:n},()=>Array(m));
for(i=0;i<n;i++){
    for(j=0;j<m;j++){
        newone[i][j]=a[i][j]+b[i][j];
    }
}

console.log(newone);



function bubble(arr){
    let n=arr.length;
    for(i=0;i<n;i++){
       for(j=0;j<n-i-1;j++){
          if(arr[j]>arr[j+1]){
           [arr[j],arr[j+1]]=[arr[j+1],arr[j]];
          }
       }
    }
    return arr
 }
 console.log(bubble([2,7,4,1,3]))



 
// function selectionSort(arr) {
//     let n=arr.length;
//         for(i=0;i<n;i++){
//            let mid=i;
//            for(j=i+1;j<n;j++){
//               if(arr[mid]>arr[j]){
//                  mid=j
//                  }
//             }
//            if(mid !==i){
//             [arr[i],arr[mid]]=[arr[mid],arr[i]]
//            }
//            console.log(arr.join(' '))
//     }
    
    
//     }
//     selectionSort([2,7,4,1,3]);


// function insertion(arr){
//     for(i=1;i<arr.length;i++){
//         let temp=a[i];
//         j=i-1;
//         while(j>=0 && arr[j]>temp){
//             arr[j+1]=arr[j],
//             j--;
//         }
//         arr[j+1]=temp;

//         console.log(arr.join(' '))
//     }
    
// }
//     insertion([2,7,4,1,3])

    function insertion(a){
    let n=a.length;
    for(i=1;i<n;i++){
       let temp= a[i];
       j=i-1;
       while(j>=0 && a[j]>temp){
        a[j+1]=a[j],
        j--;
       }
       a[j+1]=temp;
       console.log(a)
    }
   
    }
    insertion([2,7,4,1,3]);


    