let arr=[1,22,3,44,5,44,6,67,67,4]
    let start=arr[0];


    for(i=1;i<arr.length;i++){
        if(start<arr[i]){
            start=arr[i];
        }
    }
    let count=0;
  
for(i=0;i<arr.length;i++){
    
    if(start==arr[i]){
            count++;
            
    }
}
console.log(count);


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

const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
const target = 13;

const result = binarySearch(sortedArray, target);

if (result !== -1) {
    console.log(`Element found at index: ${result}`);
} else {
    console.log("Element not found in the array");
}
