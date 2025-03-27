// let num=60;

// let reverse=num.toString().split("").reverse().join("")

// if(reverse==num){
//     console.log("palindrome")
// }
// else{
//     console.log("not")
// }

// palindrome in range

// let arr=[22,44,32,34,33]

// for(let i=0;i<arr.length;i++){
//     let reverse=arr[i].toString().split("").reverse().join("");
//     if(reverse==arr[i]){
//         console.log(`${arr[i] } is palindrome`)
//     }
//     else{
//         console.log("no")
//     }
// }


function prime(num){
    if(num<=1) return false
    for(i=2;i<=Math.sqrt(num);i++){
        if(num%i==0){
            return false;
        }
    }
    return true
}


function check(arr){
    let empty=[]
    for( i of arr){
        if(prime(i)){
            empty.push(i)
        }
    }
    return empty
}
console.log(check([32,42,2]))