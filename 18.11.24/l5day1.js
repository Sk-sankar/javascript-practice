function bubbleSort(array) {
    const n = array.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
                
            }
        }
    }
    return array;
}
console.log(bubbleSort([2, 1, 4, 8, 3, 9]));

