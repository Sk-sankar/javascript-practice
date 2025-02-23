// // let a=[2,4,62,1,22,42];
// // a.sort((a,b)=>a-b)
// // let max=a[0];
// // for(i=1;i<a.length;i++){
// //     if(a[i]>max){
// //         max=a[i]
// //     } 
    
// // }
// // console.log()

// // second maximum number
// // let a=[2,4,62,1,22,42];
// // a.sort((a,b)=>a-b)
// // let max=a[0];
// // let second_max=a[0];
// // for(i=1;i<a.length;i++){
// //     if(a[i]>max){
// //         second_max=max;
// //         max=a[i]
// //     } 
// // }
// // console.log(second_max)
// // console.log(max)


// //List all the second 2nd max in table (not one second largest)

// // let a=[2,23,4,2,2,4,2,4,23,33];

// // a.sort((a,b)=>b-a)
// // let max=a[0];
// // let second_max=null;
// // for(i=1;i<a.length;i++){
// //     if(a[i]<max){
// //         second_max=a[i];
// //         break;
// //     }   
// // }

// // console.log(a.filter(num=>num==second_max))

// //Write a code to return a third minimum number in an array.

// let a=[2,23,4,2,2,4,,8,2,33];
// a.sort((a,b)=>a-b)
// let min=a[0];
// let second_min=a[0];
// let third_min=a[0];
// for(i=1;i<a.length;i++){
//     if(a[i]>min){
//         second_min=min;
//         min=a[i]
//     } 
// }
// for(i=1;i<a.length;i++){
//     if(a[i]>second_min){
//         third_min=second_min;
//         second_min=a[i]
//     } 
// }
// console.log(third_min)

//Find the Kth largest value in the given array.(Without sort)

// let a=[2,4,2,2,4,2,4,23,33];
// a.sort((a,b)=>a-b);
// let k=3;
// console.log(a[a.length-k])
// // let max=a[0];
// // let k=3
// // let result=[];
// // for(i=0;i<a.length;i++){
// //     if(a[i]>max){
// //         result.push(max)
// //         max=a[i];
        
// //     }

// // }
// // console.log(result)

// // function primenumber(n){
// //     if(n<=1) return false
// //     for(i=2;i<=Math.sqrt(n);i++){
// //         if(n%i===0){
// //             return false
// //         }
// //     }
// //     return true

// // }

// // function check(arr){
// //     let result=[];
// //     for(num of arr){
// //         if(primenumber(num)){
// //             result.push(num)
// //         }
// //     }
// //     return result;
// // }
// // console.log(check([1,2,3,4,5,6,7,8,9,10])    
// function twomax(a){
// let max=a[0];
// let second_max=a[0];
// for(i=1;i<a.length;i++){
//     if(a[i]>max){
//         second_max=max;
//         max=a[i];
//     }
   
// }
// return ([max,second_max])
// }
// console.log(twomax(a))

//Given the array which is already sorted how will you search for an element in the array?


// function binary(arr,tar){
//     let left=0;
//     let right=arr.length-1;
//     while(left<right){
//         let mid=Math.floor((left+right)/2);
//         if(tar)
//     }
// }


function traiangle(n){
    for(i=1;i<=n;i++){
        let row="";
        for(j=1;j<=n-i;j++){
            row+=" ";
           
        }
        for(k=1;k<=i*2-1;k++){
            if(i===1 || i===n || k===1 || k===i*2-1){
                row+="*";
            }
            else{
                row+=" ";
            }
        }
        console.log(row)
        
    }
   
}
traiangle(5)