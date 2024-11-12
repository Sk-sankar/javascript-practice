// // Given a array of string return the String which has the maximum length. arr = ["Ram", "Abraham", "Peter"]

// let arr = ["Ram", "Abraham", "Peter"];
// let em = "";

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i].length > em.length) {
//         em = arr[i];
//     }
// }
// console.log(em);


// // ----------------
// let arr11 = ["apple", "Ali", "mango", "Brush"];
// let result = arr11.filter(word => word[0].toLowerCase() === 'a');

// console.log(result);


// // 
// function reverseString(str) {
//     let reversed = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//         reversed += str[i]; 
//     }
//     return reversed;
// }


// // 

// let inputString = "hello";
// let result1 = reverseString(inputString);
// console.log(result1);  


function countDistinctVowels(str) {
    var words=str.toLowerCase();
    var split=words.split("");
      for(var word of split){
        var count=[];
        if(word==="a"||"e"||"i"||"o"||"u"){
            
            count.push(word);
        }
    }
    console.log(count.length);
   }
   countDistinctVowels("hello")

   
   function printStar(n) {
    // Enter you code HERE
    for(i=1;i<n;i++){
        let line="";
  
        for(j=1;j<=n-i;j++){
            line+=" ";
        }
        for(k=1;k<=i;k++){
            line+=i+" ";
        }
        console.log(line);
        
    }
    for(i=n;i>=1;i--){
        let line="";
        
        for(j=1;j<=n-i;j++){
            line+=" ";
        }
        for(k=1;k<=i;k++){
            line+=i+" ";
        }
        console.log(line)
    }
    

}printStar(4)