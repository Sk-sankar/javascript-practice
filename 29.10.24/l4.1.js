// function cc(n){
//     count=0;
//     count1=0;
//     for(i=0;i<n.length;i++){
//         if(i%2===0){
//             count++;
//         }
//         else{
//             count1++;
//         }
//     }
//     return { evenCount: count, oddCount: count1 }
// }
// let ans=cc([1,2,3,4,5,6,7,8,22]);
// console.log(ans);

// function findFirstAndLastIndices(arr, target) {
//     var empty=[];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === target) {
//               empty.push(i);
//         }
//     }
//     return (`first : ${empty[0]}, last : ${empty[empty.length-1]}`); 
// }

// console.log(findFirstAndLastIndices([5, 2, 3, 5, 7, 5, 8,2],2 ));

// function rwords(s){
//     let words=s.split(" ");
//     let reverrse=words.reverse();
//     return reverrse.join(" ");
// }
// let ans1=rwords("i love you");
// console.log(ans1);

// let s="i love you";
// console.log(s.split(" ").reverse().join(" "));

function lcm(a,b){
  let   max=Math.max(a,b);
    while(true){
               if(max%a===0 && max%b===0){
                return max;
               }
               max++;

    }
}

function arr(a){
    
    while(a.length > 1){
        let newa=[]; 
      for(i=0;i<a.length-1;i++){
        let f=a[i];
        let l=a[i+1];
        let lecm=lcm(f,l);
        newa.push(lecm);

      }
      a=newa;
      console.log("newarray:",a)
    }
    return a[0]
}
let result=arr([1,2,3,4,5,6]);
console.log(result);
