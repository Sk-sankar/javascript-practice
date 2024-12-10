// function bubblesort(arr){
//     let n= arr.length;
//     for(i=0;i<n-1;i++){
//         for(j=0;j<n-i-1;j++){
//             if(arr[j]>arr[j+1]){
//                 [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
//             }
//         }
//         console.log(arr.join(' '))
//     }
    
// }
// bubblesort([6,3,5,8,1,2]);

// function selection(arr){
//     let n=arr.length;
//     for(i=0;i<n;i++){
//         let mid=i;
//         for(j=i+1;j<n;j++){
//             if(arr[j]<arr[mid]){
//                 mid=j
//             }
//         }
//         if(mid !==i){
//             [arr[i],arr[mid]]=[arr[mid],arr[i]]
//         }
//         console.log(arr.join(' '))
//     }
// }
// selection([7,3,9,1,5]);

// function insertion(arr){
//     let n=arr.length;
//     for(i=1;i<n;i++){
//         let temp=arr[i];
//         j=i-1;
//        while(j>=0 && arr[j]>temp){
//         arr[j+1]=arr[j],
//         j--;
//        }
//        arr[j+1]=temp;
//        console.log(arr.join(' '))
//     }
// }
// insertion([10,8,22,44,73])


// function bubble(arr){
//     for(i=0;i<arr.length-1;i++){
//         for(j=0;j<arr.length-i-1;j++){
//             if(arr[j]>arr[j+1]){
//                 [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
//             }
//         }
//     }
//     return arr
// }
// console.log(bubble([7,2,5,1,3]))

// function selection(arr){
//     let n= arr.length;
//     for(i=0;i<n;i++){
//         let mid=i;
//         for(j=i+1;j<n;j++){
//             if(arr[mid]>arr[j]){
//                 mid=j
//             }
//         }
//         if(mid !==i){
//             [arr[i],arr[mid]]=[arr[mid],arr[i]];
//         }
//     }
//     return arr;
// }
// console.log(selection([9,43,32,3,1]))


// function insertion(arr){
//     let n= arr.length;
//     for(i=0;i<n;i++){
//         let temp=arr[i];
//         j=i-1;
//         while(j>=0 && arr[j]>temp){
//             arr[j+1]=arr[j],
//             j--;
//         }
//         arr[j+1]=temp;
//         console.log(arr.join(' '))
//     }
// }
// insertion([6,2,8,3,5])


// let a=[[2,3,3],[7,2,3]];
// let b=[[5,1,2],[1,1,2]];

// let n=a.length;
// let m=a[0].length;

// let newone=Array.from({length:n},()=>Array(m));

// for(i=0;i<n;i++){
//     for(j=0;j<m;j++){
//         newone[i][j]=a[i][j]+b[i][j];
//     }
// }

// console.log(newone)

// newone.forEach((mm)=>{
//     console.log(mm.join(' '))
// });



let a=[[2,3,3],[7,2,3]];
let b=[[5,1,2],[1,1,2]];
// function matrix(a,b){
//     let n=a.length;
//     let m=a[0].length;

//     let newone=Array.from({length:n},()=>Array(m));
//     for(i=0;i<n;i++){
//         for(j=0;j<m;j++){
//             newone[i][j]=a[i][j]+b[i][j];
//         }
//     }
//     console.log(newone)
// }
// matrix(a,b);


// let array=[3,2,5,3,4,6,7,5,4];

// let n=array.length;

// for(i=0;i<n;i++){
//     for(j=i+1;j<n;j++){
//         if(array[i]===array[j]){
//             array.splice(j,1);
//         }
//     }
// }

// console.log(array);

// function target(arr,tar){
  
//         if(arr.includes(tar)){
//              console.log("exits")
//         }
//         else{
//             arr.push(tar);
//         }
//     return arr;
// }
// console.log(target([2,4,5,3,22,3],7));

// for (i=0;i<n ; i++){
//     for(j=i+1;j<n;j++){
//         if(array[i]===array[j]){
//             array.splice(j,1)
//         }
//     }
// }
// console.log(array);


// function repeat(arr,tar){
//     if(arr.includes(tar)){
//         console.log("exists")
//     }
//     else{
//       console.log( arr.push(tar))
//     }
    
// }
// repeat([3,5,4,2,5,3,2],7);


// function union(arr1,arr2){

//     let result=[];
//     for(let elem of arr1){
//         if(!result.includes(elem)){
//             result.push(elem)
//         }
//     }
//     for( let elem of arr2){
//         if(!result.includes(elem)){
//             result.push(elem)
//         }
//     }
//     return result.join(' ,')
// }
// console.log(union([2,3,3,1,4],[6,7,5,8,6,4,3]))

// function intersection( arr1,arr2){
//     let result=[];
//     for(let elem of arr1){
//         if(arr2.includes(elem) && !result.includes(elem)){
//             result.push(elem)
//         }
//     }
//     return result;
// }
// console.log(intersection([2,3,3,1,4],[6,7,5,8,6,4,3]));

// function selectionSort(arr) {
//     let n=arr.length;
//         for(i=0;i<n;i++){
//            let mid=i;
//            for(j=i+1;j<n-1;j++){
//               if(arr[mid]>arr[j]){
//                  mid=j
//                  }
//             }
//            if(mid !==0){
//             [arr[i],arr[mid]]=[arr[mid],arr[i]]
//            }
//            console.log (arr.join(' '));
//     }
    
   
//     }
// selectionSort([5,3,7,1,2,8,0,22]);


function matrix(a,b){
    let n=a.length;
    let m=a[0].length;

    let newone=Array.from({length:n},()=>Array(m));

    for(i=0;i<n;i++){
        for(j=0;j<m;j++){
            newone[i][j]=a[i][j]+b[i][j]
                }

    }
    console.log (newone);
}
matrix(a,b);




// Example usage
let matrixA = [
    [1, 2, 3],
    [4, 5, 6]
];

let matrixB = [
    [7, 8],
    [9, 10],
    [11, 12]
];
function multiplyMatrices(matrixA, matrixB) {
    
    if (matrixA[0].length !== matrixB.length) {
        console.log("Number of columns in Matrix A must match number of rows in Matrix B.");
    }

    const rowsA = matrixA.length;
    const colsA = matrixA[0].length;
    const colsB = matrixB[0].length;

    // Create the result matrix using Array.from
    const result = Array.from({ length: rowsA }, () =>
        Array.from({ length: colsB }, () => 0)
    );

    // Perform matrix multiplication
    for (let i = 0; i < rowsA; i++) {
        for (let j = 0; j < colsB; j++) {
            for (let k = 0; k < colsA; k++) {
                result[i][j] += matrixA[i][k] * matrixB[k][j];
            }
        }
    }

 console.log(result);
}
multiplyMatrices(matrixA,matrixB);

let matriax = [
    [4, 7],
    [2, 6],
];

function inverse2x2Matrix(matrix) {
    if (matrix.length !== 2 || matrix[0].length !== 2) {
        console.log("Only 2x2 matrices are supported.");
    }

    const [[a, b], 
           [c, d]] = matrix;

    // Calculate the determinant
    const det = a * d - b * c;
    if (det === 0) {
        throw new Error("Matrix is singular and cannot be inverted.");
    }

    // Compute the inverse
    const inverse = [
        [d / det, -b / det],
        [-c / det, a / det],
    ];

    inverse.forEach(sum=>{
          console.log(sum.join(' '))
    })
}
inverse2x2Matrix(matriax)
// Example usage

function inverse( mat){
    const [[a,b],[c,d]]=mat;
    const del=a*d-b*c;
    const inverse=[[d/del,-b/del],
[-c/del,a/del]];
console.log(inverse)
}inverse([
    [1,2],[3,4]
]);




function twoSum(numbers, target) {
    let left = 0;               // Pointer to the beginning of the array
    let right = numbers.length - 1; // Pointer to the end of the array

    while (left < right) {
        const sum = numbers[left] + numbers[right];

        if (sum === target) {
            // Since the array is 1-indexed, add 1 to the indices
            return [left + 1, right + 1];
        } else if (sum < target) {
            left++; // Increase the left pointer to get a larger sum
        } else {
            right--; // Decrease the right pointer to get a smaller sum
        }
    }

    return []; // Return an empty array if no solution is found
}

// Example usage
const numbers = [2, 7, 11, 15];
const target = 9;

const result = twoSum(numbers, target);
console.log(result); // Output: [1, 2]


function trap(height) {
    let left = 0, right = height.length - 1;
    let leftMax = 0, rightMax = 0;
    let water = 0;

    while (left < right) {
        if (height[left] < height[right]) {
            if (height[left] >= leftMax) {
                leftMax = height[left];
            } else {
                water += leftMax - height[left];
            }
            left++;
        } else {
            if (height[right] >= rightMax) {
                rightMax = height[right];
            } else {
                water += rightMax - height[right];
            }
            right--;
        }
    }

    return water;
}

// Example usage
const height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
console.log(trap(height)); // Output: 6


// function hasFourElementsWithSum(arr, target) {
//     const n = arr.length;
//     const map = new Map();

//     // Store all pair sums in a hash map
//     for (let i = 0; i < n - 1; i++) {
//         for (let j = i + 1; j < n; j++) {
//             const sum = arr[i] + arr[j];
//             if (!map.has(sum)) {
//                 map.set(sum, []);
//             }
//             map.get(sum).push([i, j]);
//         }
//     }

//     // Check if there exist two pairs that sum up to the target
//     for (let i = 0; i < n - 1; i++) {
//         for (let j = i + 1; j < n; j++) {
//             const remaining = target - (arr[i] + arr[j]);
//             if (map.has(remaining)) {
//                 for (const pair of map.get(remaining)) {
//                     // Ensure pairs don't overlap
//                     if (pair[0] !== i && pair[0] !== j && pair[1] !== i && pair[1] !== j) {
//                         return true;
//                     }
//                 }
//             }
//         }
//     }

//     return false;
// }

// // Example usage
// const arr = [10, 20, 30, 40, 1, 2];
// const target = 91;

// console.log(hasFourElementsWithSum(arr, target)); // Output: true



function hasUniqueCharactersNoExtraSpace(str) {
    const sortedStr = str.split('').sort();
    for (let i = 0; i < sortedStr.length - 1; i++) {
        if (sortedStr[i] === sortedStr[i + 1]) {
            return false; // Duplicate found
        }
    }
    return true; // All characters are unique
}

// Example usage
console.log(hasUniqueCharactersNoExtraSpace("hello")); // Output: false
console.log(hasUniqueCharactersNoExtraSpace("world")); // Output: true





function maxOccurringElement(arr) {
    const freqMap = {};
    let maxElement = arr[0]; // Assume the first element is the max
    let maxCount = 1; // Frequency of the first element

    // Count the frequency of each element in the array
    for (let num of arr) {
        if (freqMap[num]) {
            freqMap[num]++;
        } else {
            freqMap[num] = 1;
        }

        // Update the max element if we find a higher frequency
        if (freqMap[num] > maxCount) {
            maxElement = num;
            maxCount = freqMap[num];
        }
    }

    return maxElement;
}

// Example usage
const arr = [5, 5, 4, 1, 1, 1, 6, 7, 8];
console.log(maxOccurringElement(arr)); // Output: 1


function sortDates(dates) {
    // Mapping month names to numbers
    const monthMap = {
        "JAN": 1, "FEB": 2, "MAR": 3, "APR": 4, "MAY": 5, "JUN": 6,
        "JUL": 7, "AUG": 8, "SEP": 9, "OCT": 10, "NOV": 11, "DEC": 12
    };

    // Convert a date string to a comparable tuple [YYYY, MM, DD]
    function parseDate(date) {
        const monthStr = date.slice(0, 3); // Get the first 3 characters for the month
        const dayStr = date.slice(4, 6);   // Get the day (characters 4-5)
        const yearStr = date.slice(7);     // Get the year (from character 7 onwards)

        const month = monthMap[monthStr];  // Get the month number from map
        const day = parseInt(dayStr, 10);  // Convert day to an integer
        const year = parseInt(yearStr, 10); // Convert year to an integer

        return [year, month, day];
    }

    // Sort the array based on the parsed date tuples
    return dates.sort((a, b) => {
        const dateA = parseDate(a);
        const dateB = parseDate(b);
        // Compare tuples lexicographically
        if (dateA[0] !== dateB[0]) return dateA[0] - dateB[0]; // Compare years
        if (dateA[1] !== dateB[1]) return dateA[1] - dateB[1]; // Compare months
        return dateA[2] - dateB[2]; // Compare days
    });
}

// Example usage
const dates = ["JAN-09-2015", "FEB-01-2024", "OCT-10-1987", "MAR-14-2000"];
const sortedDates = sortDates(dates);
console.log(sortedDates); 
// Output: ["OCT-10-1987", "MAR-14-2000", "JAN-09-2015", "FEB-01-2024"]



























