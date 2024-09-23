function sumNumbers(n) {
    let sum = 0;
    let i = 1;
    while (i <= n) {
      sum += i;
      i++;
    }
    return sum;
  }
  console.log(sumNumbers(10));



//   



function calculateGrade(score) {
    if (score >= 90) {
        console.log("Grade: A");
    } else if (score >= 80) {
        console.log("Grade: B");
    } else if (score >= 70) {
        console.log("Grade: C");
    } else if (score >= 60) {
        console.log("Grade: D");
    } else {
        console.log("Grade: F");
    }
}
calculateGrade(90);





// 



let a = 15;
let b = 10;
let c = 3;

if( a > b && a > c) {
    console.log(a);
}

else if (b > a && b > c) {
    console.log(b);
}
else {
    console.log(c);
}



//  


function generateSeries(n) {
    let x = "";
    for ( i = 1;i <=n; i++) {
        let term = i ** 2; 
         x+= term+" ";
       
        
    }

    console.log(`The first ${n} terms of the series are:${x} `);
}
generateSeries(5);





// _____________________________________________________________________




// function square(n){
//     let x="";
//     for(i=1;i<=n;i++){
//         let mul=i**2;
//         x+=mul+" ";
//     }
//     console.log(`the first ${n} terms of the series are:${x}`);
// }
// square(5);



// function isMultipleOfSeven(N) {
//     if (N %7 === 0) { 
//         console.log("YES");
//     } else {
//         console.log("No");
//     }
// }

// // Example usage
// let N = 49;
// isMultipleOfSeven(N);