function searchInNestedArrays(nestedArr, target) {
    const result = []; 

    for (let i = 0; i < nestedArr.length; i++) {
        const subArray = nestedArr[i]; 

        for (let j = 0; j < subArray.length; j++) {
            if (subArray[j] === target) {
                result.push([i, j]); 
                
            }
        }
    }

    return result;
}

// Example usage:
const nestedArrays = [ [1, 2, 3], [4, 5, 6],[7, 8, 3, 9]];
const target = 3;

const indices = searchInNestedArrays(nestedArrays, target);
console.log(`Target found at positions: ${JSON.stringify(indices)}`);
