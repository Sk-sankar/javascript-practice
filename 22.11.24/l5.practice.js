function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
    return arr;
}

// Example usage:
const numbers = [8, 4, 2, 9, 5, 6];
console.log("Unsorted array:", numbers);
const sortedNumbers = insertionSort(numbers);
console.log("Sorted array:", sortedNumbers);





