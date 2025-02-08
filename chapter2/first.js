//arithmetic operators

let a=5;
let b=2;
console.log("a=",a);
console.log("b=",b);
console.log("a+b=",a+b);
console.log("a-b=",a-b);
console.log("a*b=",a*b);
console.log("a/b=",a/b);

console.log("a%b=",a%b);
//remiander

console.log("a**b=",a ** b);
//5 power 2

let x=5;
let y="5";

console.log("a==b",a==b);
// gives the value true 

console.log("a==b",a ===b);
//gives false becz we r using strict types



let mode="dark";
let color;
if(mode ==="dark"){
    color="black";
}
if(mode==="light"){
    color="white";
}

console.log(color);



let agee=25;
if(agee>=18){
    console.log("Vote");
}
else{
    console.log("not vote");
}


let num=25;
let result=num>=18? "adult" : "not adult";
console.log(result);


let mine=prompt("enter name");
console.log(mine);

// Qs1. Get user to input a number using prompt(“Enter a number:”). 
// Check if the number is a multiple of 5 or not.


let number=prompt("enter a number");
if(num%5===0){
    console.log("Yes");
}
else{
    console.log("No");
}


// Qs2. Write a code which can give 
// grades to students according to their scores:
// 80-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F


let score=prompt("enter number");
if(score>=90 && score<=100){
    console.log("A");
}
else if(score>=70 && score<=89){
    console.log("B");
}
else if(score>=60 && score<=69){
    console.log("C");
}
else if(score>=50 && score<=59){
    console.log("D");
}
else{
    console.log("E");
}












