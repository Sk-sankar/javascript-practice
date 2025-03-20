// function highestfrequency(arr){
//  let obj={};
//  let maxcount=0;
//  for(let i=0;i<arr.length;i++){
//     if(obj[arr[i]]){
//         obj[arr[i]]+=1;
//     }
//     else{
//         obj[arr[i]]=1;
//     }


//     if(obj[arr[i]]>maxcount){
//         maxcount=obj[arr[i]];
//      }
//  }

//  console.log(maxcount)
 
// }
// highestfrequency([3,3,2,2,1,3,1,1,22,2])


function isUnique(str) {
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length; j++) {
            if (str[i] === str[j]) {
                console.log("The string has duplicate characters.");
                return;
            }
        }
    }
    console.log("The string is unique.");
}

isUnique("abcdd")


function highestFrequency(arr) {
    let obj = {};
    let maxElement = arr[0], maxCount = 0;

    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        if(obj[num]){
            obj[num]+=1;

        }
        else{
            obj[num]=1
        }
        
        if (obj[num] > maxCount) {
            maxCount = obj[num];
            maxElement = num;
        }
    }
    return maxCount;
}

console.log(highestFrequency([5, 5, 4, 1, 1, 1, 6, 7, 8])); 


function sortDates(dates) {
    const monthMap = { 
        "JAN": 1, "FEB": 2, "MAR": 3, "APR": 4, "MAY": 5, "JUN": 6,
        "JUL": 7, "AUG": 8, "SEP": 9, "OCT": 10, "NOV": 11, "DEC": 12
    };

    function parseDate(date) {
        let month = date.substring(0, 3);
        let day = parseInt(date.substring(4, 6));
        let year = parseInt(date.substring(7));

        return { month: monthMap[month], day, year };
    }

    function compareDates(date1, date2) {
        let d1 = parseDate(date1);
        let d2 = parseDate(date2);

        if (d1.year !== d2.year) return d1.year - d2.year;
        if (d1.month !== d2.month) return d1.month - d2.month;
        return d1.day - d2.day;
    }

    for (let i = 0; i < dates.length - 1; i++) {
        for (let j = i + 1; j < dates.length; j++) {
            if (compareDates(dates[i], dates[j]) > 0) {
               
                [dates[i],dates[j]]=[dates[j],dates[i]]
            }
        }
    }
    
    return dates;
}


console.log(sortDates(["JAN-09-2015", "FEB-01-2024", "OCT-10-1987", "MAR-14-2000"]));

