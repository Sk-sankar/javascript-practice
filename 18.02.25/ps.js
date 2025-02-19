
// let a = [1, 2,4,44, 55,66];
// let b = [1,3,8, 11, 23];

// let result=[];
// let left=0;
// let right=0;

// while(left<a.length && right<b.length){
//     if(a[left]<b[right]){
//         result.push(a[left]);
//         left++;
//     }
//     else{
//         result.push(b[right]);
//         right++;
//     }

// }
// console.log( result.concat(a.slice(left)).concat(b.slice(right)))




function mergesort(arr) {
    if (arr.length === 1) {
        return arr
    }
    let middle = Math.floor(arr.length / 2);
    let left = arr.slice(0, middle);
    let right = arr.slice(middle);

    return merge(mergesort(left), mergesort(right))
}
function merge(left, right) {
    let leftindex = 0;
    let rightindex = 0;
    let result = [];

    while (leftindex < left.length && rightindex < right.length) {
        if (left[leftindex] < right[rightindex]) {
            result.push(left[leftindex]);
            leftindex++;
        }
        else {
            result.push(right[rightindex]);
            rightindex++;
        }


    }
    return result
        .concat(left.slice(leftindex))
        .concat(right.slice(rightindex));
}

console.log(mergesort([4, 78, 3, 24, 8, 26, 39]));


