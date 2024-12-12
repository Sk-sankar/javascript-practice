//https://www.hackerrank.com/challenges/bon-appetit/problem?isFullScreen=true


function bonAppetit(bill, k, b) {
    // Write your code here
    let totalSharedCost = 0;
    for (let i = 0; i < bill.length; i++) {
        if (i !== k) {
            totalSharedCost += bill[i];
        }
    }
    let annaShare = totalSharedCost / 2;

    if (b === annaShare) {
        console.log("Bon Appetit");
    } else {
        console.log(b - annaShare);
    }
}

//https://www.hackerrank.com/challenges/divisible-sum-pairs/problem?isFullScreen=true



function divisibleSumPairs(n, k, ar) {
    // Write your code here
    let arrcount=0;
    for(let i=0;i<ar.length;i++){
        for(let j=i+1;j<ar.length;j++){
            if((ar[i]+ar[j])%k==0){
                arrcount++;
            }
        }
    }
    return arrcount;

}
