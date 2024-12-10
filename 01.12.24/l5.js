// function bubbleSort(arr){
//     let n= arr.length;
//     for(i=0;i<n-1;i++){
//         for(j=0;j<n-i-1;j++){
//             if(arr[j]>arr[j+1]){
//                 [arr[j],arr[j+1]]=[arr[j+1],arr[j]];
//             }
//         }
        
//     }
//     console.log(arr);
// }
// bubbleSort([3,9,1,4,2]);

// function selection(arr){
//     let n= arr.length;
//    for (i=0;i<n-1;i++){
//     let mid=i;
//     for(j=i+1;j<n;j++){
//         if(arr[mid]>arr[j]){
//             mid=j;
//         }

//     }
//     if(mid !==i){
//         [arr[i],arr[mid]]=[arr[mid],arr[i]];
//     }
//     console.log(arr.join(' '))
//    }
// }
// selection([4,7,9,2,6,11]);


// function insertion(arr){
//     let n=arr.length;
//     for(i=0;i<n;i++){
//         let temp=arr[i];
//         let j=i-1;
//         while(j>=0 && arr[j]>temp){
//              arr[j+1]=arr[j];
//              j--;
//         }
//         arr[j+1]=temp;
//         console.log(arr);
//     }
    
// }
// insertion([6,2,7,3]);


// function exits(arr){
//     let n=arr.length;
//     for(i=0;i<n;i++){
//         for(j=i+1;j<n;j++){
//             if(arr[i]==arr[j]){
//                 arr.splice(j,1)
//             }
//         }
//     }
//     console.log(arr);
// }
// exits([2,4,2,4,3,4,]);


// function repeataion(arr,target){
//     if(arr.includes(target)){
//         console.log("exuts")
//     }
//     else{
//         arr.push(target);
//     }
//     console.log(arr);
// }
// repeataion([2,4,2,56,3],7);

// function union(a,b){
//     let result=[];
//     for(let elem of a){
//         if(!result.includes(elem)){
//             result.push(elem);
//         }

//     }
//     for(let elem of b){
//         if(!result.includes(elem)){
//             result.push(elem);
//         }
//     }
//     console.log(result);
// }union([2,4,2,5,35,4],[7,92,5,2]);

// function intersection(a,b){
//     let result=[];
//     for(let elem of a){
//         if(b.includes(elem) && !result.includes(elem)){
//             result.push(elem);
//         }
//     }
//     console.log(result);
// }intersection([2,4,2,5,35,4],[7,92,5,2]);

// function matrix(a,b){
//     let n=a.length;
//     let m= a[0].length;
//     let newone=Array.from({length:n},()=>Array(m));

//     for(i=0;i<n;i++){
//         for(j=0;j<m;j++){
//             newone[i][j]=a[i][j]+b[i][j]
//         }
//     }
//     console.log(newone);
// }
// matrix([[2,3],[5,4]],[[1,2],[3,4]]);

// function multiplication(matrixA,matrixB){
//     var row=matrixA.length;
//     let cola=matrixA[0].length;
//     let colb=matrixB[0].length;

//     let newone=Array.from({length:row},()=>Array.from({length:cola},()=>0));

//     for(i=0;i<row;i++){
//         for(j=0;j<colb;j++){
//             for(k=0;k<cola;k++){
//                 newone[i][j]+=matrixA[i][k]*matrixB[k][j];
//             }
//         }
//     }
//     console.log(newone);
// }multiplication(    [[1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]],
//    [[9, 8, 7],
//     [6, 5, 4],
//     [3, 2, 1]]);


// function inverse(matriax){
//     let [[a,b],[c,d]]=matriax;

//     let del=a*d-b*c;

//     let inverse=[[d/del,-b/del],
// -c/del,a/del];
// console.log(inverse)
// }inverse([
//     [1,2],[3,4]
// ]);

// function huu(arr,tar){
//     let left=0;
//     let right=arr.length-1;
//     while(left<right){
//         const sum=arr[left]+arr[right];

//         if(sum===tar){
//             return [left+1,right+1];
//         }
//         else if(sum<tar){
//              left++;

//         }
//         else{
//             right--;
//         }
//     }
//     return [];
// }console.log(huu([2,4,5,3,6],7));


// function trap(height){
//     let l=0;
//     let r=height.length-1;
//     let lm=0;
//     let rm=0;
//     let water=0;

//     while(l<r){
//         if(height[l]<height[r]){
//             if(height[l]>=lm){
//                 lm=height[l];
//             }
//             else{
//                 water+=lm-height[l];
//             }
//             l++;
//         }
//         else{
//             if(height[r]>=rm){
//                 rm=height[r];

//             }
//             else{
//                 water+=rm-height[r];
//             }
//             r--;
//         }
//     }
//     return water;
// }
// console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));


// function unique(str){
//     let sort=str.split('').sort();
//     for(i=0;i<sort.length-1;i++){
//         if(sort[i]===sort[i+1]){
//             return false;
//         }
//         else{
//             return str;
//         }
//     }
// }
// console.log(unique("hello"));


// function max(arr){
//     let fq={};
//     let  maxe=arr[0];
//     let maxc=0;

//     for( let e of arr){
//         if(fq[e]){
//             fq[e]++;
//         }else{
//             fq[e]=1
//         }
//         if(fq[e]>maxc){
//             maxe=e;
//             maxc=fq[e];
//     }
     
// }
// return maxe;
// }console.log(max([2,4,3,4,2,4,2,4,3,3,3,4]));


// function bubble(arr){
//     let n=arr.length;
//     for(i=0;i<n-1;i++){
//         for(j=0;j<n-i-1;j++){
//             if(arr[j]>arr[j+1]){
//                 [arr[j],arr[j+1]]=[arr[j+1],arr[j]];
//             }
//         }
//         console.log(arr.join(' '))
//     }
// }bubble([8,3,5,2,4]);


// function selection(arr){
//     let n= arr.length;
//     for(i=0;i<n-1;i++){
//         let mid=i;
//         for(j=i+1;j<n;j++){
//             if(arr[j]<arr[mid]){
//                 mid=j;
//             }
//         }
//         if(mid !==i){
//             [arr[i],arr[mid]]=[arr[mid],arr[i]];
//         }console.log(arr.join(' '))
//     }
    
// }selection([7,3,5,1,9]);


// function insertion(arr){
//     let n= arr.length;
//     for(i=0;i<n;i++){
//         let temp=arr[i];
//         let j=i-1;
//         while(j>=0 && arr[j]>temp){
//             arr[j+1]=arr[j],
//             j--;

//         }
//         arr[j+1]=temp;
//         console.log(arr.join(' '))
//     }
    
// }insertion([4,2,9,5,3]);


// function exits(arr){
//     let n=arr.length;
//     for(i=0;i<n;i++){
//         for(j=i+1;j<n;j++){
//             if(arr[i]===arr[j]){
//                 arr.splice(j,1)
//             }
//         }
//     }
//     console.log(arr)
// }
function shellSort(arr) {
    let n = arr.length;

    // Initialize the gap value as half of the array length
    let gap = Math.floor(n / 2);

    while (gap > 0) {
        for (let i = gap; i < n; i++) {
            let temp = arr[i];
            let j = i;  

            // Perform a manual comparison and swap within the gap
            while (j >= gap && arr[j - gap] > temp) {
                arr[j] = arr[j - gap];
                j -= gap;
            }

            arr[j] = temp;
        }

        // Reduce the gap for the next iteration
        gap = Math.floor(gap / 2);
    }

    return arr;
}

// Example Usage
let array = [64, 34, 25, 12, 22, 11, 90];
console.log("Original array:", array);
shellSort(array);
console.log("Sorted array:", array);
