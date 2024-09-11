

  function sumNaturalNumbers(n) {
    let sum = 0;
    let i = 1;

    while (i <= n) {
        sum += i;
        i++;
    }

    return sum;
}

console.log(sumNaturalNumbers(10)); 


function calculateFactorial(n) {
    let a= 1;
    let factorial = 1;
    while (a <= n) {
        factorial *= a;
        a++;
    }
    console.log(factorial);

}
calculateFactorial(5);


function printEvenNumbers(n) {
    i = 1

    while (i <= n) {
        if (i % 2 === 0) {
            console.log(i);
        }
         i++;
    }

}

printEvenNumbers(9);



function sumNumbers(n) {
    let sum = 0;
    let i = 0;
    while (i <= n) {
      sum += i;
      i++;
    }
    return sum;
  }
  console.log(sumNumbers(20));

