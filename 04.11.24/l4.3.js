function linearSearch(arr, target) {
   let empty=[];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {  
            
            empty.push(i) 
            
        }
    }
    return empty; 
    
}


let numbers = [10, 25, 30, 50, 70,50];
let target = 50;

let index = linearSearch(numbers, target);
if (index !== -1) {
    console.log(`Element found at index ${index}`);
} else {
    console.log("Element not found in the array");
}


// let count = 0;  

// function linearSearch(arr, target) {
//     let firstIndex = -1;  

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === target) {
//             count++;
//             if (firstIndex === -1) {
//                 firstIndex = i;  // Store index of the first occurrence
//             }
//         }
//     }

//     return firstIndex;  // Return the index of the first occurrence
// }

// let numbers = [10, 25, 30, 50, 70, 50];
// let target = 50;

// let index = linearSearch(numbers, target);
// if (index !== -1) {
//     console.log(`Element found at index ${index}`);
//     console.log(`Total occurrences: ${count}`);
// } else {
//     console.log("Element not found in the array");
// }

