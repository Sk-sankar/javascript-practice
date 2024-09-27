const students_per_route = [45, 55, 30, 60, 40];
const bus_capacity = 50;
let total_buses = 0;

for (let students of students_per_route) {
  total_buses += (students / bus_capacity);
  result=Math.ceil(total_buses)
}

console.log(result);



// 



function evencount(arr){
    let even=0;
    for(i=0;i<arr.length;i++){
        if(arr[i]%2===0){
            even++;
        }
    }return even
}
let arr=[3,4,8,7,89,0,3,4,7,6,2,8];
console.log(evencount(arr));
// 



let colors=["blue","white"];
 colors.push("black","sandel");
//  colors.forEach(color=>console.log(color));
color=colors.forEach(function (col){
    console.log(col);
});

// 


let ages=[30,28,13,43,12,16,24];
let adults=ages.filter(function(adult){
    return adult>18;
});
console.log(adults);



let r=10;
function multiples(n){
    for(i=n;i<=r;i++){
        if(i%2===1){
            console.log(i);
        }
    }
}
multiples(1);



// 

function checkVowelOrConsonant(char) {
    char = char.toLowerCase();
    
    if ('aeiou'.includes(char)) {
        console.log("The character is a vowel.");
    }
    else if (/[a-z]/.test(char)) {
        console.log("The character is a consonant.");
    } else {
        console.log("Invalid input, please enter a letter.");
    }
}

const character = "p";
checkVowelOrConsonant(character);


//

let a =10;
let b = 30 ;
let c = 5;

if(a>b && a>c){
    console.log(a);
}
else if(b>a && b>c){
    console.log(b);
}
else{
    console.log(c);
}


// 


function discount(id,n,r){
    for(i=1;i<=n;i++){
        console.log(id)
        id+=r;
    }
    
}
discount(1,4,2)


// 


let fruits = ['Apple', 'Banana', 'Cherry', 'Mango', 'Orange'];
console.log("Initial array:", fruits);
fruits.shift();
console.log("After removing the first fruit:", fruits);
fruits.shift();
console.log("After removing the second fruit:", fruits);


let sports=["chess","boxing"]
sports.unshift("tennis","carrom");
let sum="";
for(result of sports){
    sum+=result+" "
   
} console.log(sum);


// 

let arr1="HTMLCSSJavaScript";
let src=arr1.split("-,");
console.log(src);


// 
let numbers = [10, 20, 30, 40];
let reversedNumbers = [];
reversedNumbers.push(numbers.pop()); 
reversedNumbers.push(numbers.pop()); 
reversedNumbers.push(numbers.pop()); 
reversedNumbers.push(numbers.pop()); 
console.log(reversedNumbers);


// 

let fruits1=["apple","banana","grape","mango"];
let out=fruits1.join();
console.log(out);


// 


const car={
    make : "sankar",
    model:"BMW",
    year:2006


}
console.log(car.model);

// 


let books = [
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee"
    },
    {
        title: "1984",
        author: "George Orwell"
    }
];
console.log(books[0].title);



// 

let cars1=[
    { 
        brand:"tata",
        model:"nano"
    },
    {
        brand:"honda",
        model:"civic"
    }
]
cars1[0].year=2006;
cars1[1].year=2008;

console.log(cars1);


const   products = [
    { name: "Laptop", price: 800 },
    { name: "Phone", price: 500 },
  ]

let sum2=products[0].price+products[1].price;
console.log(sum2);  




// 


const    students = [
    { name: "Amar", grade: "A" },
    { name: "Akbar", grade: "B" },
    { name: "Anthony", grade: "A" },
  ];

  console.log(students[0].name);
  console.log(students[2].name);
