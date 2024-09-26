let train_departures = [10, 15, 7, 20, 5];
let earliestDeparture = Math.min(...train_departures);
console.log("The earliest train departs at:", earliestDeparture);


// 

let seats = [1, 0, 1, 1, 0, 0, 1, 0];
let nonBookingSeats = 0;
for (let i = 0; i < seats.length; i++) {
    if (seats[i] === 0) {
        nonBookingSeats++;
    }
}

console.log("Total number of available seats:", nonBookingSeats);



// 


let arraySoldiers = [120, 300, 250, 180, 150];
let highiestSoldiers= Math.max(...arraySoldiers);
let index=arraySoldiers.indexOf(highiestSoldiers)
console.log("the highiest numbers of soldiers is :",index , "region");



// 


let arrayPopulations = [50, 60, 70, 80, 90];
let x=0;
let result=""
for(i=0;i<arrayPopulations.length;i++){

    x+=arrayPopulations[i];
    result=x/arrayPopulations.length;

}
console.log("The average of the population is :",result);




// 


let waterLevel= [30, 50, 20, 40, 60];

let lowestLevel=Math.min(...waterLevel);
let tank=waterLevel.indexOf(lowestLevel);
console.log("The lowest water level tank is :",tank,"and the water level is:",lowestLevel);

// 


let daysUntilFestival = [30, 15, 45, 10, 25];
let closestFestival = Math.min(...daysUntilFestival);
console.log("The closest upcoming festival is in:", closestFestival, "days.");



// 



let temperatures = [75, 80, 72, 85, 90];
let regions = [];
for (let i = 0; i < temperatures.length; i++) {
    if (temperatures[i] > 80) {
        regions.push(temperatures[i]); 
    }
}
console.log(regions);




// 
let dailyExpences=[20,30,40,50];
let sum=0;

console.log("the daily expenses:"+dailyExpences);
for(i=0;i<dailyExpences.length;i++){
    sum+=dailyExpences[i];
}

console.log("the total expence of the week:"+sum);




// 

let marks=[90,89,97,80,70,99];
let sum1=0;
for(i=0;i<marks.length;i++){
    sum1+=marks[i];

}
 let result5=sum1/marks.length;
 console.log(result5);



//  

let ages=[18,25,26,30,14];
let adults=ages.filter(function(age){
    return age>18;
});
adults.forEach(function(adult){
    console.log(adult)
});


// 


function countEvenNumbers(arr) {
    let count = 0;
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            count++;
        }
    }
    
    return count;
}
let num=[1,2,5,7,5,5,33,68,90,4,7,8];
console.log(countEvenNumbers(num));

