function findMaxAString(arr) {
    let maxString = '';
    let maxCount = 0;

    arr.forEach(str=>{
        let count = 0;
        for (let char of str) {
            if (char.toLowerCase() === 'a') {
                count++;
            }
        }
        
        if (count > maxCount) {
            maxCount = count;
            maxString = str;
        }
    });

    return maxString;
}

let arr = ["apple", "appeal", "after", "banish"];
console.log(findMaxAString(arr)); 


//   

function findFirstNegativeIndex(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            return i;  
        }
    }
    return -1; 
}

let numbers = [3, 7, -1, 4, -5];
console.log(findFirstNegativeIndex(numbers));  


// 

function getTopStudent(names, scores) {
    let maxIndex = 0;

    for (let i = 1; i < scores.length; i++) {
        if (scores[i] > scores[maxIndex]) {
            maxIndex = i;
        }
    }

    return names[maxIndex];
}

let names = ["sanjay", "priya", "ramesh", "sanjana"];
let scores = [88, 45, 71, 91];

console.log(getTopStudent(names, scores));  


