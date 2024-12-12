// https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem?isFullScreen=true



function breakingRecords(scores) {
    // Write your code here

    let maxScore = scores[0]; 
    let minScore = scores[0];
    let maxCount = 0; 
    let minCount = 0; 

    
    for (let i = 1; i < scores.length; i++) {
        if (scores[i] > maxScore) {
            maxScore = scores[i]; 
            maxCount++; 
        } else if (scores[i] < minScore) {
            minScore = scores[i]; 
            minCount++; 
        }
    }

    
    return [maxCount, minCount];

}


//https://www.hackerrank.com/challenges/the-birthday-bar/problem?isFullScreen=true

function birthday(s, d, m) {
    let count = 0;

    for (let i = 0; i <= s.length - m; i++) {
        let sum = 0;

        for (let j = i; j < i + m; j++) {
            sum += s[j];
        }

        if (sum === d) {
            count++;
        }
    }
    
    return count;
}