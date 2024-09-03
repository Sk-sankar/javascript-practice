// match

let teamScore=160;
let targetScore=186;
let oversLeft=0;
process(teamScore,targetScore,oversLeft);
function process(teamScore,targetScore,oversLeft){
    if(teamScore>targetScore){
        console.log("they won the match");
    }
    else if(oversLeft>0){
        console.log("the match will be continued");
    }
    else if(teamScore<targetScore){
        console.log("They lose the match");
    }
}