
// Sam's house has an apple tree and an orange tree that yield an abundance of fruit. Using the information given below, determine the number of apples and oranges that land on Sam's house.
// In the diagram below:

// The red region denotes the house, where  is the start point, and  is the endpoint. The apple tree is to the left of the house, and the orange tree is to its right.
// Assume the trees are located on a single point, where the apple tree is at point , and the orange tree is at point .
// When a fruit falls from its tree, it lands  units of distance from its tree of origin along the -axis. *A negative value of  means the fruit fell  units to the tree's left, and a positive value of  means it falls  units to the tree's right. *
// Apple and orange(2).png

// Given the value of  for  apples and  oranges, determine how many apples and oranges will fall on Sam's house (i.e., in the inclusive range )?

// For example, Sam's house is between  and . The apple tree is located at  and the orange at . There are  apples and  oranges. Apples are thrown  units distance from , and  units distance. Adding each apple distance to the position of the tree, they land at . Oranges land at . One apple and two oranges land in the inclusive range  so we print


function countApplesAndOranges(s, t, a, b, apples, oranges) {
    


    let applesin=0;
    let orangesin=0;
    
    for(let i=0;i<apples.length;i++){
      let applePosition=a+apples[i];
      if(applePosition>=s && applePosition<=t){
          applesin++
      }
    }
     for(let j=0;j<oranges.length;j++){
      let orangePosition=b+oranges[j];
      if(orangePosition>=s && orangePosition<=t){
          orangesin++
      }
    }
    
    
    console.log(applesin);
    console.log(orangesin);
    
  }

  //https://www.hackerrank.com/challenges/apple-and-orange/problem?isFullScreen=true
  



//   You are choreographing a circus show with various animals. For one act, you are given two kangaroos on a number line ready to jump in the positive direction (i.e, toward positive infinity).

//   The first kangaroo starts at location  and moves at a rate of  meters per jump.
//   The second kangaroo starts at location  and moves at a rate of  meters per jump.
//   You have to figure out a way to get both kangaroos at the same location at the same time as part of the show. If it is possible, return YES, otherwise return NO.
  
//   Example
  
  
  
  
//   After one jump, they are both at , (, ), so the answer is YES.
  
//   Function Description
  
//   Complete the function kangaroo in the editor below.
  
//   kangaroo has the following parameter(s):
  
//   int x1, int v1: starting position and jump distance for kangaroo 1
//   int x2, int v2: starting position and jump distance for kangaroo 2
//   Returns
  
//   string: either YES or NO



  function kangaroo(x1, v1, x2, v2) {
    if (v1 === v2) {
         return x1 === x2 ? "YES" : "NO"; 
    }
 
     if ((x2 - x1) % (v1 - v2) === 0 && (x2 - x1) / (v1 - v2) > 0) {
         return "YES";
     }
 
     return "NO";
 }

 // https://www.hackerrank.com/challenges/kangaroo/problem?isFullScreen=true