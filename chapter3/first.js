for (let i = 1; i <= 5; i++) {
    console.log("apna college");
}
console.log("loop has ended");
//executed 5 times

let sum=0;
for(let i=1;i<=5;i++){
    sum=sum+i;
}
console.log(sum);

for (let i = 1; i <= 5; i++) {
    console.log("i=",i);
}

let i=1;
while(i<=5){
    console.log(i);
    i++;
}

let j=20;
do{
    console.log("sos");
    i++;
}while(i<=10);


//for-of loop
let str="sahasra";
let size=0;
for(let val of str){
    console.log(val);
    size++
}
console.log(size);


//for-in loop

let student={
    name:"rahul kumar",
    age:20,
    cgpa:5.5,
    isPass:true,
};

for(let key in student){
    console.log("key=",key,"value=",student[key]);   
}

// Print all even numbers from 0 to 100.

for(let i=0;i<=100;i+=2){
    console.log(i);
}


// Create a game where you 
// start with any random game number. 
// Ask the user to keep
// guessing the game number until 
// the user enters correct value.

let gameNumber=25;
let userNumber=prompt("guess the game number:");
while(userNumber!==gameNumber){
    userNumber=prompt("You entered wrong number .Guess Again");
}
console.log("Congrats!You entered the right number");


//strings
let strr="sahasra";
let str1="myself";

console.log(strr[5]);


let specialString='this is a template literal';
console.log(typeof specialString);


let obj={
    item:"pen",
    price:10,
};

let output='the cost of ${obj.item} is ${obj.price} rupees';
console.log("the cost of",obj.item,"is",obj.price,"rupees");
console.log(output);

let spcl='sum of ${1+2+3}';
console.log(spcl);

//escape characters 
console.log("Apna\nCollege");
console.log("Apna\tCollege");

let slen="apna\tcollege";
console.log(slen);



let stru="apnacollege";
console.log(stru.toUpperCase());

let strl="APNACOLLEGE";
console.log(strl.toLowerCase());


let str2="sahasra";
let str2u=str2.toUpperCase();
console.log(str2u); // shld be stored in another one becoz strings are immutable
// immutable means cannot be changed 

let str3="   apna  college   js   ";
console.log(str3.trim());//removes starting and ending spaces 


let str4="mynameissos";
console.log(str4.slice(2,6));
console.log(str4.slice(2));  // from 2 to last character

let str5="sahasra";
let str6="sos";
console.log(str5.concat(str6));

let res="hello"+123;
console.log(res);

let str7="sahasra";
console.log(str.replace("a","d"));

let str8="sahasra";
console.log(str8.charAt(4));

// Prompt the user to enter their full name. 
// Generate a username for them based on the input.
// Start username with @, followed by their 
// full name and ending with the fullname length.

// eg: user name =“shradhakhapra”, username should be “@shradhakhapra13”


let strng = prompt("enter your full name without spaces");
let username="@"+strng+strng.length;
console.log(username);






        











