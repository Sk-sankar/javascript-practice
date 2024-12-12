// HackerLand University has the following grading policy:

// Every student receives a  in the inclusive range from  to .
// Any  less than  is a failing grade.
// Sam is a professor at the university and likes to round each student's  according to these rules:

// If the difference between the  and the next multiple of  is less than , round  up to the next multiple of .
// If the value of  is less than , no rounding occurs as the result will still be a failing grade.


function gradingStudents(grades) {
    let roundedGrades = []; 

    for (let i = 0; i < grades.length; i++) {
        let grade = grades[i];

        if (grade < 38) {
          
            roundedGrades.push(grade);
        } else {
           
            let nextMultipleOf5 = Math.ceil(grade / 5) * 5;

            
            if (nextMultipleOf5 - grade < 3) {
                roundedGrades.push(nextMultipleOf5); 
            } else {
                roundedGrades.push(grade); 
            }
        }
    }

    return roundedGrades;
}




// You are choreographing a circus show with various animals. For one act, you are given two kangaroos on a number line ready to jump in the positive direction (i.e, toward positive infinity).

// The first kangaroo starts at location  and moves at a rate of  meters per jump.
// The second kangaroo starts at location  and moves at a rate of  meters per jump.
// You have to figure out a way to get both kangaroos at the same location at the same time as part of the show. If it is possible, return YES, otherwise return NO.



function kangaroo(x1, v1, x2, v2) {
    if (v1 === v2) {
        
        return x1 === x2 ? "YES" : "NO";
    }
    if ((x2 - x1) % (v1 - v2) === 0 && (x2 - x1) / (v1 - v2) > 0) {
        return "YES";
    }

    return "NO";
}

//link :https://www.hackerrank.com/challenges/kangaroo/problem?isFullScreen=true