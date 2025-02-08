function myFunction(){
    console.log("welcome to apnacollege");
    console.log("we are learning JS");
}

myFunction();  //it gets only when it is called.
myFunction();  // for second time.

// helps from reducing redundancy(repeatancy).

function myf(msg){
    console.log(msg);
}
myf("help me");   // parameter should be included

// 2 numbers sum

function sum(a,b){
    console.log(a+b);
}
sum(10,15);

// function sum(a,b){
//     s=a+b;
//     return s;
// }
// sum(10,15);  doesnot print anything

// so 
// let val=sum(10,5);
// console.log(val);


//arrow function

const arrowSum=(a,b) =>{
    console.log(a+b);
};

arrowSum(15,24);


const arrowMul=(a,b)=>{
    console.log(a*b);
};

arrowMul(15,24);



// Qs. Create a function using the “function” keyword 
// that takes a String as an argument &
// returns the number of vowels in the string.

function countVowels(str){
    let count=0;
    for(const char of str){
        if(char==="a" || char==="e" || char==="i" || char==="o" || char==="u"){
            count++;
        }
    }
    console.log(count);
}

// Create an arrow function to perform the same task.

const arrowCount=(str)=>{
    let count=0;
    for(const char of str){
        if(char==="a" || char==="e" || char==="i" || char==="o" || char==="u"){
            count++;
        }
    }
    console.log(count);
};


function abc() {
    console.log("hello");
}

function myFunc(abc){
    return abc;
}

// this is call back functions .
//A callback is a function passed 
//as an argument to another function.

let arr=[1,2,3,4,5];

arr.forEach(function printval(val){
console.log(val);
})

// arr.forEach((val)=>{
//     console.log(val);
//     });
    
let arra=["pune","delhi","mumbai"];
arra.forEach((val,idx,arr)=>{
       console.log(val.toUpperCase(),idx,arr);
 });


// Qs. For a given array of numbers, print 
// the square of each value using the forEach loop.

let nums=[1,2,3,4];

nums.calcSquare((num)=>{
    console.log(num*num);
});

nums.forEach(calcSquare);


let newArray=nums.map((val)=>{
    return val*2;
});

console.log(newArray); // used to create a new array and store the values in that


let earr=[1,2,3,4,5,6,8,7,9];
let evenarr=arr.filter((val)=>{
    return val%2===0;
});
console.log(evenarr); // only which are even goes into this array 


let arr1=[1,2,3,4];

const output=arr.reduce((res,curr)=>{
    return res+curr;
});

console.log(output);

const output1=arr1.reduce((prev,curr)=>{
    return prev>curr?prev:curr;
});

console.log(output1);


// We are given array of marks of students. 
// Filter our of the marks of students that scored 90+.

let marks1=[77,88,99,432,556,223,88,44,65,90];

let marks12=marks1.filter((val)=>{
    return val>90;
});

console.log(marks12);



// Qs. Take a number n as input from user. 
// Create an array of numbers from 1 to n.
// Use the reduce method to calculate 
// sum of all numbers in the array.
// Use the reduce method to calculate product 
// of all numbers in the array.


let numb=prompt("enter a number:");
let arrayy=[];
for(let i=1;i<=n;i++){
    arrayy[i-1]=i;
}
const summ=arrayy.reduce((sum,curr)=>{
    return sum+curr;
});

console.log(summ);

const mull=arrayy.reduce((mul,curr)=>{
    return mul*curr;
});

console.log(mull);







