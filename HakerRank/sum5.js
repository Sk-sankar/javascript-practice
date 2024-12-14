
//https://www.hackerrank.com/challenges/migratory-birds/problem?isFullScreen=true


function migratoryBirds(arr) {
    // Write your code here
let obj={};
for( let i=0;i<arr.length;i++){
    if(obj[arr[i]]){
        obj[arr[i]]+=1;
    }
    else{
        obj[arr[i]]=1
    }
}

let maxcount=0;
let eleamt=0;
for(let ele of Object.keys(obj)){
    if(obj[ele]>maxcount){
        maxcount=obj[ele];
        eleamt=ele;
    }
}
return eleamt
}


//https://www.hackerrank.com/challenges/day-of-the-programmer/problem?isFullScreen=true


function dayOfProgrammer(year) {
    
    let day, month = "09"; 
        let isLeapYear;
        if (year < 1918) {
            
            isLeapYear = year % 4 === 0;
        } else if (year > 1918) {
            
            isLeapYear = (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0);
        }
    
     
        if (year === 1918) {
            
            day = 256 - (31 + 15 + 31 + 30 + 31 + 30 + 31 + 31); 
        } else if (isLeapYear) {
            // Leap year
            day = 256 - (31 + 29 + 31 + 30 + 31 + 30 + 31 + 31);
        } else {
            // Non-leap year
            day = 256 - (31 + 28 + 31 + 30 + 31 + 30 + 31 + 31);
        }
    
    
        if (day < 10) {
            day = "0" + day; 
        }
        return day + "." + month + "." + year;
    }
    