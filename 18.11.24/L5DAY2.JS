// // Define an array of Student objects
// const students = [
//     { name: "Sankar", age: 18, mark: 85 },
//     { name: "Ravi", age: 20, mark: 90 },
//     { name: "Anjali", age: 17, mark: 95 },
//     { name: "Priya", age: 19, mark: 88 },
//     { name: "Kumar", age: 21, mark: 80 }
// ];

// function bubbleSortByAge(array) {
//     const n = array.length;
//     for (let i = 0; i < n ; i++) {
       
//         let swapped = false;
//         for (let j = i+1; j < n ; j++) {
    
//             if (array[i].age > array[j].age) {
          
//                 [array[i], array[j ]] = [array[j ], array[i]];
//                 swapped = true;
//             }
//         }
 
//         if (!swapped) break;
//     }
// }

// bubbleSortByAge(students);

// console.log("Sorted by age:", students);




function bubble(array){
    let n=array.length;
    for(i=0;i<n;i++){
        for(j=i+1;j<n;j++){
            if(array[i].name>array[j].name){
                [array[i],array[j]]=[array[j],array[i]];

            }
        }
    }
    return array
}
let students=[
    {name:"sankar",age:"18"},
    {name:"hari",age:"10"},
    {name:"deva",age:"22"}
]
console.log(bubble(students));



// function selectionSort(arr){
//     const n = arr.length;
//     for (let i = 0; i < n ; i++) {
//     let minIndex = i;
//     for (let j = i + 1; j < n; j++) {
//     if (arr[j] < arr[minIndex]) {
//     minIndex = j;
//     }
//     }
//     if (minIndex !== 1) {
//     [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
//     }
//     }
//     return arr;
//     }
//    console.log( selectionSort([2,6,4,3,1])
// )


function selectionSort(arr){
    let n=arr.length;
    for(i=0;i<n;i++){
        let mid=i;
        for(j=i+1;j<n;j++){
            if(arr[j]<arr[mid]){
                mid=j
            }
        }
        if(mid !==1){
            [arr[i],arr[mid]]=[arr[mid],arr[i]]
        }
    }
    return arr;
}
console.log(selectionSort([43,6,9,1,3]))


function bublesort( array){
    let n= array.length;
    for(i=0;i<n-1;i++){
        for(j=0;j<n-i-1;j++){
            if(array[j]>array[j+1]){
                [array[j],array[j+1]]=[array[j+1],array[j]]
            }
        }
    }
    return array;
}
console.log(bublesort([4,3,5,2,1]))

