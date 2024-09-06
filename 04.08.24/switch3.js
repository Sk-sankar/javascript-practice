let age=15;
switch(true){
    case (age<5):
        console.log("The ticket is free");
        break;
    case(5< age && age <=12) :
        console.log("The ticket price is 10");
        break;
    case(13<= age && age<=64):
        console.log("The ticket price is 20");
        break;
    case(age>=65):
        console.log("The ticket price is 15");
        break;
    default:
        console.log("Not alowed");
        break;               
}