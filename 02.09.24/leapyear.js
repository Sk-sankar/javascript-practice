//leap year


let year=2000;
leap(year);
function leap(year){
    if(year%4===0 && year%400===0 || year%100){
        console.log("Leap year");
    }
    else if(year%100===0 ){
        console.log("Not leap year");
    }
    else{
        console.log("Leap");
    }
}